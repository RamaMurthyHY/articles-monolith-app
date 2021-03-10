const userModel = require('../models/user.model');
const path = require('path');
const fs = require('fs');
const template = require('../helpers/template');
const edit = require('../views/users/edit');

module.exports = {
  create: async (req, res) => {
    try {
      const data = req.body;
      const result = await userModel.insert(data);
      return res.json({ success: true, data: result });
    } catch (error) {
      console.error('User controller in insert method', error);
      res.status(500).json({ error: true, message: error.message });
    }
  },
  getAll: async (req, res) => {
    try {
      const result = await userModel.getAll();
      return res.json({ success: true, data: result });
    } catch (error) {
      console.error('User controller in GetAll method', error);
      res.status(500).json({ error: true, message: error.message });
    }
  },
  getById: async (req, res) => {
    try {
      const { id } = req.params;
      const result = await userModel.getById(id);
      return res.json({ success: true, data: result });
    } catch (error) {
      console.error('User controller in getById method', error);
      res.status(500).json({ error: true, message: error.message });
    }
  },
  update: async (req, res) => {
    try {
      const { id } = req.params;
      const result = await userModel.update(id, req.body);
      return res.json({ success: true, data: result });
    } catch (error) {
      console.error('User controller in update method', error);
      res.status(500).json({ error: true, message: error.message });
    }
  },
  updateFormData: async (req, res) => {
    try {
      const { id } = req.params;
      const reqData = req.body;
      const user = await userModel.getById(id);
      Object.keys(reqData).map((key) => (user[key] = req.body[key]));
      const result = await userModel.update(id, user);
      return res.json({ success: true, data: result });
    } catch (error) {
      console.error('User controller in update method', error);
      res.status(500).json({ error: true, message: error.message });
    }
  },
  updateOne: async (req, res) => {
    try {
      const { id } = req.params;
      const result = await userModel.patch(id, req.body);
      return res.json({ success: true, data: result });
    } catch (error) {
      console.error('User controller in updateOne method', error);
      res.status(500).json({ error: true, message: error.message });
    }
  },
  remove: async (req, res) => {
    try {
      const { id } = req.params;
      console.log('id', id);
      await userModel.remove(id);
      return res.status(202).json({ success: true });
    } catch (error) {
      console.error('User controller in remove method', error);
      res.status(500).json({ error: true, message: error.message });
    }
  },

  //Views
  add: (req, res) => {
    try {
      res.sendFile(path.join(process.cwd(), '/src/views/users/add.html'));
    } catch (error) {
      console.error('User controller in add method', error);
      res.status(500).json({ error: true, message: error.message });
    }
  },
  list: async (req, res) => {
    try {
      const result = await userModel.getAll();
      const bodyStr = result
        .map((user) => {
          return `<tr><td>${user.id}</td><td>${user.first_name}</td><td>${user.last_name}</td><td>${user.email}</td></tr>`;
        })
        .join('');
      fs.readFile(
        path.join(process.cwd(), '/src/views/users/list.html'),
        'utf-8',
        (error, html) => {
          if (error) res.status(500).json({ error: true, message: error });
          const alteredHtml = html.replace('{{bodyStr}}', bodyStr);
          res.send(alteredHtml);
        },
      );
    } catch (error) {
      console.error('User controller in GetAll method', error);
      res.status(500).json({ error: true, message: error.message });
    }
  },
  view: async (req, res) => {
    try {
      const { id } = req.params;
      const result = await userModel.getById(id);
      fs.readFile(
        path.join(process.cwd(), '/src/views/users/view.html'),
        'utf-8',
        (error, html) => {
          if (error) res.status(500).json({ error: true, message: error });
          const alteredHtml = template(result, html);
          res.send(alteredHtml);
        },
      );
    } catch (error) {
      console.error('User controller in view method', error);
      res.status(500).json({ error: true, message: error.message });
    }
  },
  edit: async (req, res) => {
    try {
      const { id } = req.params;
      const result = await userModel.getById(id);
      res.send(edit(result));
    } catch (error) {
      console.error('User controller in edit method', error);
      res.status(500).json({ error: true, message: error.message });
    }
  },
};

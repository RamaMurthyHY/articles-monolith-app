const userModel = require("../models/user.model");

module.exports = {
  create: async (req, res) => {
    try {
      const data = req.body;
      const result = await userModel.insert(data);
      return res.json({ success: true, data: result });
    } catch (error) {
      console.error("User controller in insert method", error);
      res.status(500).json({ error: true, message: error.message });
    }
  },
  getAll: async (req, res) => {
    try {
      const result = await userModel.getAll();
      return res.json({ success: true, data: result });
    } catch (error) {
      console.error("User controller in GetAll method", error);
      res.status(500).json({ error: true, message: error.message });
    }
  },
  getById: async (req, res) => {
    try {
      const { id } = req.params;
      const result = await userModel.getById(id);
      return res.json({ success: true, data: result });
    } catch (error) {
      console.error("User controller in getById method", error);
      res.status(500).json({ error: true, message: error.message });
    }
  },
  update: async (req, res) => {
    try {
      const { id } = req.params;
      const result = await userModel.update(id, req.body);
      return res.json({ success: true, data: result });
    } catch (error) {
      console.error("User controller in update method", error);
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
      console.error("User controller in update method", error);
      res.status(500).json({ error: true, message: error.message });
    }
  },
  updateOne: async (req, res) => {
    try {
      const { id } = req.params;
      const result = await userModel.patch(id, req.body);
      return res.json({ success: true, data: result });
    } catch (error) {
      console.error("User controller in updateOne method", error);
      res.status(500).json({ error: true, message: error.message });
    }
  },
  remove: async (req, res) => {
    try {
      const { id } = req.params;
      console.log("id", id);
      await userModel.remove(id);
      return res.status(202).json({ success: true });
    } catch (error) {
      console.error("User controller in remove method", error);
      res.status(500).json({ error: true, message: error.message });
    }
  },

  //Views
  add: (req, res) => {
    try {
      res.render("users/user.add.ejs", {
        pageTitle: "Register",
        page: "user.add",
      });
    } catch (error) {
      console.error("User controller in add method", error);
      res.status(500).json({ error: true, message: error.message });
    }
  },
  list: async (req, res) => {
    try {
      const result = await userModel.getAll();
      res.render("users/user.list.ejs", {
        users: result,
        pageTitle: "Users list",
        page: "user.list",
      });
    } catch (error) {
      console.error("User controller in GetAll method", error);
      res.status(500).json({ error: true, message: error.message });
    }
  },
  view: async (req, res) => {
    try {
      const { id } = req.params;
      const result = await userModel.getById(id);
      res.render("users/user.view.ejs", {
        user: result,
        pageTitle: "User view",
        page: "user.view",
      });
    } catch (error) {
      console.error("User controller in view method", error);
      res.status(500).json({ error: true, message: error.message });
    }
  },
  edit: async (req, res) => {
    try {
      const { id } = req.params;
      const result = await userModel.getById(id);
      res.render("users/user.edit.ejs", {
        user: result,
        pageTitle: "User update",
        page: "user.edit",
      });
    } catch (error) {
      console.error("User controller in edit method", error);
      res.status(500).json({ error: true, message: error.message });
    }
  },
};

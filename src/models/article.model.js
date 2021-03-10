const db = require('../db/index');

const user = {
  insert: async (data) => {
    const { title, description, content, author_id, slug, tags, language } = data;
    const result = await db.query(
      `INSERT INTO articles(
        title, description, content, slug, author_id, tags, language) 
        VALUES ($1,$2,$3,$4,$5,$6, $7 ) returning *`,
      [title, description, content, slug, author_id, tags, language],
    );
    return result[0];
  },

  getAll: () => {
    return db.query('SELECT * from articles').then((result) => result);
  },

  getById: async (id) => {
    const result = await db.query(`SELECT * from articles where id=${id}`);
    return result[0];
  },

  update: (id, data) => {
    const { title, description, content, author_id, slug, tags, language } = data;
    const result = db.query(
      `UPDATE articles SET 
      title = $1,
      description = $2, 
      content = $3, 
      author_id = $4, 
      slug = $5, 
      tags = $6, 
      language = $7
      WHERE id=${id} returning *`,
      [title, description, content, author_id, slug, tags, language],
    );
    return result[0];
  },

  patch: (id, data) => {
    const updateTo = Object.keys(data)[0];
    const result = db.query(
      `UPDATE articles SET 
      ${[updateTo]} = $1
      WHERE id=${id} returning *`,
      [data[updateTo]],
    );
    return result[0];
  },

  remove: (id) => {
    return db.query(`UPDATE articles SET is_deleted=true where id=${id}`);
  },
};

module.exports = user;

const db = require('../db/index');

const user = {
  insert: async (data) => {
    const { first_name, last_name, email_id, dob, phone, password, gender } = data;
    const result = await db.query(
      `INSERT INTO users(
        first_name, 
        last_name, 
        email_id, 
        dob, 
        phone, 
        password, 
        gender) 
        VALUES ($1,$2,$3,$4,$5,$6,$7 ) returning *`,
      [first_name, last_name, email_id, dob, phone, password, gender],
    );
    return result[0];
  },

  getAll: () => {
    return db.query('SELECT * from users').then((result) => result);
  },

  getById: async (id) => {
    const result = await db.query(`SELECT * from users where id=${id}`);
    return result[0];
  },

  update: (id, data) => {
    const { first_name, last_name, email_id, dob, phone, password, gender } = data;
    const result = db.query(
      `UPDATE users SET 
      first_name = $1,
      last_name = $2, 
      email_id = $3, 
      dob = $4, 
      phone = $5, 
      password = $6, 
      gender = $7
      WHERE id=${id} returning *`,
      [first_name, last_name, email_id, dob, phone, password, gender],
    );
    return result[0];
  },

  patch: (id, data) => {
    const updateTo = Object.keys(data)[0];
    const result = db.query(
      `UPDATE users SET 
      ${[updateTo]} = $1
      WHERE id=${id} returning *`,
      [data[updateTo]],
    );
    return result[0];
  },

  remove: (id) => {
    return db.query(`UPDATE users SET is_deleted=true where id=${id}`);
  },
};

module.exports = user;

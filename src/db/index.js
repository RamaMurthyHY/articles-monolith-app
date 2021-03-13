const { Client } = require("pg");

const client = new Client({
  user: "postgres",
  host: "articlesmonolithdb.cprga929qpdr.us-east-1.rds.amazonaws.com",
  database: "articlesmonolithdb",
  password: "articlesmonolith",
  port: 5432,
});

client.connect((err) => {
  if (err) {
    console.error("connection error", err.stack);
  } else {
    console.log("connected");
  }
});

module.exports = {
  query(sqlStatement, values) {
    return client.query(sqlStatement, values).then((res) => res.rows);
  },
};

const mysql = require("mysql2");

const dbconfing = {
    host: "localhost",
    port: 3306,
    user: "root",
    password: "root",
    database: "db_movies",
};
const db = mysql.createConnection(dbconfing);

db.connect(err => {
    if (err) { throw err; }
    console.log("MySQL connesso")
});

module.exports = db;
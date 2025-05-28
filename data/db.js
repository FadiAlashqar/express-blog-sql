const mysql = require("mysql2");

const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    port: 3306,
    password: "",
    database: "db_blog"
});

connection.connect((err) => {
    if (err) {
        console.log(err);
    }
    else {
        console.log("databse connected");
    }

});

module.exports = connection;
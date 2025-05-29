const connection = require("../data/db");

const index = ((req, res) => {
    const sql = "SELECT * FROM posts"

    connection.query(sql, (err, results) => {
        if (err) {
            return res.status(500).json({ error: "Database query failed" });
        }
        else {
            res.json(results);
        }

    })
});

const show = ((req, res) => {
    const id = req.params.id;
    const sql = `SELECT * FROM posts WHERE posts.id = ?`;

    connection.query(sql, [id], (err, results) => {
        if (err) {
            return res.status(500).json({ error: "Database query failed" });
        }
        else {
            res.json(results);
        }

    })
});

const destroy = ((req, res) => {
    const id = req.params.id;
    const sql = `DELETE FROM posts WHERE id = ?`;

    connection.query(sql, [id], (err, results) => {
        if (err) {
            return res.status(500).json({ error: "Database query failed" });
        }
        else {
            res.json(results);
        }

    })
});

module.exports = {
    index,
    show,
    destroy
};
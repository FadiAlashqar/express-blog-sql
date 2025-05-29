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
    res.send(`blog : ${req.params.id}`);
});

module.exports = {
    index,
    show
};
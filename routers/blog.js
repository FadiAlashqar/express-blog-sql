const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
    res.send("elenco dei miei blog");
});

router.get("/:id", (req, res) => {
    res.send(`blog : ${req.params.id}`);
});

module.exports = router;

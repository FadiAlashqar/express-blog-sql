const express = require("express");
const app = express();
const port = 3000;
const connection = require("./data/db");

app.use(express.json());

app.get("/", (req, res) => {
    console.log("Servere del mio blog");
    res.send("lista dei miei blog")
});

app.listen(port, () => {
    console.log(`in ascolto dalla porta ${port}`);
})
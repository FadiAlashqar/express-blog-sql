const index = ((req, res) => {
    res.send("elenco dei miei blog");
});

const show = ((req, res) => {
    res.send(`blog : ${req.params.id}`);
});

module.exports = {
    index,
    show
};
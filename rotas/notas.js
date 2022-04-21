const express = require("express");

const router = express.Router();


router.get("/", function (req, res) {
    res.send({ nome: "André" });
});

router.post("/:id", function (req, res) {
    console.log(req.body);

    res.send("Usuario POST NOTAS");
});

router.get("/:id?", function (req, res) {
    console.log(req.body);

    res.send("NOTAS GET " + req.params.id);
});

router.put("/", function (req, res) {
    console.log(req.body);

    res.send("Usuario PUT NOTAS");
});

router.delete("/", function (req, res) {
    console.log(req.body);

    res.send("DELETE as notas");
});


module.exports = router;
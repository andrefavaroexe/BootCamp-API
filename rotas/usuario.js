const express = require("express");

const router = express.Router();


router.get("/", function (req, res) {
    res.send({ nome: "André" });
});

router.post("/", function (req, res) {
    console.log(req.body);

    res.send("Usuario POST");
});

router.get("/", function (req, res) {
    console.log(req.body);

    res.send("Usuario GET");
});

router.put("/:id", function (req, res) {
    console.log(req.body);
    
    res.send("Usuario PUT");
});

router.delete("/", function (req, res) {
    console.log(req.body);

    res.send("Usuario POST");
});


module.exports = router;
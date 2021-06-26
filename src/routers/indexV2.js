const express = require("express");
const router = express.Router(); 

router.get("/", (req, res) => {
    console.log("Hello World");
    res.send("Hello TODO API versão 2.0");
})

module.exports = router;
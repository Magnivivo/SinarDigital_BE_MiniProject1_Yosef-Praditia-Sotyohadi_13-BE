const express = require("express");
const router = express.Router()


router.get("/", (req, res) => {
    res.send({ data: "Here is your data" });
});

router.post("/", (req, res) => {
    res.send({ data: "user Created" });
});

router.put("/", (req, res) => {
    res.send({ data: "user Updated" });
});

router.delete("/", (req, res) => {
    res.send({ data: "user deleted TT" });
});

module.exports = router;
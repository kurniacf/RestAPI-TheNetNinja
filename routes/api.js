const express = require('express');
const router = express.Router();

// GET
router.get("/profile", function(req, res){
    res.send({type: "GET"});
});

// POST
router.post("/profile", function(req, res){
    res.send({type: "POST"});
});

// PUT
router.put("/profile/:id", function(req, res){
    res.send({type: "PUT"});
});

// DELETE
router.delete("/profile/:id", function(req, res){
    res.send({type: "DELETE"});
});


module.exports = router;
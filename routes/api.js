const express = require('express');
const Profile = require('../models/profileSchema');
const router = express.Router();

// GET
router.get("/profile", function(req, res, next){
    res.send({type: "GET"});
});

// POST
router.post("/profile", function(req, res, next){
    Profile.create(req.body).then(function(profile){
        res.send(profile);
    }).catch(next) ;
    
});

// PUT
router.put("/profile/:id", function(req, res, next){
    Profile.findByIdAndUpdate({
        _id: req.params.id
    }, req.body).then(function(profile){
        Profile.findOne({
            _id: req.params.id
        }).then(function(profile){
            res.send(profile);
        });
    });
});

// DELETE
router.delete("/profile/:id", function(req, res, next){
    Profile.findByIdAndRemove({
        _id: req.params.id
    }).then(function(profile){
        res.send(profile);
    });
});


module.exports = router;
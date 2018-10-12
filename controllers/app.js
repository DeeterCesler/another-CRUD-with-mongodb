const express = require("express");
const router = express.Router();

// require model
const Person = require("../models/data");

router.get("/new", (req, res) => {
    res.render("new.ejs");
    // Person.create(req.params.body, (err, data)=>{
    //     if(err){
    //         console.log(err);
    //     } else {
    //         console.log(data);
    //         // redirect to default page
    //     }
    // })
})

router.get("/new", (req, res) => {
    res.render("new.ejs");
    // Person.create(req.params.body, (err, data)=>{
    //     if(err){
    //         console.log(err);
    //     } else {
    //         console.log(data);
    //         // redirect to default page
    //     }
    // })
})

router.post("/new", (req, res) => {
    Person.create(req.params.body, (err, data)=>{
        if(err){
            console.log(err);
        } else {
            console.log(data);
            // redirect to default page
            res.redirect("index.ejs");
        }
    })
})

module.exports = router;
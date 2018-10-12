const express = require("express");
const router = express.Router();

// require model
const Person = require("../models/data");

router.get("/", (req, res) => {
    Person.find({}, (err, persons)=>{
        if(err){
            console.log(err)
        } else {
            console.log(persons);
            res.render("index.ejs", {
                person: persons
            });
        }
    })
})

router.get("/new", (req, res) => {
    res.render("new.ejs");
})

router.post("/new", (req, res) => {
    Person.create(req.body, (err, data)=>{
        if(err){
            console.log(err);
        } else {
            console.log(data);
            // redirect to default page
            res.redirect("/");
        }
    })
});

router.delete("/:id/delete", (req, res) => {
    console.log(req.params.id, ' id in delete route');

    Person.findByIdAndDelete(req.params.id, (err, data)=> {
        if(err){
            console.log(err);
        } else {
            console.log(`object ${data.id} deleted`);
            res.redirect("/");
        }
    })
});

module.exports = router;
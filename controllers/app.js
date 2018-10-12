const express = require("express");
const router = express.Router();

// require model
const Person = require("../models/data");

router.post("/new", (req, res) => {
    Person.create(req.params.body, (err, data)=>{
        if(err){
            console.log(err);
        } else {
            console.log(data);
            // redirect to default page
        }
    })
})

module.exports = router;
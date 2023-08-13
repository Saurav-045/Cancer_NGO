const express = require('express');
const router = express.Router();
const Volunteer= require("../models/Volunteer");
const { body, validationResult } = require('express-validator');

 
router.post("/createvolunteer", 
body('email').isEmail(),
body('name').isLength({ min: 3}),
async(req,res)=>{
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    try{
        await Volunteer.create({
            name:req.body.name,
            phone:req.body.phone,
            email:req.body.email,
            person:req.body.person
        })
        res.json({success: true})
        alert("data submitted");
    } catch (error)
    {
        console.log(error);
        res.json({success: false});
    }
})

module.exports = router;
//Importing Packages
const express = require("express");
const Router = express.Router();

//Importing Files
const Signup = require('../../Schemas/Signup/signup');

Router.post("/signin", (req,res,next)=> {

    const {email,password} = req.body;

    Signup.findOne({email:email}).then(result=>{
        if(result.password === password)
        {
            return res.status(200).json({
                message:"Correct Password"
            });
        }
        else
        {
            res.status(400).json(result=>{
                message:"Wrong Password"
            })
        }
    }).catch(err=>{
        
        console.log(err);
    });
});

module.exports = Router;
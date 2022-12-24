//Importing Packages
const express = require("express");
const mongoose = require("mongoose");

//Importing Local Files
const Signup = require('./Routes/SignUp/signup.js');
const Signin = require('./Routes/SignIn/signin');

const app = express();

app.use(express.json());
app.use(Signup);
app.use(Signin);

mongoose.connect("mongodb+srv://Mahad:Mahad@cluster0.btoqm.mongodb.net/FoodPanda").then(result=>{
    app.listen(5000);
}).catch(err=>{
    console.log(err);
});
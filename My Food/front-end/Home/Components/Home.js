//Importing Packages
import React from "react";

//Importing Files
import HomePage from "../Pages/Home";


//Entry Point of this Page
const Home = (props) => {

    const signup = () => {
        
        //Going to Page Signup after button is clicked
        props.navigation.navigate('Signup');

    }

    //Returning Page
    return(

        //Calling HomePage and sending some data along it
        <HomePage signup={signup}/>
    )
}

export default Home;
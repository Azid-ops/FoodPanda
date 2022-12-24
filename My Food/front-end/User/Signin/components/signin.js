//Importing PAckages
import React, { useState } from 'react';

//Importing Files
import SigninPage from '../../../User/Signin/pages/signin';

const Signin = (props) => {

    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");

    const signedInData = async () => {
        try
        {
            const statusCatcher = await fetch("http://192.168.128.186:5000/signin", {
                method:"POST",
                headers:{
                    "Content-Type": "application/json",
                },
                body:JSON.stringify({
                    email,password
                })
            });

            if(statusCatcher.status === 200)
            {
                props.navigation.navigate("Dashboard");
            }
        }
        catch(err)
        {
            alert(err);
        } 
    }

    return(
        <SigninPage 
            setPassword={setPassword} 
            setEmail={setEmail}
            email={email} 
            password={password}
            signedInData={signedInData}
        />
    )
}

export default Signin;
//Importing Packages
import React from "react";
import { StyleSheet, ScrollView, View, Text, TouchableOpacity } from 'react-native';
import { TextInput } from "react-native-gesture-handler";

//Entry Point of this Page
const SignupPage = (props) => {

    //Returning Html
    return(
        <ScrollView>
            <View style={styles.container}>
                <Text style={styles.register}>
                    SIGNUP
                </Text>

                <Text>
                    Already have an account? <Text onPress={props.goto}>
                        Signin
                    </Text>
                </Text>

                <TextInput 
                    style={styles.enterField} 
                    placeholder="Enter Your Name"
                    onChangeText={props.setFirstName}
                />

                <TextInput 
                    style={styles.enterField} 
                    placeholder="Enter Your Email"
                    onChangeText={props.setEmail}
                />

                <TextInput 
                    style={styles.enterField} 
                    placeholder="Enter Your Password"
                    onChangeText={props.setPassword}

                />

                <TextInput 
                    style={styles.enterField} 
                    placeholder="Re-Enter your Password"
                    onChangeText={props.setRetype}
                />

                <TouchableOpacity 
                    style={styles.signupButton}
                    onPress={()=> props.submitForm}
                >
                    <Text 
                        style={styles.signupButtonText}
                        onPress={props.submitForm}
                    >
                        SignUp
                    </Text>
                </TouchableOpacity>

                {
                    props.userExist ? 
                    <Text 
                        style={styles.errorText}
                        onPress={props.submitForm}
                    >
                        {props.userExist}
                    </Text> : null
                }

            </View>
            
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:"center",
        paddingTop:70
    },
    register:{
        fontSize:25,
        color:"black",
        fontWeight:"bold"

    },
    enterField:{
        borderLeftWidth: 1,
        borderRightWidth: 1,
        borderTopWidth:1,
        borderBottomWidth:1,
        borderColor:"gray",
        width:"90%",
        height:"10%",
        marginTop:20,
        padding:10,
        color:"black",
        fontSize:15,
        borderRadius:10,
    },
    signupButton:{
        width:"90%",
        alignItems:"center",
        backgroundColor:"blue",
        marginTop:50,
        paddingTop:10,
        paddingBottom:10,
        borderRadius:10
    },
    signupButtonText:{
        color:"white",
        fontSize:25
    },
    errorText:{
        color:"red",
        fontSize:18,
        marginTop:20
    }
})
//Exporting File
export default SignupPage;
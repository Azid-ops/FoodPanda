//Importing Packages
import React from "react";
import { StyleSheet, Text,View,ImageBackground, Button, TouchableOpacity } from 'react-native';

//Entry Point of this page
const HomePage = (props) => {
    
    //Returning Html
    return(
        <View style={styles.container}>
            <ImageBackground 
            source={require("../../assets/main.png")}
            style={styles.image}
            >
                <TouchableOpacity
                    style={styles.button}
                    onPress={props.signup}
                >
                    <Text style={styles.buttonText}>
                    Continue
                    </Text>
                </TouchableOpacity>
            </ImageBackground>
        </View>
    )
}

//Styling for this page
const styles = StyleSheet.create({
    container: {
      flex: 1
    },
    image:{
      height:"100%",
      flex:1,
      alignItems:"center",
      backgroundColor:(255,255,255,0.5)
    },
    button:{
      marginTop:600,
      backgroundColor:"#FF4500",
      borderRadius:10,
      padding:10
    },
    buttonText:{
      fontSize:30,
      color:"white",
    }
});

export default HomePage;
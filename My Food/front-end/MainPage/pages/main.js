// import React in our code
import React from 'react';

// import all the components we are going to use
import { SafeAreaView, Text, View, StyleSheet, Image, Dimensions, TouchableOpacity } from 'react-native';
import Watch from './download__2_-removebg-preview.png';
const MainPage = (props) => {
  
  return (
    <View style={styles.style_Home}>
      <View style={styles.style_Order_online_collect_in_store}>
        <Text style={styles.style_Order_online_collect_in_store}>
          Order online Collect in store
        </Text>
      </View>

      <View style={styles.style_Wearable}>
        <Text style={styles.style_Wearable}>
          Electronics
        </Text>
      </View>

      <View style={styles.style_Laptops}>
        <Text style={styles.style_Laptops}>
          Pharmacy
        </Text>
      </View>

      <View style={styles.style_Phones}>
        <Text style={styles.style_Phones}>
          Groceries
        </Text>
      </View>

      <View style={styles.style_Drones}>
        <Text style={styles.style_Drones}>
          Food
        </Text>
      </View>

      <View>
        <TouchableOpacity onPress={props.explain}>
          <View style={styles.style_Group_4} >
            <View style={styles.style_Rectangle_9}></View>
            <View style={styles.style_Mask_Group}>
              <View style={styles.style_Ellipse_2}></View>
              <Image style={styles.style_image} source={Watch} />
            </View>

            <View style={styles.style_Apple_Watch}>
              <Text style={styles.style_Apple_Watch}>
                Apple Watch
              </Text>
            </View>

            <View style={styles.style_Series_6__Red}>
              <Text style={styles.style_Series_6__Red}>
                Series 6. Red
              </Text>
            </View>

            <View style={styles.style__359}>
              <Text style={styles.style__359}>
                $ 359
              </Text>
            </View>
          </View>
        </TouchableOpacity>
      </View>
      
      

      <View style={styles.style_Group_5}>
        <View style={styles.style_Rectangle_8}></View>
        <View style={styles.style_Mask_Group_2}>
          <View style={styles.style_Ellipse_2_2}></View>
          <Image style={styles.style_image_14} source={Watch} />
        </View>

        <View style={styles.style_SAMSUNG_GALAXY_WATCH}>
            <Text style={styles.style_SAMSUNG_GALAXY_WATCH}>
              SAMSUNG GALAXY WATCH
            </Text>
        </View>

        <View style={styles.style_Active__Green}>
            <Text style={styles.style_Active__Green}>
              Active. Green
            </Text>
        </View>

        <View style={styles.style_159}>
            <Text style={styles.style_159}>
              $ 159
            </Text>
        </View>
      </View>
    </View>

    
  );
};


const styles = StyleSheet.create({
  style_Home:{
    position:'relative',
    // width:Dimensions.get(window).width,
    height:896,
    borderRadius:20,
    overflow:"hidden",
    transform:[
      {translateX:0},
      {translateY: 0},
      {rotate:"0deg"},
    ],
    backgroundColor:"rgba(242,242,242,1)",
    left:0,
    top:0
  },

  style_Order_online_collect_in_store:{
    position:"absolute",
    width:"auto",
    height:"auto",
    left:50,
    right:"auto",
    top:22,
    bottom:"auto",
    transform:[
      {translateX:0},
      {translateY:0},
      {rotate:"0deg"}
    ],
    textDecorationLine:"none",
    fontSize:34,
    color:"rgba(0,0,0,1)",
    textAlign:"left",
    textAlignVertical:"top",
    letterSpacing:0.1
  },
  style_Wearable:{
    position:'absolute',
    width:"auto",
    height:"auto",
    left:40,
    right:"auto",
    top:40,
    marginTop:30,
    bottom:"auto",
    transform:[
      {translateX:0},
      {translateY:0},
      {rotate:"0deg"}
    ],
    textDecorationLine:"none",
    fontSize:17,
    color:"rgba(89,86,233,1)",
    textAlign:"left",
    textAlignVertical:"top",
    letterSpacing:0.1
  },

  style_Laptops:{
    position:'absolute',
    width:"auto",
    height:"auto",
    left:100,
    right:"auto",
    top:70,
    bottom:"auto",
    transform:[
      {translateX:0},
      {translateY:0},
      {rotate:"0deg"}
    ],
    textDecorationLine:"none",
    fontSize:17,
    color:"rgba(153,153,157,1)",
    textAlign:"left",
    textAlignVertical:"top",
    letterSpacing:0.1
  },

  style_Phones:{
    position:'absolute',
    width:"auto",
    height:"auto",
    left:160,
    right:"auto",
    top:72,
    bottom:"auto",
    transform:[
      {translateX:0},
      {translateY:0},
      {rotate:"0deg"}
    ],
    textDecorationLine:"none",
    fontSize:17,
    color:"rgba(153,153,157,1)",
    textAlign:"left",
    textAlignVertical:"top",
    letterSpacing:0.1
  },

  style_Drones:{
    position:'absolute',
    width:"auto",
    height:"auto",
    left:215,
    right:"auto",
    top:72,
    bottom:"auto",
    transform:[
      {translateX:0},
      {translateY:0},
      {rotate:"0deg"}
    ],
    textDecorationLine:"none",
    fontSize:17,
    color:"rgba(153,153,157,1)",
    textAlign:"left",
    textAlignVertical:"top",
    letterSpacing:0.1
  },
  
  style_Group_4:{
    position:"absolute",
    width:320,
    top:-250,
    height:317,
    marginTop:200,
    transform:[
      {translateX:50},
      {translateY:398},
      {rotate:"0deg"}
    ],
    backgroundColor:"rgba(0,0,0,0)"
  },

  style_Rectangle_9:{
    position:"absolute",
    width:220,
    height:220,
    borderRadius:20,
    opacity:1,
    left:0,
    right:"auto",
    transform:[
      {translateX:0},
      {translateY:0},
      {rotate:"0deg"}
    ],
    shadowColor:"rgba(57,57,57)",
    shadowOffset:{
      width:0,
      height:30
    },
    shadowOpacity:0.10000000149011612,
    shadowRadius:60,
    backgroundColor:"rgba(255,255,255,1)"
  },

  style_Mask_Group:
  {
    position:'absolute',
    width:157,
    height:157,
    transform:[
      {translateX:34},
      {translateY:0},
      {rotate:"0deg"}
    ],
    backgroundColor:"rgba(0,0,0,0)",
    shadowColor:"rgba(0,0,0)",
    shadowOffset:{
      width:0,
      height:40,
    },
    shadowOpacity:0.1,
    shadowRadius:40
  },

  style_image:{
    position:'absolute',
    width:190,
    height:189,
    paddingTop:10,
    opacity:1,
    left:-15,
    right:"auto",
    top:-93,
    bottom:"auto",
    transform:[
      {translateX:0},
      {translateY:0},
      {rotate:"0deg"}
    ],
    backgroundColor:"rgba(0,0,0,0)",
  },

  style_Apple_Watch:{
    position:'absolute',
    width:138,
    left:25,
    right:"auto",
    top:35,
    bottom:"auto",
    transform:[
      {translateX:0},
      {translateY:0},
      {rotate:"0deg"}
    ],
    // fontWeight:"400",
    textDecorationLine:"none",
    lineHeight:100,
    fontSize:20,
    color:"rgba(0,0,0,1)",
    textAlign:"center",
    textAlignVertical:"top",
    letterSpacing:0.1
  },

  style_Series_6__Red:{
    position:'absolute',
    width:138,
    height:52,
    left:25,
    right:"auto",
    top:70,
    bottom:"auto",
    transform:[
      {translateX:0},
      {translateY:0},
      {rotate:"0deg"}
    ],
    // fontWeight:"400",
    textDecorationLine:"none",
    fontSize:16,
    color:"rgba(133,133,133,1)",
    textAlign:"center",
    textAlignVertical:"top",
    letterSpacing:0.1
  },

  style__359:{
    position:'absolute',
    width:172,
    height:19,
    left:18,
    right:"auto",
    top:85,
    bottom:"auto",
    transform:[
      {translateX:0},
      {translateY:0},
      {rotate:"0deg"}
    ],
    // fontWeight:"400",
    textDecorationLine:"none",
    fontSize:17,
    color:"rgba(89,86,233,1)",
    textAlign:"center",
    textAlignVertical:"top",
    letterSpacing:0.1
  },

  style_Group_5:{
    position:'absolute',
    top:300,
    left:300,
    width:282,
    height:321,
    transform:[
      {translateX:0},
      {translateY:0},
      {rotate:"0deg"}
    ],
    backgroundColor:"rgba(0,0,0,0)"
  },

  style_Rectangle_8:{
    position:"absolute",
    width:220,
    height:220,
    borderRadius:20,
    opacity:1,
    left:0,
    top:51,
    bottom:"auto",
    right:"auto",
    transform:[
      {translateX:0},
      {translateY:0},
      {rotate:"0deg"}
    ],
    shadowColor:"rgba(57,57,57)",
    shadowOffset:{
      width:0,
      height:20
    },
    shadowOpacity:0.10000000149011612,
    shadowRadius:60,
    backgroundColor:"rgba(255,255,255,1)"
  },
  style_Mask_Group_2:
  {
    position:'absolute',
    width:157,
    height:157,
    transform:[
      {translateX:34},
      {translateY:0},
      {rotate:"0deg"}
    ],
    backgroundColor:"rgba(0,0,0,0)",
    shadowColor:"rgba(0,0,0)",
    shadowOffset:{
      width:0,
      height:40,
    },
    shadowOpacity:0.1,
    shadowRadius:40
  },

  style_image_14:{
    position:'absolute',
    width:190,
    height:189,
    paddingTop:10,
    opacity:1,
    left:-15,
    right:"auto",
    top:-36,
    bottom:"auto",
    transform:[
      {translateX:0},
      {translateY:0},
      {rotate:"0deg"}
    ],
    backgroundColor:"rgba(0,0,0,0)",
  },

  style_SAMSUNG_GALAXY_WATCH:{
    position:'absolute',
    width:"auto",
    left:8,
    right:"auto",
    top:60,
    bottom:"auto",
    transform:[
      {translateX:0},
      {translateY:0},
      {rotate:"0deg"}
    ],
    // fontWeight:"400",
    textDecorationLine:"none",
    lineHeight:100,
    fontSize:15,
    color:"rgba(0,0,0,1)",
    textAlign:"center",
    textAlignVertical:"top",
    letterSpacing:0.1
  },

  style_Active__Green:{
    position:'absolute',
    width:138,
    height:52,
    left:25,
    right:"auto",
    top:95,
    bottom:"auto",
    transform:[
      {translateX:0},
      {translateY:0},
      {rotate:"0deg"}
    ],
    // fontWeight:"400",
    textDecorationLine:"none",
    fontSize:16,
    color:"rgba(133,133,133,1)",
    textAlign:"center",
    textAlignVertical:"top",
    letterSpacing:0.1
  },
  style_159:{
    position:'absolute',
    width:172,
    height:19,
    left:18,
    right:"auto",
    top:110,
    bottom:"auto",
    transform:[
      {translateX:0},
      {translateY:0},
      {rotate:"0deg"}
    ],
    // fontWeight:"400",
    textDecorationLine:"none",
    fontSize:17,
    color:"rgba(89,86,233,1)",
    textAlign:"center",
    textAlignVertical:"top",
    letterSpacing:0.1
  }
});

export default MainPage;
import * as React from "react";
import { StyleSheet, View, Image, Text } from "react-native";
import Watch from './download__2_-removebg-preview.png';

const Basket = (props) => {

  const checkOut = () => {
    props.navigation.navigate("Checkout");
  }
  return (
    <View style={styles.basket1}>
      <View style={styles.item}>
        <View style={styles.rectangleView} />
        <Image
          style={styles.bicreditCard2FrontFillIcon}
          resizeMode="cover"
          source={Watch}
        />
        <Text style={styles.appleIPadAir109}>2020 Apple iPad Air 10.9"</Text>
        <Text style={styles.text}>$579.00</Text>
        <Text style={styles.quantity}>Quantity</Text>
        <Image
          style={styles.image15Icon}
          resizeMode="cover"
          source={Watch}
        />
        <View style={styles.number}>
          <View style={styles.rectangleView1} />
          <View style={styles.rectangleView2} />
          <Text style={styles.text1}>1</Text>
          <Text style={styles.text2}>-</Text>
          <Text style={styles.text3}>+</Text>
        </View>
      </View>
      <View style={styles.item1}>
        <View style={styles.rectangleView3} />
        <Image
          style={styles.image19Icon}
          resizeMode="cover"
          source={Watch}
        />
        <Image
          style={styles.bicreditCard2FrontFillIcon1}
          resizeMode="cover"
          source={Watch}
        />
        <Text style={styles.aPPLEAirPodsProWhite}>
          APPLE AirPods Pro - White
        </Text>
        <Text style={styles.text4}>$375.00</Text>
        <Text style={styles.quantity1}>Quantity</Text>
        <View style={styles.number1}>
          <View style={styles.rectangleView4} />
          <View style={styles.rectangleView5} />
          <Text style={styles.text5}>1</Text>
          <Text style={styles.text6}>-</Text>
          <Text style={styles.text7}>+</Text>
        </View>
      </View>
      <View style={styles.buttonLarge}>
        <View style={styles.rectangleView6} />
        <Text  onPress={checkOut} style={styles.button}>Checkout</Text>
      </View>
      <View style={styles.info}>
        <View style={styles.rectangleView7} />
        <Text style={styles.deliveryForFREEUntilTheEn}>
          Delivery for FREE until the end of the month
        </Text>
        <Image
          style={styles.iconlyLightNotification}
          resizeMode="cover"
          source={Watch}
        />
      </View>
      <Text style={styles.basket}>Basket</Text>
      <Text style={styles.total}>Total</Text>
      <Text style={styles.text8}>$ 954</Text>
      {/* <Image
        style={styles.iconlyLightArrowLeft}
        resizeMode="cover"
        source={Watch}
      /> */}
      {/* <Image
        style={styles.iconlyLightDelete}
        resizeMode="cover"
        source={Watch}
      /> */}
    </View>
  );
};

const styles = StyleSheet.create({
  rectangleView: {
    position: "absolute",
    top: 0,
    left: 0,
    borderRadius: 10,
    backgroundColor: "#fff",
    shadowColor: "rgba(0, 0, 0, 0.03)",
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowRadius: 40,
    elevation: 40,
    shadowOpacity: 1,
    width: 314,
    height: 130,
  },
  bicreditCard2FrontFillIcon: {
    position: "absolute",
    top: 43,
    left: 64,
    width: 16,
    height: 16,
    overflow: "hidden",
  },
  appleIPadAir109: {
    position: "absolute",
    top: 24,
    left: 104,
    fontSize: 16,
    fontWeight: "600",
    color: "#000",
    textAlign: "left",
    width: 193,
  },
  text: {
    position: "absolute",
    top: 55,
    left: 104,
    fontSize: 15,
    fontWeight: "600",
    color: "#5956e9",
    textAlign: "center",
  },
  quantity: {
    position: "absolute",
    top: 85,
    left: 103,
    fontSize: 13,
    letterSpacing: 0.5,
    color: "#000",
    textAlign: "left",
  },
  image15Icon: {
    position: "absolute",
    top: 14,
    left: 15,
    width: 80,
    height: 105,
  },
  rectangleView1: {
    position: "absolute",
    height: "100%",
    width: "33.33%",
    top: "0%",
    right: "66.67%",
    bottom: "0%",
    left: "0%",
    borderRadius: 4,
    backgroundColor: "#7dccec",
  },
  rectangleView2: {
    position: "absolute",
    height: "100%",
    width: "33.33%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "66.67%",
    borderRadius: 4,
    backgroundColor: "#7dccec",
  },
  text1: {
    position: "absolute",
    top: "10%",
    left: "43.33%",
    fontSize: 13,
    fontWeight: "600",
    
    color: "#000",
    textAlign: "center",
  },
  text2: {
    position: "absolute",
    top: "5%",
    left: "10%",
    fontSize: 15,
    fontWeight: "600",
    
    color: "#f4f4f7",
    textAlign: "center",
  },
  text3: {
    position: "absolute",
    height: "60%",
    width: "8.33%",
    top: "15%",
    left: "78.33%",
    fontSize: 10,
    fontWeight: "600",
    
    color: "#f4f4f7",
    textAlign: "center",
  },
  number: {
    position: "absolute",
    top: 84,
    left: 170,
    width: 60,
    height: 20,
  },
  item: {
    position: "absolute",
    top: 178,
    left: 130,
    width: 314,
    height: 130,
  },
  rectangleView3: {
    position: "absolute",
    top: 0,
    left: 0,
    borderRadius: 10,
    backgroundColor: "#fff",
    shadowColor: "rgba(0, 0, 0, 0.03)",
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowRadius: 40,
    elevation: 40,
    shadowOpacity: 1,
    width: 314,
    height: 140,
  },
  image19Icon: {
    position: "absolute",
    top: 15,
    left: 4,
    width: 90,
    height: 79,
  },
  bicreditCard2FrontFillIcon1: {
    position: "absolute",
    top: 43,
    left: 64,
    width: 16,
    height: 16,
    overflow: "hidden",
  },
  aPPLEAirPodsProWhite: {
    position: "absolute",
    top: 24,
    left: 104,
    fontSize: 16,
    fontWeight: "600",
    color: "#000",
    textAlign: "left",
    width: 193,
  },
  text4: {
    position: "absolute",
    top: 69,
    left: 104,
    fontSize: 15,
    fontWeight: "600",
    color: "#5956e9",
    textAlign: "center",
  },
  quantity1: {
    position: "absolute",
    top: 99,
    left: 103,
    fontSize: 13,
    letterSpacing: 0.5,
    color: "#000",
    textAlign: "left",
  },
  rectangleView4: {
    position: "absolute",
    height: "100%",
    width: "33.33%",
    top: "0%",
    right: "66.67%",
    bottom: "0%",
    left: "0%",
    borderRadius: 4,
    backgroundColor: "#7dccec",
  },
  rectangleView5: {
    position: "absolute",
    height: "100%",
    width: "33.33%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "66.67%",
    borderRadius: 4,
    backgroundColor: "#7dccec",
  },
  text5: {
    position: "absolute",
    top: "10%",
    left: "43.33%",
    fontSize: 13,
    fontWeight: "600",
    
    color: "#000",
    textAlign: "center",
  },
  text6: {
    position: "absolute",
    top: "5%",
    left: "10%",
    fontSize: 15,
    fontWeight: "600",
    
    color: "#f4f4f7",
    textAlign: "center",
  },
  text7: {
    position: "absolute",
    height: "60%",
    width: "8.33%",
    top: "15%",
    left: "78.33%",
    fontSize: 10,
    fontWeight: "600",
    
    color: "#f4f4f7",
    textAlign: "center",
  },
  number1: {
    position: "absolute",
    top: 98,
    left: 170,
    width: 60,
    height: 20,
  },
  item1: {
    position: "absolute",
    top: 324,
    left: 130,
    width: 314,
    height: 140,
  },
  rectangleView6: {
    position: "absolute",
    height: "100%",
    width: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    borderRadius: 10,
    backgroundColor: "#5956e9",
    shadowColor: "rgba(0, 0, 0, 0.1)",
    shadowOffset: {
      width: 0,
      height: 20,
    },
    shadowRadius: 40,
    elevation: 40,
    shadowOpacity: 1,
  },
  button: {
    position: "absolute",
    width: "92.36%",
    top: "35.71%",
    left: "3.82%",
    fontSize: 20,
    fontWeight: "700",
    color: "#f6f6f9",
    textAlign: "center",
  },
  buttonLarge: {
    position: "absolute",
    top: 785,
    left: 140,
    width: 314,
    height: 70,
  },
  rectangleView7: {
    position: "absolute",
    top: 0,
    left: 0,
    borderRadius: 10,
    backgroundColor: "#d3f2ff",
    width: 256,
    height: 39,
  },
  deliveryForFREEUntilTheEn: {
    position: "absolute",
    top: 13,
    left: 38,
    fontSize: 10,
    fontWeight: "600",
    color: "#000",
    textAlign: "left",
  },
  iconlyLightNotification: {
    position: "absolute",
    height: "61.54%",
    width: "9.38%",
    top: "20.51%",
    right: "86.33%",
    bottom: "17.95%",
    left: "4.3%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  info: {
    position: "absolute",
    top: 127,
    left: 170,
    width: 256,
    height: 39,
  },
  basket: {
    position: "absolute",
    top: 56,
    left: 250,
    fontSize: 30,
    fontWeight: "700",
    color: "#000",
    textAlign: "left",
  },
  total: {
    position: "absolute",
    top: 714,
    left: 150,
    fontSize: 17,
    color: "#000",
    textAlign: "left",
  },
  text8: {
    position: "absolute",
    top: 708,
    left: 380,
    fontSize: 22,
    fontWeight: "700",
    color: "#5956e9",
    textAlign: "right",
  },
  iconlyLightArrowLeft: {
    position: "absolute",
    height: "2.68%",
    width: "5.8%",
    top: "6.25%",
    right: "87.2%",
    bottom: "91.07%",
    left: "7%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  iconlyLightDelete: {
    position: "absolute",
    height: "2.68%",
    width: "5.8%",
    top: "6.14%",
    right: "7%",
    bottom: "91.18%",
    left: "87.2%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  basket1: {
    position: "relative",
    borderRadius: 20,
    backgroundColor: "#f5f5f8",
    flex: 1,
    width: "100%",
    height: 896,
    overflow: "hidden",
  },
});

export default Basket;

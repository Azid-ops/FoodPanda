import * as React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import Watch from './download__2_-removebg-preview.png';

const Details = (props) => {

    const viewBasket = () => {
      props.navigation.navigate('Basket');
    }

  return (
    <View style={styles.singleItem}>
      {/* <Image
        style={styles.rectangleIcon}
        resizeMode="cover"
        source={Watch}
      /> */}
      <Text style={styles.appleIPadAir109}>2020 Apple iPad Air 10.9"</Text>
      <View style={styles.description}>
        <Text style={styles.getAppleTVFreeForAYear}>
          Get Apple TV+ free for a year
        </Text>
        <Text style={styles.fullDescription}>Full description</Text>
        <Image
          style={styles.vectorIcon}
          resizeMode="cover"
          source={Watch}
        />
        <Text style={styles.availableWhenYouPurchaseAn}>
          Available when you purchase any new iPhone, iPad, iPod Touch, Mac or
          Apple TV, £4.99/month after free trial.
        </Text>
      </View>
      {/* <Image
        style={styles.groupIcon}
        resizeMode="cover"
        source={Watch}
      /> */}
      <View style={styles.buttonLarge}>
        <View style={styles.rectangleView1} />
        <Text onPress={viewBasket} style={styles.button}>Add to basket</Text>
      </View>
      <Text style={styles.total}>Total</Text>
      <Text style={styles.text}>$ 579</Text>
      <Image
        style={styles.maskGroupIcon}
        resizeMode="cover"
        source={Watch}
      />
      {/* <Image
        style={styles.image16Icon}
        resizeMode="cover"
        source={Watch}
      /> */}
      {/* <Image
        style={styles.ellipseIcon}
        resizeMode="cover"
        source={Watch}
      />
      <Image
        style={styles.iconlyLightHeart}
        resizeMode="cover"
        source={Watch}
      />
      <Image
        style={styles.iconlyLightArrowLeft}
        resizeMode="cover"
        source={Watch}
      /> */}
      <View style={styles.colors1}>
        <Text style={styles.colors}>Colors</Text>
        <View style={styles.buttonSmallWitem}>
          <View style={styles.rectangleView2} />
          <Image
            style={styles.ellipseIcon1}
            resizeMode="cover"
            source={Watch}
          />
          <Text style={styles.skyBlue}>Rose Gold</Text>
        </View>
        <View style={styles.buttonSmallWitem1}>
          <View style={styles.rectangleView3} />
          <Image
            style={styles.ellipseIcon2}
            resizeMode="cover"
            source={Watch}
          />
          <Text style={styles.skyBlue1}>Green</Text>
        </View>
        <View style={styles.buttonSmallWitem2}>
          <View style={styles.rectangleView4} />
          <Image
            style={styles.ellipseIcon3}
            resizeMode="cover"
            source={Watch}
          />
          <Text style={styles.skyBlue2}>Sky Blue</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  rectangleIcon: {
    position: "absolute",
    top: 367,
    left: 0,
    width: 414,
    height: 647,
  },
  appleIPadAir109: {
    position: "absolute",
    top: 422,
    left: 130,
    fontSize: 28,
    fontWeight: "600",
    color: "#000",
    textAlign: "left",
    width: 351,
    height: 52,
  },
  getAppleTVFreeForAYear: {
    position: "absolute",
    top: 0,
    left: 90,
    fontSize: 17,
    color: "#000",
    textAlign: "left",
  },
  fullDescription: {
    position: "absolute",
    top: 100,
    left: 90,
    fontSize: 15,
    color: "#5956e9",
    textAlign: "left",
  },
  vectorIcon: {
    position: "absolute",
    height: "13.56%",
    width: "5.1%",
    top: "85.9%",
    right: "57.01%",
    bottom: "0.85%",
    left: "63%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  availableWhenYouPurchaseAn: {
    position: "absolute",
    top: 27,
    left: 90,
    fontSize: 15,
    letterSpacing: 0.3,
    lineHeight: 21,
    color: "#000",
    textAlign: "left",
    width: 314,
    height: 77,
    opacity: 0.5,
  },
  description: {
    position: "absolute",
    top: 583,
    left: 45,
    width: 314,
    height: 118,
  },
  groupIcon: {
    position: "absolute",
    top: 359,
    left: 168,
    width: 72,
    height: 16,
  },
  rectangleView: {
    position: "absolute",
    top: 0,
    left: 0,
    borderRadius: 30,
    backgroundColor: "#fa4a0c",
    width: 314,
    height: 70,
  },
  addToCart: {
    position: "absolute",
    top: 25,
    left: 110,
    fontSize: 17,
    fontWeight: "600",
    fontFamily: "SF Pro Text",
    color: "#f6f6f9",
    textAlign: "left",
  },
  groupView: {
    position: "absolute",
    top: 785,
    left: 80,
    width: 314,
    height: 70,
    display: "none",
  },
  rectangleView1: {
    position: "absolute",
    height: "100%",
    width: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "28%",
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
    left: "30%",
    fontWeight:"bold",
    fontSize: 20,
    color: "#f6f6f9",
    textAlign: "center",
  },
  buttonLarge: {
    position: "absolute",
    top: 786,
    left: 50,
    width: 314,
    height: 70,
  },
  total: {
    position: "absolute",
    top: 734,
    left: 135,
    fontSize: 17,
    color: "#000",
    textAlign: "left",
  },
  text: {
    position: "absolute",
    top: 728,
    left: 350,
    fontSize: 22,
    color: "#5956e9",
    textAlign: "right",
  },
  maskGroupIcon: {
    position: "absolute",
    top: 92,
    left: 180,
    width: 230,
    height: 264,
  },
  image16Icon: {
    position: "absolute",
    top: 121,
    left: 322,
    width: 157,
    height: 208,
  },
  ellipseIcon: {
    position: "absolute",
    top: 46,
    left: 327,
    width: 50,
    height: 50,
    display: "none",
  },
  iconlyLightHeart: {
    position: "absolute",
    height: "2.68%",
    width: "5.8%",
    top: "6.7%",
    right: "12.08%",
    bottom: "90.63%",
    left: "82.13%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  iconlyLightArrowLeft: {
    position: "absolute",
    height: "2.68%",
    width: "5.8%",
    top: "6.7%",
    right: "87.2%",
    bottom: "90.63%",
    left: "7%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  colors: {
    position: "absolute",
    top: 0,
    left: 1,
    fontSize: 17,
    color: "#000",
    textAlign: "left",
  },
  rectangleView2: {
    position: "absolute",
    height: "100%",
    width: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    borderRadius: 10,
    backgroundColor: "#fff",
    shadowColor: "rgba(0, 0, 0, 0.06)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 14,
    elevation: 14,
    shadowOpacity: 1,
    borderStyle: "solid",
    borderColor: "#868686",
    borderWidth: 1,
  },
  ellipseIcon1: {
    position: "absolute",
    height: "40%",
    top: "30%",
    bottom: "30%",
    left: 13,
    maxHeight: "100%",
    width: 16,
  },
  skyBlue: {
    position: "absolute",
    top: "32.5%",
    left: 37,
    fontSize: 12,
    color: "#000",
    textAlign: "left",
  },
  buttonSmallWitem: {
    position: "absolute",
    top: 30,
    left: 113,
    width: 113,
    height: 40,
  },
  rectangleView3: {
    position: "absolute",
    height: "100%",
    width: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    borderRadius: 10,
    backgroundColor: "#fff",
    shadowColor: "rgba(0, 0, 0, 0.06)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 14,
    elevation: 14,
    shadowOpacity: 1,
    borderStyle: "solid",
    borderColor: "#e3e3e3",
    borderWidth: 1,
  },
  ellipseIcon2: {
    position: "absolute",
    height: "40%",
    top: "30%",
    bottom: "30%",
    left: 13,
    maxHeight: "100%",
    width: 16,
  },
  skyBlue1: {
    position: "absolute",
    top: "32.5%",
    left: 37,
    fontSize: 12,
    color: "#000",
    textAlign: "left",
  },
  buttonSmallWitem1: {
    position: "absolute",
    top: 30,
    left: 232,
    width: 104,
    height: 40,
  },
  rectangleView4: {
    position: "absolute",
    height: "100%",
    width: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    borderRadius: 10,
    backgroundColor: "#fff",
    shadowColor: "rgba(0, 0, 0, 0.06)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 14,
    elevation: 14,
    shadowOpacity: 1,
    borderStyle: "solid",
    borderColor: "#e3e3e3",
    borderWidth: 1,
  },
  ellipseIcon3: {
    position: "absolute",
    height: "40%",
    top: "30%",
    bottom: "30%",
    left: 13,
    maxHeight: "100%",
    width: 16,
  },
  skyBlue2: {
    position: "absolute",
    top: "32.5%",
    left: 37,
    fontSize: 12,
    color: "#000",
    textAlign: "left",
  },
  buttonSmallWitem2: {
    position: "absolute",
    top: 30,
    left: 0,
    width: 104,
    height: 40,
  },
  colors1: {
    position: "absolute",
    top: 474,
    left: 130,
    width: 336,
    height: 70,
  },
  singleItem: {
    position: "relative",
    borderRadius: 20,
    backgroundColor: "#f6f6f9",
    flex: 1,
    width: "100%",
    height: 896,
    overflow: "hidden"
  },
});

export default Details;

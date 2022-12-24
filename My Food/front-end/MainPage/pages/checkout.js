import * as React from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import Visa from './visa.png';
import Master from './master.png';
import Bank from './bank.png';

const Checkout = () => {
  return (
    <View style={styles.checkout}>
      <View style={styles.buttonLarge}>
        <View style={styles.buttonLargeChild} />
        <Text style={[styles.button, styles.textTypo1, styles.textTypo2]}>
          Confirm and pay
        </Text>
      </View>
      <Text
        style={[
          styles.checkout1,
          styles.totalFlexBox,
          styles.textTypo1,
          styles.textTypo2,
        ]}
      >
        Checkout
      </Text>
      <Text style={[styles.total, styles.totalFlexBox, styles.textTypo1]}>
        Total
      </Text>
      <Text
        style={[
          styles.text,
          styles.textFlexBox,
          styles.textTypo1,
          styles.textTypo3,
        ]}
      >
        $ 954
      </Text>
      <Image
        style={styles.iconlylightarrowLeft}
        resizeMode="cover"
        source={{
            uri:"https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.iconbolt.com%2Ficonsets%2Ficonly-two-tone%2Farrow-left&psig=AOvVaw1dN_uHfMYl1hOUJUFs10Qx&ust=1671948522155000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCNCf_uDLkfwCFQAAAAAdAAAAABAE"
        }}
      />
      <View style={[styles.shipping, styles.shippingPosition]}>
        <Text
          style={[
            styles.shippingInformation,
            styles.changeTypo,
            styles.totalFlexBox,
          ]}
        >
          Shipping information
        </Text>
        <Text style={[styles.change, styles.changeTypo, styles.textFlexBox]}>
          change
        </Text>
        <View style={[styles.shippingChild, styles.shippingShadowBox]} />
        <Image
          style={[styles.iconlylightprofile, styles.iconlylightprofileLayout]}
          resizeMode="cover"
          source={{
            uri:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTePhJY8_UYl_vhxZ4Mo88ljt1YCID-V1Kht8hw4Zw&s"
            }}
        />
        <Text style={[styles.rosinaDoe, styles.text1Position]}>Rosina Doe</Text>
        <Text style={[styles.oxfordRoadM134grManchester, styles.text1Position]}>
          43 Oxford Road M13 4GR Manchester, UK
        </Text>
        <Image
          style={[styles.iconlylightlocation, styles.iconlylightprofileLayout]}
          resizeMode="cover"
          source={{
            uri:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSH0Kk1Xe0yBaMlFQqDZSFrmGnit3X2hGWAEJ8AwUeVNA&s"
            }}
        />
        <Text style={[styles.text1, styles.text1Position]}>
          +234 9011039271
        </Text>
        <Image
          style={styles.iconlylightcall}
          resizeMode="cover"
          source={{
            uri:"https://png.pngtree.com/png-vector/20201028/ourmid/pngtree-phone-icon-in-solid-circle-png-image_2380227.jpg"
            }}
        />
      </View>
      <View style={[styles.shipping1, styles.shippingPosition]}>
        <Text
          style={[
            styles.shippingInformation,
            styles.changeTypo,
            styles.totalFlexBox,
          ]}
        >
          Payment Method
        </Text>
        <View style={[styles.shippingItem, styles.shippingShadowBox]} />
        <View style={styles.payment}>
          <View style={[styles.parent, styles.groupLayout1]}>
            <Text style={[styles.text2, styles.textTypo]}>
              **** **** **** 1231
            </Text>
            <View style={[styles.groupChild, styles.groupChildLayout]} />
            <Image
              style={[styles.groupItem, styles.groupLayout]}
              resizeMode="cover"
              source={Visa}
            />
            <Image
              style={styles.groupInner}
              resizeMode="cover"
              source={{
                uri:"https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.iconbolt.com%2Ficonsets%2Ficonly-two-tone%2Farrow-left&psig=AOvVaw1dN_uHfMYl1hOUJUFs10Qx&ust=1671948522155000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCNCf_uDLkfwCFQAAAAAdAAAAABAE"
                }}
            />
          </View>
          <View style={[styles.group, styles.groupLayout1]}>
            <Text style={[styles.text2, styles.textTypo]}>
              **** **** **** 1234
            </Text>
            <View style={[styles.rectangleView, styles.groupChildLayout]} />
            <Image
              style={[styles.groupItem, styles.groupLayout]}
              resizeMode="cover"
              source={Master}
            />
          </View>
          <View style={[styles.container, styles.containerLayout]}>
            <Text style={[styles.text4, styles.textTypo]}>
              **** **** **** 1234
            </Text>
            <Image
              style={[styles.groupChild1, styles.groupLayout]}
              resizeMode="cover"
              source={Bank}
            />
          </View>
          <Image
            style={styles.bicreditCard2FrontFillIcon}
            resizeMode="cover"
            source={{
                uri:"https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.iconbolt.com%2Ficonsets%2Ficonly-two-tone%2Farrow-left&psig=AOvVaw1dN_uHfMYl1hOUJUFs10Qx&ust=1671948522155000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCNCf_uDLkfwCFQAAAAAdAAAAABAE"
            }}
          />
          <Image
            style={[styles.dashiconsbank, styles.containerLayout]}
            resizeMode="cover"
            source={{
                uri:"https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.iconbolt.com%2Ficonsets%2Ficonly-two-tone%2Farrow-left&psig=AOvVaw1dN_uHfMYl1hOUJUFs10Qx&ust=1671948522155000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCNCf_uDLkfwCFQAAAAAdAAAAABAE"
            }}
          />
          <Image
            style={[styles.visaIcon, styles.iconLayout]}
            resizeMode="cover"
            source={{
                uri:"https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.iconbolt.com%2Ficonsets%2Ficonly-two-tone%2Farrow-left&psig=AOvVaw1dN_uHfMYl1hOUJUFs10Qx&ust=1671948522155000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCNCf_uDLkfwCFQAAAAAdAAAAABAE"
            }}
          />
          <Image
            style={[styles.masterIcon, styles.iconLayout]}
            resizeMode="cover"
            source={{
                uri:"https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.iconbolt.com%2Ficonsets%2Ficonly-two-tone%2Farrow-left&psig=AOvVaw1dN_uHfMYl1hOUJUFs10Qx&ust=1671948522155000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCNCf_uDLkfwCFQAAAAAdAAAAABAE"
            }}
          />
          <Image
            style={[styles.bankIcon, styles.iconLayout]}
            resizeMode="cover"
            source={{
                uri:"https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.iconbolt.com%2Ficonsets%2Ficonly-two-tone%2Farrow-left&psig=AOvVaw1dN_uHfMYl1hOUJUFs10Qx&ust=1671948522155000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCNCf_uDLkfwCFQAAAAAdAAAAABAE"
            }}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  textTypo1: {
    position: "absolute",
  },
  textTypo2: {
    fontWeight: "700",
    color:"white"
  },
  totalFlexBox: {
    textAlign: "left",
  },
  textFlexBox: {
    textAlign:"left"
  },
  shippingPosition: {
    width: 315,
    left: 150,
    position: "absolute",
  },
  changeTypo: {
    fontWeight: "600",
    top: 0,
    position: "absolute",
  },
  shippingShadowBox: {
    shadowColor: "rgba(0, 0, 0, 0.03)",
    top: 40,
    left: 0,
    width: 315,
    shadowOpacity: 1,
    elevation: 40,
    shadowRadius: 40,
    shadowOffset: {
      width: 0,
      height: 20,
    },
    position: "absolute",
  },
  iconlylightprofileLayout: {
    left: "9.52%",
    right: "82.86%",
    width: "7.62%",
    height: "11.65%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  text1Position: {
    left: 65,
    textAlign: "left",
    position: "absolute",
  },
  groupLayout1: {
    height: 40,
    width: 250,
    left: 0,
    position: "absolute",
  },
  textTypo: {
    left: 106,
    textAlign: "left",
    position: "absolute",
  },
  groupChildLayout: {
    width: 40,
    left: 30,
    height: 40,
    top: 0,
    position: "absolute",
  },
  groupLayout: {
    height: 30,
    width: 90,
    left: 0,
    top:-1,
    position: "absolute",
  },
  containerLayout: {
    height: 20,
    position: "absolute",
  },
  iconLayout: {
    left: "12.27%",
    right: "59.55%",
    width: "28.18%",
    height: "22.22%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  buttonLargeChild: {
    height: "100%",
    right: "0%",
    left: "0%",
    shadowColor: "rgba(0, 0, 0, 0.1)",
    shadowOpacity: 1,
    elevation: 40,
    shadowRadius: 40,
    shadowOffset: {
      width: 0,
      height: 20,
    },
    bottom: "0%",
    top: "0%",
    position: "absolute",
    width: "100%",
  },
  button: {
    width: "92.36%",
    top: "35.71%",
    left: "3.82%",
    textAlign: "center",
  },
  buttonLarge: {
    top: 785,
    width: 314,
    height: 70,
    left: 130,
    position: "absolute",
    backgroundColor:"green",
    borderRadius:10,
    color:"white",
  },
  checkout1: {
    top: 56,
    left: 166,
  },
  total: {
    top: 714,
    left: 130,
  },
  text: {
    top: 708,
    left: 400,
  },
  iconlylightarrowLeft: {
    height: "2.68%",
    width: "5.8%",
    top: "6.25%",
    right: "87.2%",
    bottom: "91.07%",
    left: "7%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  shippingInformation: {
    left: 30,
  },
  change: {
    left: 254,
  },
  shippingChild: {
    height: 166,
  },
  iconlylightprofile: {
    top: "29.61%",
    bottom: "58.74%",
  },
  rosinaDoe: {
    top: 65,
  },
  oxfordRoadM134grManchester: {
    top: 106,
    width: 243
  },
  iconlylightlocation: {
    top: "51.46%",
    bottom: "36.89%",
  },
  text1: {
    top: 160
  },
  iconlylightcall: {
    top: "76.21%",
    right: "82.22%",
    bottom: "12.14%",
    left: "10.16%",
    width: "7.62%",
    height: "11.65%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  shipping: {
    top: 139,
    height: 206,
  },
  shippingItem: {
    height: 233,
  },
  text2: {
    top: 10,
  },
  groupChild: {
    width: 40,
    left: 30,
  },
  groupItem: {
    top: 11
  },
  groupInner: {
    top: 15,
    left: 4,
    width: 7,
    height: 7,
    position: "absolute",
  },
  parent: {
    top: 0,
  },
  rectangleView: {
    backgroundColor: "#c4c4c4",
  },
  group: {
    top: 70,
  },
  text4: {
    top: 0,
  },
  groupChild1: {
    top: 1,
  },
  container: {
    top: 150,
    width: 220,
    left: 0,
    height: 20,
  },
  bicreditCard2FrontFillIcon: {
    left: 42,
    width: 16,
    height: 16,
    top: 11,
    position: "absolute",
    overflow: "hidden",
  },
  dashiconsbank: {
    top: 79,
    left: 40,
    width: 20,
    overflow: "hidden",
  },
  visaIcon: {
    bottom: "77.78%",
    top: "0%",
    right: "59.55%",
    width: "28.18%",
    height: "22.22%",
  },
  masterIcon: {
    top: "38.89%",
    bottom: "38.89%",
  },
  bankIcon: {
    top: "77.78%",
    bottom: "0%",
    right: "59.55%",
    width: "28.18%",
    height: "22.22%",
  },
  payment: {
    top: 67,
    left: 24,
    height: 180,
    width: 220,
    position: "absolute",
  },
  shipping1: {
    top: 373,
    height: 273,
  },
  checkout: {
    flex: 1,
    height: 896,
    overflow: "hidden",
    width: "100%",
  },
});

export default Checkout;

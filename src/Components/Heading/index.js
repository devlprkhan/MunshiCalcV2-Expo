import React from "react";
import { StyleSheet, Text, View, Image, Pressable } from "react-native";
import BlobPatren from "../../../assets/patren.js";

export default function Heading() {
  return (
    <View style={styles.container}>
      <View style={{ flexDirection: "row" }}>
        <Text style={styles.text}>SELECT</Text>
        <Image
          source={require("../../../assets/icons/select.png")}
          style={styles.selectIcon}
        />
      </View>
      {/* About */}
      <BlobPatren width={76} height={80} style={[styles.blobPatren, styles.shadowProp]} />
      <Pressable style={styles.aboutContainer}>
        <Image
          source={require("../../../assets/icons/about.png")}
          style={styles.aboutIcon}
        />
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    marginTop: 13,
  },
  // Heading
  text: {
    color: "white",
    fontFamily: "RalewaySemiBold",
    fontSize: 32,
    letterSpacing: 10,
  },
  // Select Icon
  selectIcon: {
    height: 28,
    width: 28,
    transform: [{ rotate: "-10deg" }],
  },
  // Blob SVG
  blobPatren: {
    position: "absolute",
    top: -40,
    right: -27,
    transform: [{ rotate: "330deg" }],
  },
  // About
  aboutContainer: {
    position: "absolute",
    top: -3,
    right: 10,
  },
  aboutIcon: {
    height: 20,
    width: 20,
    tintColor: "white",
    zIndex: 100,
  },
  shadowProp: {
    shadowColor: '#171717',
    shadowOffset: {width: -2, height: 4},
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
});

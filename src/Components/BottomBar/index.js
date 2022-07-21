import React from "react";
import { StyleSheet, Text, View, Pressable } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
// import DropShadow from "react-native-drop-shadow";


export default function BottomBar() {
  return (
    <View style={styles.container}>
      <Text style={styles.total}>Total: 0.00</Text>
      <Pressable>
        <LinearGradient
          colors={["#80c341", "#1eb24b"]}
          start={{ x: 1, y: 1 }}
          end={{ x: 0, y: 1 }}
          style={[styles.clearBtn, styles.shadowProp]}
        >
          <Text style={styles.btnText}>CLEAR</Text>
        </LinearGradient>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: 'center',
    backgroundColor: "#fff",
    // Rem me
    padding: 10,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  total: {
    fontFamily: "RalewayRegular",
    fontSize: 15,
    letterSpacing: 2,
    fontStyle: "italic",
    marginLeft: 5,
  },
  clearBtn: {
    marginRight: 5,
    paddingHorizontal: 7,
    paddingVertical: 5,
    borderRadius: 5
  },
  btnText: {
    fontFamily: "RalewayRegular",
    color: '#fff'
  },
  // Shadow
  shadowProp: {
    shadowColor: '#171717',
    shadowOffset: {width: -3, height: 4},
    shadowOpacity: 0.2,
    shadowRadius: 3,

    elevation: 20,
    shadowColor: '#171717',
  },
});

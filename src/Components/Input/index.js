import React from 'react'
import { Text, View, TextInput } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import styles from "./styles";


const Input = ({element}) => {  

  return (
    // {/* Inputs */}
    <View key={element.id} style={styles.inputContainer}>
    <LinearGradient
      colors={["#80c341", "#1eb24b"]}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={styles.priceBg}
    >
      <Text style={styles.price}>{element.val}</Text>
    </LinearGradient>
    <TextInput
    //   value={inputStates[index]}
      onChangeText={(text) => {
        if (inputStates === coinsData) {
          setStates(index, text, coinsData);
        } else {
          setStates(index, text, notesData);
        }
      }}
      style={styles.input}
      keyboardType="numeric"
      maxLength={5}
    />
    <LinearGradient
      colors={["#80c341", "#1eb24b"]}
      start={{ x: 1, y: 1 }}
      end={{ x: 0, y: 0 }}
      style={styles.inlineTotalBG}
    >
      <Text style={[styles.price, { fontSize: 17 }]}>
        0.00
      </Text>
    </LinearGradient>
  </View>
  )
}

export default Input
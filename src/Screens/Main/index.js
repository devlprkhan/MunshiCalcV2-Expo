import React, { useState, useEffect, useRef } from "react";
import { Text, View, TextInput, FlatList, Pressable } from "react-native";
import styles from "./styles";
import { LinearGradient } from "expo-linear-gradient";

// Components
import Heading from "../../Components/Heading";
// Data
import data from "../../../assets/data/index.json";
// Extract (Coins, Notes, Bonds) From Data (for FlatList)
let coins = data[0];
let notes = data[1];
// Initial Values for state's (Coins,Notes) flatlist
const initialValuesForCoins = {
  0: "",
  1: "",
  2: "",
};
const initialValuesForNotes = {
  0: "",
  1: "",
  2: "",
  3: "",
  4: "",
  5: "",
  6: "",
};

export default function Main() {
  // states
  let [coinsData, setCoinsData] = useState(initialValuesForCoins)
  let [notesData, setNotesData] = useState(initialValuesForNotes)

  // Multiply results
  // This is for Coins input bar's
  const [v5] = useState(() => value => 5 * value);
  const [v2] = useState(() => value => 2 * value);
  const [v1] = useState(() => value => 1 * value);

  // This is for Notes input bar's
  const [v5000] = useState(() => value => 5000 * value);
  const [v1000] = useState(() => value => 1000 * value);
  const [v500] = useState(() => value => 500 * value);
  const [v100] = useState(() => value => 100 * value);
  const [v50] = useState(() => value => 50 * value);
  const [v20] = useState(() => value => 20 * value);
  const [v10] = useState(() => value => 10 * value);


  // Update states with input data coming from input bars
  let setStates = (index, text, states) => {
    if (states === coinsData) {
      setCoinsData({
        ...coinsData,
        [index]: text
      })
    } else {
      setNotesData({
        ...notesData,
        [index]: text
      })
    }
  }

  // Multiplier Function
  let multiplier = (value, pow) => {
    return value * pow
  }

  // Clear Inputs
  // Used to clear inputs and reset the states
  let clearInputs = () => {
    setCoinsData({ ...initialValuesForCoins });
    setNotesData({ ...initialValuesForNotes });
  }

  // Get totatl
  // This function introduces sums of coins, notes and also total number of coins and notes
  let getTotal = () => {
    // Number of Coins
    let totalNumOfCoins = Number(coinsData[0]) + Number(coinsData[1]) + Number(coinsData[2])
    // Total Value
    let totalCoin = v5(Number(coinsData[0])) + v2(Number(coinsData[1])) + v1(Number(coinsData[2]))

    // Number of Notes
    const totalNumOfNotes = Number(notesData[0]) + Number(notesData[1]) + Number(notesData[2]) + Number(notesData[3]) + Number(notesData[4]) + Number(notesData[5]) + Number(notesData[6])
    // Total Value
    const totalNote = v5000(Number(notesData[0])) + v1000(Number(notesData[1])) + v500(Number(notesData[2])) + v100(Number(notesData[3])) + v50(Number(notesData[4])) + v20(Number(notesData[5])) + v10(Number(notesData[6]));

    // Return as An Array
    return [totalNumOfCoins, totalCoin, totalNumOfNotes, totalNote]
  }

  // Access Function Return Values (Return As an Array)
  let [totalNumOfCoins, totalCoin, totalNumOfNotes, totalNote] = getTotal();
  // Super Total
  let superTotal = Number(totalCoin) + Number(totalNote)

  // FlatList Functions
  // Header
  const FlatList_Header = (props) => {
    return (
      <View>
        <Text style={styles.notesHeading}>{props}</Text>
      </View>
    );
  };
  // Footer
  const FlatList_Footer = (totalNumOf, total) => {
    return (
      <View style={styles.totalContainer}>
        <View style={[styles.line, { marginRight: 10 }]}>
          <Text style={styles.rs}>Num of:</Text>
          <Text style={styles.totalValue}>{totalNumOf}</Text>
        </View>
        <View style={styles.line}>
          <Text style={styles.rs}>RS:</Text>
          <Text style={styles.totalValue}>{total}</Text>
        </View>
      </View>
    );
  };
  // renderItem
  let renderItemFunction = ({ index, item }, inputStates) => {
    return (
      // {/* Inputs */}
      <View style={styles.inputContainer}>
        <LinearGradient
          colors={["#80c341", "#1eb24b"]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          style={styles.priceBg}
        >
          <Text style={styles.price}>{item.val.toLocaleString()}</Text>
        </LinearGradient>
        <TextInput
          value={inputStates[index]}
          onChangeText={(text) => {
            if (inputStates === coinsData) {
              setStates(index, text, coinsData)
            } else {
              setStates(index, text, notesData)
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
          style={styles.totalBg}
        >
          <Text style={styles.total}>{multiplier(item.val, Number(inputStates[index])) == 0 ? '0.00' : multiplier(item.val, Number(inputStates[index])).toLocaleString()}</Text>
        </LinearGradient>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <View>
        <Heading />
        <View style={styles.notesContainer}>
          {/* Flatlist to populate InputbBars for Notes */}
          <FlatList
            data={notes.notes}
            renderItem={(item) => renderItemFunction(item, notesData)}
            keyExtractor={(item) => item.id}
            ListHeaderComponent={FlatList_Header(`BANK NOTES`)}
            ListFooterComponent={() => FlatList_Footer(totalNumOfNotes, totalNote)}
          />
          {/* Flatlist to populate InputbBars for Coins */}
          <FlatList
            data={coins.coins}
            renderItem={(item) => renderItemFunction(item, coinsData)}
            keyExtractor={(item) => item.id}
            ListHeaderComponent={FlatList_Header(`COIN'S`)}
            ListFooterComponent={() => FlatList_Footer(totalNumOfCoins, totalCoin)}
          />
        </View>

        <View style={styles.bottomBar}>
          <Text style={styles.superTotal}>Total: {superTotal}</Text>
          <Pressable onPress={clearInputs}>
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
      </View>
    </View>
  );
}

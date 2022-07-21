import React, { useState, useEffect, useRef } from "react";
import { Text, View, TextInput, FlatList } from "react-native";
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
  // state's
  const [textInputsForCoin, setTextInputsForCoin] = useState(initialValuesForCoins);
  const [textInputsForNote, setTextInputsForNote] = useState(initialValuesForNotes);

  // If the clear button is pressed the setInputsFor(Coins, Notes, Bonds) clear the inputs and setInputs to Flase
  // Error Fix (while setInput from store): Cannot update a component while rendering a different component warning
  // Reference: https://www.youtube.com/watch?v=tmt9JFxwDnQ
  let clearInputsFunction = () => {
    useEffect(() => {
      if (resetForCoins == true) {
        setTextInputsForCoin({ ...initialValuesForCoins });
      } else if (resetForNotes == true) {
        setTextInputsForNote({ ...initialValuesForNotes });
      }
    }, [resetForCoins, resetForNotes]);
  };
  // clearInputsFunction();

  // Multiply
  // For input result
  let Multiplier = (value, pow) => {
    return value * pow;
  };

  // Function add comma in price
  let NumberWithCommas = (value) => {
    // regex to add comma in value
    return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  // FlatList Functions
  const FlatList_Header = (props) => {
    return (
      <View>
        <Text style={styles.notesHeading}>{props}</Text>
      </View>
    );
  };
  const FlatList_Footer = () => {
    return (
      <View style={styles.totalContainer}>
        <View style={styles.line}>
          <Text style={styles.rs}>RS:</Text>
          <Text style={styles.totalValue}>{/* Value */}</Text>
        </View>
      </View>
    );
  };
  let renderItemFunction = ({ index, item }, inputStates) => {
    console.log(item)
    return (
      // {/* Inputs */}
      <View style={styles.inputContainer}>
        <LinearGradient
          colors={["#80c341", "#1eb24b"]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          style={styles.priceBg}
        >
          <Text style={styles.price}>{item.val}</Text>
        </LinearGradient>
        <TextInput
          value={inputStates[index]}
          onChangeText={(text) => {
            HandleInputs(index, text);
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
          <Text style={styles.total}>0.00</Text>
        </LinearGradient>
      </View>
    );
  };

  // Handle Multiple Inputs state's (to avoid multiple states)
  // (Coins, Notes)
  let HandleInputs = (index, value) => {
      setTextInputsForNote({ ...textInputsForNote, [index]: value });
    // setTextInputsForCoin({ ...textInputsForCoin, [index]: value });
    // console.log(textInputsForCoin, textInputsForNote);
  };

  // test
  // test end
  return (
    <View style={styles.container}>
      <View>
        <Heading />
        <View style={styles.notesContainer}>
          {/* Flatlist to populate InputbBars for Notes */}
          <FlatList
            data={notes.notes}
            renderItem={(item) => renderItemFunction(item, textInputsForNote)}
            keyExtractor={(item) => item.id}
            ListHeaderComponent={FlatList_Header(`BANK NOTES`)}
            ListFooterComponent={FlatList_Footer}
          />
          {/* Flatlist to populate InputbBars for Coins */}
          <FlatList
            data={coins.coins}
            renderItem={(item) => renderItemFunction(item, textInputsForCoin)}
            keyExtractor={(item) => item.id}
            ListHeaderComponent={FlatList_Header(`COIN'S`)}
            ListFooterComponent={FlatList_Footer}
          />
        </View>
      </View>
    </View>
  );
}

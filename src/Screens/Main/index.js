import React, { useState } from "react";
import { Text, View, TextInput, Pressable, ScrollView } from "react-native";
import styles from "./styles";
import { LinearGradient } from "expo-linear-gradient";

// Components
import Heading from "../../Components/Heading";
// Data
import data from "../../../assets/data/index.json";
// Extract (Coins, Notes) From Data
let coins = data[0];
let notes = data[1];
// Initial Values for state's (Coins,Notes)
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
  // States
  let [coinsData, setCoinsData] = useState(initialValuesForCoins);
  let [notesData, setNotesData] = useState(initialValuesForNotes);
  
  // Multiply results
  // This is for Coins input bar's (inline multiplication results)
  const [v5] = useState(() => (value) => 5 * value);
  const [v2] = useState(() => (value) => 2 * value);
  const [v1] = useState(() => (value) => 1 * value);

  // This is for Notes input bar's (inline multiplication results)
  const [v5000] = useState(() => (value) => 5000 * value);
  const [v1000] = useState(() => (value) => 1000 * value);
  const [v500] = useState(() => (value) => 500 * value);
  const [v100] = useState(() => (value) => 100 * value);
  const [v50] = useState(() => (value) => 50 * value);
  const [v20] = useState(() => (value) => 20 * value);
  const [v10] = useState(() => (value) => 10 * value);

  // Update states with input data coming from input bars
  let setStates = (index, text, states) => {
    if (states === coinsData) {
      setCoinsData({
        ...coinsData,
        [index]: text,
      });
    } else {
      setNotesData({
        ...notesData,
        [index]: text,
      });
    }
  };  

  // Multiplier Function to multiply input values
  let multiplier = (value, pow) => {
    return value * pow;
  };

  // Function add comma in price
  let NumberWithCommas = (value) => {
    // regex to add comma in value
    return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  // Clear Inputs
  // Used to clear inputs and reset the states
  let clearInputs = () => {
    setCoinsData({ ...initialValuesForCoins });
    setNotesData({ ...initialValuesForNotes });
  };

  // Get totatl
  // This function introduces sums of coins, notes and also total number of coins and notes
  let getTotal = () => {
    // Number of Coins
    let totalNumOfCoins =
      Number(coinsData[0]) + Number(coinsData[1]) + Number(coinsData[2]);
    // Total Value of Coins
    let totalCoin =
      v5(Number(coinsData[0])) +
      v2(Number(coinsData[1])) +
      v1(Number(coinsData[2]));

    // Number of Notes
    const totalNumOfNotes =
      Number(notesData[0]) +
      Number(notesData[1]) +
      Number(notesData[2]) +
      Number(notesData[3]) +
      Number(notesData[4]) +
      Number(notesData[5]) +
      Number(notesData[6]);
    // Total Value of Coins
    const totalNote =
      v5000(Number(notesData[0])) +
      v1000(Number(notesData[1])) +
      v500(Number(notesData[2])) +
      v100(Number(notesData[3])) +
      v50(Number(notesData[4])) +
      v20(Number(notesData[5])) +
      v10(Number(notesData[6]));

    // Return as An Array
    return [totalNumOfCoins, totalCoin, totalNumOfNotes, totalNote];
  };

  // Access Function Returned Values (Return As an Array)
  let [totalNumOfCoins, totalCoin, totalNumOfNotes, totalNote] = getTotal();
  // Super Total For Bottom Bar
  // Get (totalCoins & totalNotes) from function named as (getTotal)
  let superTotal = Number(totalCoin) + Number(totalNote);

  // Module (Convert Numbers in to Urdu Words)
  // This Function Takes Numbers As an Input And Return Numbers in the form of Urdu Currency Formate
  // Maximum Numbers is 9 takeing by function
  function numbersToUrdu(num) {

    // Regex to only Allow Numbers otherwise remove it
    let onlyNumbers = num.toString().replace(/[^0-9 ]/g, '');

    // Arrays to get vales from here
    const digit = ['', '1 ', '2 ', '3 ', '4 ', '5 ', '6 ', '7 ', '8 ', '9 ', '10 ', '11 ', '12 ', '13 ', '14 ', '15 ', '16 ', '17 ', '18 ', '19 '];
    const tens = ['', '', '20', '30', '40', '50', '60', '70', '80', '90'];

    // If Numbers length Greater Than 9 return overflow
    if ((onlyNumbers = onlyNumbers.toString()).length > 9) return 'overflow';

    // Make an array of price and store data into saperate indexes
    let numToArray = ('000000000' + onlyNumbers).substr(-9).match(/^(\d{2})(\d{2})(\d{2})(\d{1})(\d{2})$/);

    // if 'numToArray' is empty return empty
    if (!numToArray) return;

    // Make an variable to store converted value
    let covertedValue = '';

    // Store data into covertedValue (if single didgit figure get data from corresponding array) or (if double digit figure plus the data which is comes from two different arraya)
    covertedValue += (numToArray[1] != 0) ? 'کروڑ' + (digit[Number(numToArray[1])] || Number(tens[numToArray[1][0]]) + Number(digit[numToArray[1][1]])) + " " : '';
    covertedValue += (numToArray[2] != 0) ? 'لاکھ' + (digit[Number(numToArray[2])] || Number(tens[numToArray[2][0]]) + Number(digit[numToArray[2][1]])) + " " : '';
    covertedValue += (numToArray[3] != 0) ? 'ہزار' + (digit[Number(numToArray[3])] || Number(tens[numToArray[3][0]]) + Number(digit[numToArray[3][1]])) + " " : '';
    covertedValue += (numToArray[4] != 0) ? 'سو' + (digit[Number(numToArray[4])] || Number(tens[numToArray[4][0]]) + Number(digit[numToArray[4][1]])) : '';
    covertedValue += (numToArray[5] != 0) ? 'روپئے' + (digit[Number(numToArray[5])] || Number(tens[numToArray[5][0]]) + Number(digit[numToArray[5][1]])) : '';

    return covertedValue;
  }

  // Header Componet for Inputs (BANK NOTE'S & COINS)
  let HeaderComponent = ({ title }) => {
    return (
      <View>
        <Text style={styles.header}>{title}</Text>
      </View>
    )
  }

  return (
    <View style={styles.container}>
      {/* Header */}
      <Heading />
      {/* Body */}
      <ScrollView
        contentContainerStyle={{
          alignItems: 'center',
          marginTop: 10
        }}
        showsVerticalScrollIndicator={false}
      >
        <View style={{ paddingBottom: 53 }}>

          {/* Header of Notes*/}
          <HeaderComponent title="BANK NOTE'S" />
          {/* Body of Notes */}
          {notes.notes.map((items, index) => (
            // {/* Body of Notes */}
            <View style={styles.inputContainer} key={items.id}>
              <LinearGradient
                colors={["#80c341", "#1eb24b"]}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}
                style={styles.priceBg}
              >
                <Text style={styles.price}>{NumberWithCommas(items.val)}</Text>
              </LinearGradient>
              <TextInput
                style={styles.input}
                value={notesData[index]}
                autoFocus={true}
                onChangeText={(text) => {
                  setStates(index, text, notesData);}}
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
                  {multiplier(items.val, Number(notesData[index])) == 0
                    ? "0.00"
                    : NumberWithCommas(
                      multiplier(items.val, Number(notesData[index]))
                    )}
                </Text>
              </LinearGradient>
            </View>
          ))}
          {/* Fotter of Notes */}
          <View style={styles.footer}>
            <Text style={styles.rs}>روپئے {NumberWithCommas(totalNote)}</Text>
            <View style={styles.line}></View>
            <Text style={styles.rs}>تعداد {NumberWithCommas(totalNumOfNotes)}</Text>
          </View>


          {/* Header of Coins*/}
          <HeaderComponent title="COIN'S" />
          {/* Body of Coins */}
          {coins.coins.map((items, index) => (
            // {/* Inputs */}
            <View style={styles.inputContainer} key={items.id}>
              <LinearGradient
                colors={["#80c341", "#1eb24b"]}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}
                style={styles.priceBg}
              >
                <Text style={styles.price}>{NumberWithCommas(items.val)}</Text>
              </LinearGradient>
              <TextInput
                value={coinsData[index]}
                onChangeText={(text) => {
                  setStates(index, text, coinsData);
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
                  {multiplier(items.val, Number(coinsData[index])) == 0
                    ? "0.00"
                    : NumberWithCommas(
                      multiplier(items.val, Number(coinsData[index]))
                    )}
                </Text>
              </LinearGradient>
            </View>
          ))}
          {/* Fotter of Coins */}
          <View style={styles.footer}>
            <Text style={styles.rs}>روپئے {NumberWithCommas(totalCoin)}</Text>
            <View style={[styles.line, { width: 120 }]}></View>
            <Text style={styles.rs}>تعداد {NumberWithCommas(totalNumOfCoins)}</Text>
          </View>
        </View>
      </ScrollView>


      {/* Footer */}
      <View style={styles.bottomBar}>
        {/* Super Total */}
        <Text style={styles.superTotal}>
        {/* Get Converted Result from numbersToUrdu() function and reverse it and then remove extra white space and then again join together to get urdu Currency Formate */}
          Total: {superTotal > 0 ? numbersToUrdu(superTotal).split(" ").reverse().join(" ").replace(/\s+/g, ' ').trim() : "0"}
        </Text>

        {/* Clear Button */}
        <Pressable onPress={clearInputs}>
          <LinearGradient
            colors={["#80c341", "#1eb24b"]}
            start={{ x: 1, y: 1 }}
            end={{ x: 0, y: 1 }}
            style={styles.clearBtn}
          >
            <Text style={styles.btnText}>CLEAR</Text>
          </LinearGradient>
        </Pressable>
      </View>
    </View>
  );
}

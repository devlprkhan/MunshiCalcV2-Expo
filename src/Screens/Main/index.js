import React, { useState } from "react";
import { Text, View, TextInput, Pressable, ScrollView } from "react-native";
import styles from "./styles";
import { LinearGradient } from "expo-linear-gradient";
import DropShadow from "react-native-drop-shadow";


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
  // Variables for (number2words) function
  let num = "0 1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19".split(" ");
  let tens = "20 30 40 50 60 70 80 90".split(" ");

  // Maximum Numbers is 13 takeing by function
  function number2words(n) {
    let digit = n % 10;
    if (n < 20) return num[n];
    if (n < 100) return Number(tens[~~(n / 10) - 2]) + Number((digit ? num[digit] : ""));
    if (n < 1000) return " سو" + num[~~(n / 100)] + (n % 100 == 0 ? "" : " " + number2words(n % 100));
    if (n < 100000) return " ہزار" + number2words(~~(n / 1000)) + (n % 1000 != 0 ? number2words(n % 1000) : "");
    if (n < 10000000) return " لاکھ" + number2words(~~(n / 100000)) + (n % 100000 != 0 ? number2words(n % 100000) : "");
    if (n < 1000000000) return " کروڑ" + number2words(~~(n / 10000000)) + (n % 10000000 != 0 ? number2words(n % 10000000) : "");
    if (n < 100000000000) return " ارب" + number2words(~~(n / 1000000000)) + (n % 1000000000 != 0 ? number2words(n % 1000000000) : "");
    if (n < 10000000000000) return " کھرب" + number2words(~~(n / 100000000000)) + (n % 100000000000 != 0 ? number2words(n % 100000000000) : "");

    // If Number is Maximum 100 ارب or Number Greater Than By 13, Like if input number length is Greater Than 13 It return "Overflow"
    return "Overflow"
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
                value={notesData[index]}
                onChangeText={(text) => {
                  setStates(index, text, notesData);
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
            <View style={[styles.line, {width: 120}]}></View>
            <Text style={styles.rs}>تعداد {NumberWithCommas(totalNumOfCoins)}</Text>
          </View>
        </View>
      </ScrollView>


      {/* Footer */}
      <View style={styles.bottomBar}>
        {/* Super Total */}
        <Text style={styles.superTotal}>
          Total: {superTotal > 0 ? (number2words(superTotal) + " روپئے").split(" ").reverse().join(" ") : "0" }
        </Text>
        {/* Clear Button */}
        <DropShadow
      style={{
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 0,
        },
        shadowOpacity: 1,
        shadowRadius: 5,
      }}
    >

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
            </DropShadow>
      </View>
    </View>
  );
}

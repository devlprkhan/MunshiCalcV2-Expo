import { StyleSheet, View } from "react-native";
import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

// Navigation
import Navigation from "./src/Navigation";

import Main from "./src/Screens/Main/index";
import BottomBar from "./src/Components/BottomBar";
import About from "./src/Screens/About";

// Font
import { useFonts } from "expo-font";

// require in the font
const customFonts = {
  RalewayBold: require("./assets/fonts/Raleway-SemiBold.ttf"),
  RalewayMedium: require("./assets/fonts/Raleway-Medium.ttf"),
  RalewayRegular: require("./assets/fonts/Raleway-Regular.ttf"),
  RalewaySemiBold: require("./assets/fonts/Raleway-SemiBold.ttf"),
};

export default function App() {
  const [isLoaded] = useFonts(customFonts);

  if (!isLoaded) {
    return null;
  }

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <Navigation />
        <StatusBar style="light" />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#232323",
  },
});

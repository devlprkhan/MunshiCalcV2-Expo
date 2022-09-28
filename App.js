import { StyleSheet } from "react-native";
import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

// Navigation
import Navigation from "./src/Navigation";

// Font
import { useFonts } from "expo-font";

// require in the font
const customFonts = {
  Alvi: require("./assets/fonts/Alvi.ttf"),
  RalewayRegular: require("./assets/fonts/Raleway-Regular.ttf"),
  RalewayMedium: require("./assets/fonts/Raleway-Medium.ttf"),
  RalewayBold: require("./assets/fonts/Raleway-Bold.ttf"),
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

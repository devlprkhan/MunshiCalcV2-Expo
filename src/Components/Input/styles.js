import { StyleSheet } from "react-native";

const styles = StyleSheet.create({

  // RenderItem Function (Flatlist)
  // Inputs Container
  inputContainer: {
    marginTop: 10,
    marginBottom: 5,
    flexDirection: "row",
  },

  // Price BG
  priceBg: {
    height: 35,
    width: 110,
    alignItems: "center",
    justifyContent: "center",
    borderBottomLeftRadius: 5,
    borderTopLeftRadius: 5,
  },
  //Price Text
  price: {
    fontFamily: "RalewayMedium",
    fontSize: 20,
    color: "#fff",
  },

  // Input Bar
  input: {
    width: 90.2,
    height: 35,
    fontFamily: "RalewayRegular",
    textAlign: "center",
    fontSize: 18,
    color: "#fff",
    borderColor: "#1EB24B",
    borderWidth: 1,
  },

  // Total BG Inline
  inlineTotalBG: {
    height: 35,
    width: 110,
    alignItems: "center",
    justifyContent: "center",
    borderBottomRightRadius: 5,
    borderTopRightRadius: 5,
  },
});

export default styles;

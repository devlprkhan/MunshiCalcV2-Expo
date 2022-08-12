import { StyleSheet } from "react-native";

const styles = StyleSheet.create({

  // Main Container
  container: {
    flex: 1,
    backgroundColor: "#232323",
  },

  // Flatlists Container
  flatlistsContainer: {
    marginTop: 20,
    alignItems: "center",
  },

  // Flatlist Header Components
  flatlistHeader: {
    color: "#fff",
    letterSpacing: 5,
    fontFamily: "RalewayRegular",
    fontSize: 13,
    textAlign: "center",
  },

  // Flatlist Bottom Components
  // Total
  flatlistBottom: {
    marginTop: 5,
    marginBottom: 15,
  },
  rs: {
    fontFamily: "Alvi",
    fontSize: 18,
    letterSpacing: 2,
    color: "#fff",
  },
  line: {
    borderBottomWidth: 1,
    borderBottomColor: "#1EB24B",
    width: 160,
    marginVertical: 1,
    alignSelf: "flex-end",
  },

  // RenderItem Function (Flatlist)
  // Inputs Container
  inputContainer: {
    marginTop: 8,
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

  // Bottom Bar Container
  bottomBar: {
    //Set position of bottom bar based on keyboard popup 
    position: 'absolute',
    bottom: 0,
    width: '100%',
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#fff",
    padding: 10,
    // Top Curves
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  // Clear Button Container
  clearBtn: {
    marginRight: 5,
    paddingHorizontal: 7,
    paddingVertical: 5,
    borderRadius: 5,
  },
  // Clear Button Text
  btnText: {
    fontFamily: "RalewayRegular",
    color: "#fff",
  },

  // Super Total Bottom Bar
  superTotal: {
    fontFamily: "Alvi",
    fontSize: 20,
  },

  
  // Shadows
  // Todo
  shadowProp: {
    shadowColor: "#171717",
    shadowOffset: { width: -3, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 20,
    shadowColor: "#171717",
  },
});

export default styles;

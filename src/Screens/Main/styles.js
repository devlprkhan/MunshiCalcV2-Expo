import { StyleSheet } from "react-native"

const styles = StyleSheet.create({
    container: {
      justifyContent: "space-between",
    },
    notesContainer: {
      marginTop: 20,
      alignItems: "center",
    },
    notesHeading: {
      color: "#fff",
      letterSpacing: 5,
      fontFamily: "RalewayRegular",
      fontSize: 13,
      textAlign: "center",
    },
    // Inputs
    inputContainer: {
      marginTop: 10,
      flexDirection: "row",
    },
    input: {
      width: 90.2,
      padding: 5,
      fontFamily: "RalewayRegular",
      textAlign: "center",
      fontSize: 18,
      color: "#fff",
      borderColor: "#1EB24B",
      borderWidth: 1,
    },
    // Price
    priceBg: {
      height: 40,
      width: 110,
      alignItems: "center",
      justifyContent: "center",
      borderBottomLeftRadius: 5,
      borderTopLeftRadius: 5,
    },
    price: {
      fontFamily: "RalewayMedium",
      fontSize: 20,
      color: "#fff",
    },
    // Total inline
    totalBg: {
      height: 40,
      width: 110,
      alignItems: "center",
      justifyContent: "center",
      borderBottomRightRadius: 5,
      borderTopRightRadius: 5,
    },
    total: {
      fontFamily: "RalewayMedium",
      fontSize: 20,
      color: "#fff",
    },
  
    // Total
    totalContainer: {
      marginTop: 10,
      marginRight: 45,
      marginBottom: 20,
      // alignSelf: 'flex-end'
      // alignItems: 'flex-end'
      position: 'relative',
      left: 160
    },
    rs: {
      fontFamily: "RalewayMedium",
      fontStyle: "italic",
      fontSize: 15,
      letterSpacing: 2,
      color: "#fff",
      marginRight: 3,
    },
    totalValue: {
      color: "white",
      fontFamily: "RalewayMedium",
    },
    line: {
      flexDirection: "row",
      borderBottomWidth: 1,
      borderBottomColor: "#1EB24B",
      width: 150,
    },
  });
  

export default styles
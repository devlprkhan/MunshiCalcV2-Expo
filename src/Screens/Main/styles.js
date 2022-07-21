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
    // Total Input Bars
    superTotal: {
      fontFamily: "RalewayMedium",
      fontSize: 20,
      // color: "#fff",
      fontStyle: 'italic'
    },
  
    // Total
    totalContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginTop: 10,
      marginRight: 45,
      marginBottom: 20,
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

    // Bottom Bar
    bottomBar: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: 'center',
      backgroundColor: "#fff",
      // Rem me
      padding: 10,
      borderTopLeftRadius: 10,
      borderTopRightRadius: 10,
    },
    total: {
      fontFamily: "RalewayRegular",
      fontSize: 15,
      letterSpacing: 2,
      fontStyle: "italic",
      marginLeft: 5,
    },
    clearBtn: {
      marginRight: 5,
      paddingHorizontal: 7,
      paddingVertical: 5,
      borderRadius: 5
    },
    btnText: {
      fontFamily: "RalewayRegular",
      color: '#fff'
    },
    // Shadow
    shadowProp: {
      shadowColor: '#171717',
      shadowOffset: {width: -3, height: 4},
      shadowOpacity: 0.2,
      shadowRadius: 3,
  
      elevation: 20,
      shadowColor: '#171717',
    },
  });
  

export default styles
import { StyleSheet } from "react-native"

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "space-between",
          backgroundColor: "#232323",

    },
    notesContainer: {
      // flex: 1,
      marginTop: 20,
      justifyContent: 'center',
      alignItems: 'center'
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
      flex:1,
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
    
    // Super Total Bottom Bar
    superTotal: {
      fontFamily: "RalewayMedium",
      fontSize: 20,
      fontStyle: 'italic'
    },
  
    // Total
    totalContainer: {
      // flexDirection: 'row',
      // justifyContent: 'space-between',
      marginTop: 10,
      marginBottom: 20,
    },
    rs: {
      fontFamily: "RalewayMedium",
      // fontStyle: "italic",
      fontSize: 15,
      letterSpacing: 2,
      color: "#fff",
    },
    totalValue: {
      color: "white",
      fontFamily: "RalewayMedium",
    },
    line: {
      borderBottomWidth: 1,
      borderBottomColor: "#1EB24B",
      width: 160,
      marginVertical: 5,
      alignSelf: 'flex-end'
    },

    // Bottom Bar
    bottomBar: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: 'center',
      backgroundColor: "#fff",
      padding: 10,
      borderTopLeftRadius: 10,
      borderTopRightRadius: 10,
      
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
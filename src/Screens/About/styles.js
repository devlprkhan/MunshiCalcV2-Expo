import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  // Back Button
  back: {
    position: "absolute",
    top: 5,
    left: 15,
  },
  backIcon: {
    height: 25,
    width: 25,
    tintColor: "#fff",
  },
  // Blob SVG
  blobPatren: {
    position: "absolute",
    top: -35,
    left: -15,
    transform: [{ rotate: "360deg" }],
  },

  // about
  aboutContainer: {
    flex: 1,
    alignItems: "center",
    marginHorizontal: 35,
    marginVertical: 100,
  },
  image: {
    height: 180,
    width: 220,
    position: 'absolute',
    top: 5,
    left: -35,
    zIndex: 101
  },
  dpBlob: {
    transform: [{ rotate: "40deg" }],
    zIndex: 100,
},
dpBlob2: {
    transform: [{ rotate: "40deg" }],
    position: 'absolute',
    top: 10,
    left: -10,
},
  detail: {
    alignItems: "center",
    marginBottom: 40,
  },
  appName: {
    fontFamily: "RalewayBold",
    fontSize: 32,
    marginBottom: 10,
    color: "#fff",
  },
  credit: {
    flexDirection: "row",
    marginBottom: 10,
  },
  created: {
    fontFamily: "RalewayRegular",
    fontSize: 14,
    color: "#C4C4C4",
    paddingRight: 5,
  },
  name: {
    fontFamily: "RalewayMedium",
    fontSize: 14,
    color: "#fff",
  },
  description: {
    textAlign: "center",
    fontFamily: "RalewayRegular",
    fontSize: 16,
    color: "#fff",
  },
  emailContainer: {
    alignItems: "center",
  },
  bussiness: {
    fontFamily: "RalewayMedium",
    fontSize: 16,
    color: "#C4C4C4",
    marginBottom: 5,
  },
  email: {
    fontFamily: "RalewayMedium",
    fontSize: 16,
    color: "#fff",
  },
});

export default styles;

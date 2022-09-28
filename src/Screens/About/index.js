import { Text, View, Image, Pressable } from "react-native";
import styles from "./styles";
// DP Patrens (About Page DP)
import BlobPatren from "../../../assets/patren.js";

export default function About({navigation}) {

  return (
    <View style={styles.container}>
        <BlobPatren width={85} height={90} style={[styles.blobPatren]} />
      <Pressable
        style={styles.back}
        onPress={() => {
          navigation.goBack()
        }}
      >
        {/* Back Icon */}
        {/* SVG BLOB */}
        <Image
          source={require("./../../../assets/icons/back.png")}
          style={styles.backIcon}
        />
      </Pressable>
      <View style={styles.aboutContainer}>
        {/* DP */}
        <View>
          {/* SVG BLOB */}
          <Image
            source={require("./../../../assets/DP.png")}
            style={styles.image}
          />
        </View>
        {/* Detail */}
        <View style={styles.detail}>
          <Text style={styles.appName}>Munshi Calc</Text>
          <View style={styles.credit}>
            <Text style={styles.created}>Created by</Text>
            <Text style={styles.name}>Haseeb Khan</Text>
          </View>
          <Text style={styles.description}>
            Munshi Calc used to calculate currency notes, coins etc...
          </Text>
        </View>
        {/* Email */}
        <View style={styles.emailContainer}>
          <Text style={styles.bussiness}>For Business</Text>
          <Text style={styles.email}>devlpr.khan@gmail.com</Text>
        </View>
      </View>
    </View>
  );
}

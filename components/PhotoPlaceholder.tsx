import { View, StyleSheet, Image } from "react-native";

export default function PhotoPlaceholder({ source }: any) {
  return (
    <View style={styles.box}>
      <Image source={source} style={styles.image} />
    </View>
  );
}

const styles = StyleSheet.create({
 box: {
  height: 450,
  borderRadius: 28,
  overflow: "hidden",
  shadowColor: "#000",
  shadowOpacity: 0.15,
  shadowRadius: 10,
  elevation: 6
},
  image: {
    width: "100%",
    height: "100%",
  }
});
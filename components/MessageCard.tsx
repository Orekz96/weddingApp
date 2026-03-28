import { View, Text, StyleSheet } from "react-native";

export default function MessageCard({ name, message }: any) {
  return (
    <View style={styles.card}>
      <Text style={styles.name}>{name}</Text>
      <Text>{message}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 15
  },
  name: {
    fontWeight: "700",
    color: "#b8962e"
  }
});
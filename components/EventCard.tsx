import { View, Text, StyleSheet } from "react-native";

export default function EventCard({ title, time, venue }: any) {
  return (
    <View style={styles.card}>
      <Text style={styles.title}>{title}</Text>
      <Text>{time}</Text>
      <Text>{venue}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
    borderRadius: 18,
    padding: 20,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 3
  },
  title: {
    fontSize: 18,
    fontWeight: "700",
    color: "#0f7a55"
  }
});
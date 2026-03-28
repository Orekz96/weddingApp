import { Text, View, StyleSheet } from "react-native";

export default function Header({ title }: any) {
  return (
    <View style={styles.header}>
      <Text style={styles.hash}>#ACozylovestory26</Text>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    marginBottom: 10
  },
  hash: {
    fontSize: 14,
    color: "#0f7a55",
    fontWeight: "600"
  },
  title: {
    fontSize: 28,
    fontWeight: "700",
    color: "#000"
  }
});
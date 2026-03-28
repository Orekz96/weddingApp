import { Pressable, Text, StyleSheet } from "react-native";

export default function PrimaryButton({ title, onPress }: any) {
  return (
    <Pressable style={styles.button} onPress={onPress}>
      <Text style={styles.text}>{title}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#000000",
    padding: 15,
    borderRadius: 15,
    alignItems: "center"
  },
  text: {
    color: "#fff",
    fontWeight: "600"
  }
});
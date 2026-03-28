import { View, StyleSheet, ScrollView } from "react-native";

export default function Container({ children }: any) {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.inner}>{children}</View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#ffffff"
  },
  inner: {
    padding: 20,
    gap: 20
  }
});



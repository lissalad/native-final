import { Text, View, FlatList, SafeAreaView, StyleSheet } from "react-native";
import BandItem from "./BandItem";
import { getStyles } from "../metal_stats";
export default function StylesScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={getStyles()}
        renderItem={({ item }) => <Text style={styles.styleItem}>{item}</Text>}
        keyExtractor={(item) => item}
        style={{ height: "100%" }}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#000",
    flex: 1,
  },

  styleItem: {
    flex: 1,
    flexDirection: "column",
    paddingVertical: 16,
    paddingHorizontal: 12,
    width: "100%",
    position: "relative",
    borderBottomWidth: 1,
    borderBottomColor: "#666",
    color: "#fff",
    fontWeight: "bold",
    fontSize: 18,
  },
});

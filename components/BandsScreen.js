import { Text, View, FlatList, SafeAreaView, StyleSheet } from "react-native";
import BandItem from "./BandItem";
import data from "../metal.json";

export default function BandsScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={data}
        renderItem={({ item }) => <BandItem band={item} />}
        keyExtractor={(band) => band.ID}
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
});

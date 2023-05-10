import { Text, View, SafeAreaView, StyleSheet } from "react-native";
import {
  getUniqueOriginCountries,
  getTotalBands,
  getTotalFans,
  getActive,
  getSplit,
  getStyles,
} from "../metal_stats";

export default function StatsScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>METAL</Text>
      <Text style={styles.label}>Bands: {getTotalBands()}</Text>
      <Text style={styles.label}>Fans: {getTotalFans()}</Text>
      <Text style={styles.label}>Countries: {getUniqueOriginCountries()}</Text>
      <Text style={styles.label}>Active: {getActive()}</Text>
      <Text style={styles.label}>Split: {getSplit()}</Text>
      <Text style={styles.label}>Styles: {getStyles().length}</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    gap: 8,
    paddingBottom: 90,
    backgroundColor: "#000",
  },

  title: {
    color: "#fff",
    fontSize: 30,
    marginBottom: 10,
    fontWeight: "bold",
  },

  label: {
    color: "#fff",
    fontSize: 18,
  },

  values: {
    fontSize: 18,
    fontWeight: "bold",
  },
});

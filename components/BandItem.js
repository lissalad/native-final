import { Text, View, StyleSheet } from "react-native";

export default function BandItem({ band }) {
  const nameStyle = band.split !== "-" ? styles.nameSplit : styles.nameNotSplit;

  function formattedFanCount(fans) {
    return (fans * 1000).toLocaleString();
  }

  return (
    <View style={styles.container}>
      <View style={styles.info}>
        <Text style={nameStyle}>{band.band_name}</Text>
        <Text style={styles.origin}>{band.origin}</Text>
      </View>
      <View style={styles.info}>
        <Text style={styles.details}>{band.formed}</Text>
        <Text style={styles.details}>{formattedFanCount(band.fans)}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    paddingVertical: 8,
    paddingHorizontal: 12,
    width: "100%",
    position: "relative",
    gap: 6,
    borderBottomWidth: 1,
    borderBottomColor: "#666",
  },

  info: {
    flex: 1,
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
  },

  nameSplit: {
    color: "#666",
    textDecorationLine: "line-through",
    fontSize: 18,
  },

  nameNotSplit: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 18,
  },

  origin: {
    color: "#999",
    fontSize: 18,
  },

  details: {
    color: "#fff",
    fontSize: 12,
  },
});

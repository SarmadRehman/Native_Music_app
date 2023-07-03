import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import BottomNav from "../Components/BottomNav";
const Player = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text>All Player</Text>
      <View style={styles.bottomnav}>
        <BottomNav activepage={"player"} navigation={navigation} />
      </View>
    </View>
  );
};

export default Player;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: "100%",
  },
  bottomnav: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    alignItems: "center",
  },
});

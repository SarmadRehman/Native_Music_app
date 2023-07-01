import { StyleSheet, Text, View } from "react-native";
import React from "react";

const Player = (navigation) => {
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
  },
  bottomnav: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    alignItems: "center",
  },
});

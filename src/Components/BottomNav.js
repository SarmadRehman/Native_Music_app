import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { backGroundColor2, primaryColor, themecol } from "../Styles/theme1";
//icons
import { SimpleLineIcons } from "@expo/vector-icons";

import { Entypo } from "@expo/vector-icons";
import { Fontisto } from "@expo/vector-icons";
const BottomNav = ({ activepage, navigation }) => {
  // console.log(activepage);
  return (
    <View style={styles.container}>
      {activepage == "allmusic" ? (
        <Entypo
          name="folder-music"
          size={50}
          color="black"
          style={styles.iconactive}
        />
      ) : (
        <Entypo
          name="folder-music"
          size={50}
          color="black"
          style={styles.icon}
          onPress={() => navigation.navigate("allmusic")}
        />
      )}
      {activepage == "player" ? (
        <Fontisto
          name="headphone"
          size={50}
          color="black"
          style={styles.iconactive}
        />
      ) : (
        <Fontisto
          name="headphone"
          size={50}
          color="black"
          style={styles.icon}
          onPress={() => navigation.navigate("player")}
        />
      )}
      {activepage == "allplaylists" ? (
        <SimpleLineIcons
          name="playlist"
          size={50}
          color="black"
          style={styles.iconactive}
        />
      ) : (
        <SimpleLineIcons
          name="playlist"
          size={50}
          color="black"
          style={styles.icon}
          onPress={() => navigation.navigate("allplaylists")}
        />
      )}
    </View>
  );
};

export default BottomNav;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-end",
    backgroundColor: backGroundColor2,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    elevation: 10,
  },
  icon: {
    color: primaryColor,
    marginHorizontal: 100,
  },
  iconactive: {
    color: primaryColor,
    backgroundColor: themecol,
    borderRadius: 50,
    padding: 10,
    position: "absolute",
    bottom: 0,
    left: "40%",
  },
});

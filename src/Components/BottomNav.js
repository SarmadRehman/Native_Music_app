import { StyleSheet, Text, View } from "react-native";
import React from "react";
import {
  backGroundColor1,
  backGroundColor2,
  primaryColor,
  themecol,
} from "../Styles/theme1";
//icons
import { FontAwesome } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
const BottomNav = ({ activepage }) => {
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
        />
      )}
      <Entypo name="folder-music" size={50} color="black" style={styles.icon} />
      <Entypo name="folder-music" size={50} color="black" style={styles.icon} />
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
  },
  iconactive: {
    color: primaryColor,
    backgroundColor: themecol,
  },
});

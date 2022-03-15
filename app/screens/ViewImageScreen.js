import React from "react";
import { StyleSheet, SafeAreaView, Image, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import colors from "../config/colors";

const ViewImageScreen = () => {
  const image = require("../assets/jacket.jpg");

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.cancelIcon}>
        <MaterialCommunityIcons name="close" size={35} color="white" />
      </View>
      <View style={styles.confirmIcon}>
        <MaterialCommunityIcons
          name="trash-can-outline"
          size={35}
          color="white"
        />
      </View>
      <Image source={image} style={styles.image} resizeMode="contain" />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.black,
  },
  cancelIcon: {
    position: "absolute",
    top: 40,
    left: 30,
  },
  confirmIcon: {
    position: "absolute",
    top: 40,
    right: 30,
  },
  image: {
    width: "100%",
    height: "100%",
  },
});

export default ViewImageScreen;

import React from "react";
import { StyleSheet, SafeAreaView, Image, View } from "react-native";

import colors from "../config/colors";

const ViewImageScreen = () => {
  const image = require("../assets/chair.jpg");

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.cancelIcon} />
      <View style={styles.confirmIcon} />
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
    height: 50,
    width: 50,
    backgroundColor: colors.primary,
    top: 40,
    left: 30,
  },
  confirmIcon: {
    position: "absolute",
    height: 50,
    width: 50,
    backgroundColor: colors.secondary,
    top: 40,
    right: 30,
  },
  image: {
    width: "100%",
    height: "100%",
  },
});

export default ViewImageScreen;

import React from "react";
import { ImageBackground, StyleSheet, Text, Image, View } from "react-native";

import AppButton from "../components/AppButton";
import Card from "../components/Card";

const WelcomeScreen = () => {
  const imageBg = require("../assets/background.jpg");
  const icon = require("../assets/logo-red.png");
  return (
    <ImageBackground
      source={imageBg}
      resizeMode="cover"
      style={styles.imageBg}
      blurRadius={10}
    >
      <View style={styles.iconWrapper}>
        <Image source={icon} style={styles.icon} />
        <Text style={styles.tagline}>Sell what you don't need</Text>
      </View>
      <AppButton title="Login" onPress={() => console.log("tapped")} />
      <AppButton title="register" color="secondary"></AppButton>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  imageBg: {
    flex: 1,
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: 20,
  },
  iconWrapper: {
    position: "absolute",
    top: 48,
    display: "flex",
    alignItems: "center",
  },
  icon: {
    width: 64,
    height: 64,
  },
  tagline: {
    fontSize: 25,
    fontWeight: "600",
    paddingVertical: 20,
  },
});

export default WelcomeScreen;

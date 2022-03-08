import React from "react";
import {
  ImageBackground,
  StyleSheet,
  Text,
  SafeAreaView,
  Image,
  View,
} from "react-native";

import colors from "../config/colors";

const WelcomeScreen = () => {
  const imageBg = require("../assets/background.jpg");
  const icon = require("../assets/logo-red.png");
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        source={imageBg}
        resizeMode="cover"
        style={styles.imageBg}
      >
        <View style={styles.iconWrapper}>
          <Image source={icon} style={styles.icon} />
          <Text style={styles.text}>Sell what you don't need</Text>
        </View>
        <View style={styles.register} />
        <View style={styles.login} />
      </ImageBackground>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imageBg: {
    flex: 1,
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
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
  register: {
    width: "100%",
    height: 64,
    backgroundColor: colors.primary,
  },
  login: {
    width: "100%",
    height: 64,
    backgroundColor: colors.secondary,
  },
});

export default WelcomeScreen;

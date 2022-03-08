import React from "react";
import {
  ImageBackground,
  StyleSheet,
  Text,
  SafeAreaView,
  Image,
  Button,
  View,
} from "react-native";

const WelcomeScreen = () => {
  const imageBg = require("./assets/background.jpg");
  const icon = require("./assets/logo-red.png");
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        source={imageBg}
        resizeMode="cover"
        style={styles.imageBg}
      >
        <Image source={icon} style={styles.icon} />
        <Text style={styles.text}>Sell what you don't need</Text>
        <View style={styles.buttonGroup}>
          <Button title="register" color="#fc5c65"></Button>
          <Button title="login" color="#4ECDC4"></Button>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  imageBg: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  icon: {
    width: 64,
    height: 64,
    justifyContent: "center",
  },
  text: {
    color: "#000",
  },
  buttonGroup: {
    display: "flex",
    // alignSelf: "flex-end",
  },
});

export default WelcomeScreen;

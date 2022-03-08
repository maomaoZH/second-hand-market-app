import React from "react";
import { StyleSheet, SafeAreaView, Image, Button, View } from "react-native";

const ViewImageScreen = () => {
  const image = require("./assets/chair.jpg");

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.buttonGroup}>
        <Button title="cancel" color="#fc5c65"></Button>
        <Button title="back" color="#4ECDC4"></Button>
      </View>
      <Image source={image} style={styles.image} resizeMode="contain" />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    flexDirection: "column",
  },
  buttonGroup: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  image: {
    display: "flex",
    width: "100%",
    height: "100%",
  },
});

export default ViewImageScreen;

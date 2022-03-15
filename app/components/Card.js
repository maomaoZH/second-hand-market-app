import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

import colors from "../config/colors";

function Card({ title, subtitle, image }) {
  return (
    <View style={styles.card}>
      <Image style={styles.image} source={image}></Image>
      <View style={styles.textWrapper}>
        <Text>{title}</Text>
        <Text>{subtitle}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.white,
    borderRadius: 15,
    marginBottom: 20,
    height: 300,
    width: "100%",
    overflow: "hidden",
  },
  image: {
    height: 200,
    width: "100%",
  },
  textWrapper: {
    margin: 12,
  },
});

export default Card;

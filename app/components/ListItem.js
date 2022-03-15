import React from "react";
import { View, StyleSheet, Image, Text } from "react-native";

function ListItem({ title, subTitle, image }) {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={image} />
      <View styles={styles.textContainer}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.subTitle}>{subTitle}</Text>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
  },
  image: {
    width: 54,
    height: 54,
    borderRadius: 50,
    marginRight: 12,
  },
  textContainer: {
    display: "flex",
  },
  title: {
    fontSize: 14,
    fontWeight: "500",
  },
  subTitle: {
    color: "grey",
  },
});
export default ListItem;

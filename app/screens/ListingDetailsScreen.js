import React from "react";
import { View, Image, StyleSheet, Text } from "react-native";

import ListItem from "../components/ListItem";
import colors from "../config/colors";

function ListingDetailsScreen(props) {
  return (
    <View style={styles.wrapper}>
      <Image style={styles.image} source={require("../assets/couch.jpg")} />
      <View style={styles.detailsContainer}>
        <Text style={styles.title}>Chic couch for sale</Text>
        <Text style={styles.price}> €100 </Text>
        <View style={styles.userContainer}>
          <ListItem
            image={require("../assets/mosh.jpg")}
            title="Mosh"
            subTitle="2 lists"
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    display: "flex",
    backgroundColor: colors.white,
    borderRadius: 12,
    overflow: "hidden",
  },
  detailsContainer: {
    padding: 20,
  },
  image: {
    width: "100%",
    height: 300,
  },
  title: {
    fontSize: 18,
    fontWeight: "600",
  },
  price: {
    color: colors.secondary,
    fontWeight: "bold",
    fontSize: 14,
    paddingVertical: 6,
  },
  userContainer: {
    marginVertical: 14,
  },
});

export default ListingDetailsScreen;

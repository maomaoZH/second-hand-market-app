import React, { useState, useEffect } from "react";
import { View, StyleSheet, Text, Image } from "react-native";

import { color } from "@telekom/scale-design-tokens/dist/design-tokens-telekom.js";

import listApi from "../api/listings";

function WeatherWidget(props) {
  const [lists, setLists] = useState([]);

  useEffect(() => {
    loadLists();
  }, []);

  const loadLists = async () => {
    const res = await listApi.getList();
    setLists(res.data["articles"]);
  };

  return (
    !!lists.length &&
    lists.map((list, index) => (
      <View style={styles.container} key={index}>
        <View style={styles.textWrapper}>
          <Text style={styles.title}>{list["source"]["name"]}</Text>
          <Text style={styles.description}>{list["title"]}</Text>
        </View>
        <Image
          style={styles.image}
          resizeMode="cover"
          source={{
            uri: list["urlToImage"],
          }}
        />
      </View>
    ))
  );
}

export default WeatherWidget;

const styles = StyleSheet.create({
  container: {
    height: 100,
    width: "100%",
    flexDirection: "row",
    marginTop: 10,
    backgroundColor: "transparent",
    overflow: "hidden",
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    height: 80,
    width: 80,
    borderRadius: 6,
    marginLeft: 6,
  },
  textWrapper: {
    width: "70%",
    height: "100%",
    display: "flex",
    overflow: "hidden",
  },
  title: {
    fontSize: 12,
    fontWeight: "bold",
    overflow: "hidden",
    color: "grey",
    marginBottom: 6,
  },
  subtitle: {
    fontSize: 12,
    textDecorationStyle: "dotted",
    overflow: "hidden",
    fontWeight: "bold",
  },
});

import React, { useState, useEffect } from "react";
import { View, StyleSheet, Text, Image } from "react-native";

import listApi from "../api/listings";
import colors from "../config/colors";

function WeatherWidget(props) {
  const [lists, setLists] = useState([]);

  useEffect(() => {
    loadLists();
  }, []);

  const loadLists = async () => {
    const res = await listApi.getList();
    setLists(res.data["articles"]);
  };

  console.log(lists.length);
  return (
    !!lists.length &&
    lists.map((list) => (
      <View style={styles.container}>
        <Image
          style={styles.image}
          resizeMode="cover"
          source={{
            uri: list["urlToImage"],
          }}
        />
        <View style={styles.textWrapper}>
          <Text style={styles.title}>News</Text>
          <Text style={styles.description}>{list["title"]}</Text>
        </View>
      </View>
    ))
  );
}

export default WeatherWidget;

const styles = StyleSheet.create({
  container: {
    height: 192,
    width: "100%",
    flexDirection: "row",
    borderRadius: 12,
    marginTop: 10,
    padding: 6,
    borderRadius: 12,
    backgroundColor: colors.white,
    overflow: "hidden",
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    height: "100%",
    width: "50%",
  },
  textWrapper: {
    width: "50%",
    height: "100%",
    display: "flex",
    overflow: "hidden",
    paddingHorizontal: 12,
  },
  title: {
    fontSize: 12,
    fontWeight: "bold",
    overflow: "hidden",
    color: "grey",
    marginBottom: 12,
  },
  subtitle: {
    fontSize: 12,
    marginTop: 12,
    textDecorationStyle: "dotted",
    overflow: "hidden",
    fontWeight: "bold",
  },
});

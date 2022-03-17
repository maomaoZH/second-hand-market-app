import React, { useState, useEffect } from "react";
import {
  View,
  StyleSheet,
  Text,
  Image,
  TouchableOpacity,
  Linking,
} from "react-native";

import listApi from "../api/listings";
import color from "../config/colors";

function WeatherWidget(props) {
  const [lists, setLists] = useState([]);

  useEffect(() => {
    loadLists();
  }, []);

  const loadLists = async () => {
    const res = await listApi.getList();
    setLists(res.data["articles"]);
  };

  const handlePress = (url) => {
    console.log(url);
    Linking.openURL(url);
  };
  return (
    <View style={styles.widgetContainer}>
      <Text style={styles.text}>Headlines</Text>
      {!!lists.length &&
        lists.map((list, index) => (
          <TouchableOpacity
            style={styles.container}
            key={index}
            onPress={() => handlePress(list["url"])}
          >
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
          </TouchableOpacity>
        ))}
    </View>
  );
}

export default WeatherWidget;

const styles = StyleSheet.create({
  container: {
    height: 100,
    width: "100%",
    flexDirection: "row",
    marginTop: 6,
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
  subtitle: {
    fontSize: 12,
    textDecorationStyle: "dotted",
    overflow: "hidden",
    fontWeight: "bold",
  },

  text: {
    fontSize: 14,
    fontWeight: "700",
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
    marginBottom: 3,
    textTransform: "uppercase",
  },
  widgetContainer: {
    height: "auto",
    width: "90%",
    display: "flex",
    backgroundColor: color.white,
    borderRadius: 12,
    padding: 10,
  },
});

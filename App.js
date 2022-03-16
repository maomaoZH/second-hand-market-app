import { ImageBackground, View, StyleSheet } from "react-native";
import WeatherWidget from "./app/screens/WeatherWidget";

export default function App() {
  return (
    <ImageBackground
      source={require("./app/assets/background.jpg")}
      resizeMode="cover"
      style={styles.imageBg}
      blurRadius={10}
    >
      <View style={styles.container}>
        <WeatherWidget />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  imageBg: {
    flex: 1,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "100%",
    width: "100%",
  },
  container: {
    height: "70%",
    width: "80%",
    display: "flex",
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 10,
  },
});

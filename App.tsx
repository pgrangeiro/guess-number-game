import { LinearGradient } from "expo-linear-gradient";
import { useState } from "react";
import { ImageBackground, StatusBar, StyleSheet, View } from "react-native";
import GameScreen from "./screens/GameScreen";
import StartGameScreen from "./screens/StartGameScreen";
import { SafeAreaView } from "react-native-safe-area-context";
import { Color } from "./utils/colors";

interface UserGame {
  hasStarted: boolean;
  inputNumber?: number;
}

export default function App() {
  const [game, setGame] = useState<UserGame>({ hasStarted: false });
  let currentScreen = (
    <SafeAreaView style={styles.screen}>
      <StartGameScreen
        onStartGameHandler={onStartGameHandler}
      ></StartGameScreen>
    </SafeAreaView>
  );

  if (game.hasStarted) {
    currentScreen = (
      <SafeAreaView style={styles.screen}>
        <GameScreen></GameScreen>
      </SafeAreaView>
    );
  }

  function onStartGameHandler(inputNumber: number) {
    setGame({ hasStarted: true, inputNumber });
  }

  return (
    <LinearGradient
      colors={[Color.DARK_PLUM, Color.YELLOW]}
      style={styles.backgroundScreen}
    >
      <ImageBackground
        source={require("./assets/images/background.png")}
        resizeMode="cover"
        style={styles.backgroundScreen}
        imageStyle={styles.backgroundImage}
      >
        {currentScreen}
      </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  backgroundScreen: {
    flex: 1,
  },
  screen: {
    flex: 1,
    marginTop: 52,
  },
  backgroundImage: {
    opacity: 0.15,
  },
});

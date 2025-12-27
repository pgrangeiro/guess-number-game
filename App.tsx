import { LinearGradient } from "expo-linear-gradient";
import { useState } from "react";
import { ImageBackground, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import GameOverScreen from "./screens/GameOverScreen";
import GameScreen from "./screens/GameScreen";
import StartGameScreen from "./screens/StartGameScreen";
import { Color } from "./utils/colors";

export interface GameRound {
  index: number;
  guessedNumber: number;
}

interface UserGame {
  hasStarted: boolean;
  isOver: boolean;
  inputNumber?: number;
  rounds: GameRound[];
}

export default function App() {
  const [game, setGame] = useState<UserGame>({
    hasStarted: false,
    isOver: false,
    rounds: [],
  });

  let currentScreen = (
    <SafeAreaView style={styles.screen}>
      <StartGameScreen onStartGame={onStartGameHandler}></StartGameScreen>
    </SafeAreaView>
  );

  if (game.hasStarted) {
    currentScreen = (
      <SafeAreaView style={styles.screen}>
        <GameScreen
          chosenNumber={game.inputNumber!}
          onGameOver={onGameOverHandler}
          onNextRound={onNextRoundHandler}
        ></GameScreen>
      </SafeAreaView>
    );
  }

  if (game.isOver) {
    currentScreen = (
      <SafeAreaView style={styles.screen}>
        <GameOverScreen
          inputNumber={game.inputNumber!}
          rounds={game.rounds}
          onRestart={onRestartHandler}
        ></GameOverScreen>
      </SafeAreaView>
    );
  }

  function onStartGameHandler(inputNumber: number) {
    setGame({ ...game, hasStarted: true, isOver: false, inputNumber });
  }

  function onGameOverHandler() {
    setGame({ ...game, hasStarted: true, isOver: true });
  }

  function onRestartHandler() {
    setGame({ hasStarted: false, isOver: false, rounds: [] });
  }

  function onNextRoundHandler(guessedNumber: number) {
    const { rounds } = { ...game };
    const updatedRound = [
      ...rounds,
      { index: rounds.length + 1, guessedNumber },
    ];
    setGame({ ...game, rounds: updatedRound });
  }

  return (
    <LinearGradient
      colors={[Color.PRIMARY_500, Color.SECONDARY_500]}
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

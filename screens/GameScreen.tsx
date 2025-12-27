import { Alert, StyleSheet, Text, View } from "react-native";
import Title from "../components/ui/Title";
import { useState } from "react";
import { generateRandomNumber } from "../utils/generate-random-number";
import GuessContainer from "../components/game/GuessContainer";
import PrimaryButton from "../components/ui/PrimaryButton";

enum MinMaxNumber {
  MIN = 1,
  MAX = 100,
}

enum Direction {
  LOWER = "-",
  HIGHER = "+",
}

const directionMap = {
  "-": Direction.LOWER,
  "+": Direction.HIGHER,
};

type InputDirection = "+" | "-";

interface GameScreenInput {
  chosenNumber: number;
}

let [minBoundary, maxBoundary] = [MinMaxNumber.MIN, MinMaxNumber.MAX];

function GameScreen({ chosenNumber }: GameScreenInput) {
  const initialGuess = generateRandomNumber(
    minBoundary,
    maxBoundary,
    chosenNumber
  );
  const [guessedNumber, setGuessedNumber] = useState(initialGuess);

  function isFairGame(selectedDirection: InputDirection): boolean {
    const direction = directionMap[selectedDirection];
    return (
      (chosenNumber > guessedNumber && direction === Direction.HIGHER) ||
      (chosenNumber < guessedNumber && direction === Direction.LOWER)
    );
  }

  function isGameOver(guessedNumber: number): boolean {
    return guessedNumber === chosenNumber;
  }

  function onNextGuessHandler(selectedDirection: InputDirection) {
    const direction = directionMap[selectedDirection];

    if (!isFairGame(selectedDirection)) {
      Alert.alert("It isn't a Fair Game!", "Do not cheat the computer >:(");
      return;
    }

    direction === Direction.LOWER
      ? (maxBoundary = guessedNumber + 1)
      : (minBoundary = guessedNumber);

    const nextGuess = generateRandomNumber(
      minBoundary,
      maxBoundary,
      guessedNumber
    );
    setGuessedNumber(nextGuess);

    if (isGameOver(nextGuess)) {
      Alert.alert("Game Over!", "I won! You Lose!");
    }
  }

  return (
    <View style={styles.screen}>
      <Title>Oponnent's Guess</Title>
      <GuessContainer>{guessedNumber}</GuessContainer>
      <View>
        <Text>Higher or Lower?</Text>
        <View>
          <PrimaryButton
            onPressHandler={() => onNextGuessHandler(Direction.LOWER)}
          >
            -
          </PrimaryButton>
          <PrimaryButton
            onPressHandler={() => onNextGuessHandler(Direction.HIGHER)}
          >
            +
          </PrimaryButton>
        </View>
      </View>
      <View></View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 8,
  },
});

export default GameScreen;

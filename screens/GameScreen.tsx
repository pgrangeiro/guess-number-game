import { Alert, StyleSheet, Text, View } from "react-native";
import Title from "../components/ui/Title";
import { useEffect, useState } from "react";
import { generateRandomNumber } from "../utils/generate-random-number";
import GuessContainer from "../components/game/GuessContainer";
import PrimaryButton from "../components/ui/PrimaryButton";
import Card from "../components/ui/Card";
import InstructionText from "../components/ui/InstructionText";

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
  onGameOver: (chosenNumber: number) => void;
}

let [minBoundary, maxBoundary] = [MinMaxNumber.MIN, MinMaxNumber.MAX];

function GameScreen({ chosenNumber, onGameOver }: GameScreenInput) {
  const initialGuess = generateRandomNumber(
    minBoundary,
    maxBoundary,
    chosenNumber
  );
  const [guessedNumber, setGuessedNumber] = useState(initialGuess);

  useEffect(() => {
    if (isGameOver()) {
      Alert.alert("Nice Try Diddy!", "I won! You Lose!", [
        {
          text: "OK",
          style: "destructive",
          onPress: () => onGameOver(guessedNumber),
        },
      ]);
    }
  }, [guessedNumber, chosenNumber, onGameOver]);

  function isFairGame(selectedDirection: InputDirection): boolean {
    const direction = directionMap[selectedDirection];
    return (
      (chosenNumber > guessedNumber && direction === Direction.HIGHER) ||
      (chosenNumber < guessedNumber && direction === Direction.LOWER)
    );
  }

  function isGameOver(): boolean {
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
  }

  return (
    <View style={styles.screen}>
      <Title>Oponnent's Guess</Title>
      <GuessContainer>{guessedNumber}</GuessContainer>
      <Card>
        <InstructionText>Higher or Lower?</InstructionText>
        <View style={styles.buttonContainer}>
          <PrimaryButton onPress={() => onNextGuessHandler(Direction.LOWER)}>
            -
          </PrimaryButton>
          <PrimaryButton onPress={() => onNextGuessHandler(Direction.HIGHER)}>
            +
          </PrimaryButton>
        </View>
      </Card>
      <View></View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 8,
  },
  buttonContainer: {
    flex: 1,
    flexDirection: "row",
  },
});

export default GameScreen;

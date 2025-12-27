import { StyleSheet, Text, View } from "react-native";
import Title from "../components/ui/Title";
import { useState } from "react";
import { generateRandumNumber } from "../utils/generateRandomNumber";
import GuessContainer from "../components/game/GuessContainer";

function GameScreen() {
  const initialGuess = generateRandumNumber(1, 100);
  const [oponnentNumber, setOponnentName] = useState(initialGuess);

  return (
    <View style={styles.screen}>
      <Title>Oponnent's Guess</Title>
      <GuessContainer>{oponnentNumber}</GuessContainer>
      <View></View>
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

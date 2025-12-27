import { useState } from "react";
import { Alert, StyleSheet, Text, TextInput, View } from "react-native";
import { Color } from "../utils/colors";
import PrimaryButton from "../components/ui/PrimaryButton";
import Title from "../components/ui/Title";
import Card from "../components/ui/Card";
import InstructionText from "../components/ui/InstructionText";

interface StartGameScreenInput {
  onStartGame: (inputNumber: number) => void;
}

function StartGameScreen({ onStartGame }: StartGameScreenInput) {
  const [inputNumber, setInputNumber] = useState<string>("");

  function resetInputHandler() {
    setInputNumber("");
  }

  function startGameHandler() {
    const chosenNumber = parseInt(inputNumber);

    if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
      Alert.alert(
        "Invalid Number",
        "The number must be a number between 1 and 99.",
        [{ text: "OK", style: "destructive", onPress: resetInputHandler }]
      );
      return;
    }

    onStartGame(chosenNumber);
  }

  return (
    <View style={styles.screen}>
      <Title>Guess a Number</Title>
      <Card>
        <InstructionText>Enter a Number</InstructionText>
        <TextInput
          style={styles.textInput}
          maxLength={2}
          keyboardType="number-pad"
          value={inputNumber}
          onChangeText={setInputNumber}
        ></TextInput>
        <View style={styles.buttonContainer}>
          <PrimaryButton style={styles.button} onPress={resetInputHandler}>
            Reset
          </PrimaryButton>
          <PrimaryButton style={styles.button} onPress={startGameHandler}>
            Start
          </PrimaryButton>
        </View>
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 8,
  },
  buttonContainer: {
    flexDirection: "row",
  },
  button: {
    flex: 1,
  },
  textInput: {
    height: 64,
    width: 50,
    marginVertical: 8,
    fontSize: 32,
    fontWeight: "bold",
    color: Color.SECONDARY_500,
    textAlign: "center",
    borderBottomColor: Color.SECONDARY_500,
    borderBottomWidth: 2,
  },
});

export default StartGameScreen;

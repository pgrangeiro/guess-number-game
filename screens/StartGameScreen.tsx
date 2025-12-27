import { useState } from "react";
import { Alert, StyleSheet, TextInput, View } from "react-native";
import PrimaryButton from "../components/PrimaryButton";
import { Color } from "../utils/colors";

interface StartGameScreenInput {
  onStartGameHandler: (inputNumber: number) => void;
}

function StartGameScreen({ onStartGameHandler }: StartGameScreenInput) {
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

    onStartGameHandler(chosenNumber);
  }

  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.textInput}
        maxLength={2}
        keyboardType="number-pad"
        value={inputNumber}
        onChangeText={setInputNumber}
      ></TextInput>
      <View style={styles.buttonContainer}>
        <View style={styles.singleButtonContainer}>
          <PrimaryButton onPressHandler={resetInputHandler}>
            Reset
          </PrimaryButton>
        </View>
        <View style={styles.singleButtonContainer}>
          <PrimaryButton onPressHandler={startGameHandler}>Start</PrimaryButton>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 24,
    padding: 16,
    backgroundColor: Color.DARK_PLUM,
    borderRadius: 8,
    elevation: 4,
    shadowColor: Color.BLACK,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowRadius: 6,
    shadowOpacity: 0.25,
  },
  buttonContainer: {
    flexDirection: "row",
  },
  singleButtonContainer: {
    flex: 1,
  },
  textInput: {
    height: 64,
    width: 50,
    marginVertical: 8,
    fontSize: 32,
    fontWeight: "bold",
    color: Color.YELLOW,
    textAlign: "center",
    borderBottomColor: Color.YELLOW,
    borderBottomWidth: 2,
  },
});

export default StartGameScreen;

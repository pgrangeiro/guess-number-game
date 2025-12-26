import { Alert, StyleSheet, TextInput, View } from "react-native";
import PrimaryButton from "../components/PrimaryButton";
import { useState } from "react";

function StartGameScreen() {
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
    }
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
    marginVertical: 100,
    padding: 16,
    backgroundColor: "#72063C",
    borderRadius: 8,
    elevation: 4,
    shadowColor: "#000000",
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
    color: "#ddb52f",
    textAlign: "center",
    borderBottomColor: "#ddb52f",
    borderBottomWidth: 2,
  },
});

export default StartGameScreen;

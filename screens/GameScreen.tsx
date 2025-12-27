import { StyleSheet, Text, View } from "react-native";
import Title from "../components/Title";

function GameScreen() {
  return (
    <View style={styles.screen}>
      <Title>Oponnent's Guess</Title>
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

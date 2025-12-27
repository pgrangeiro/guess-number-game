import { StyleSheet, View, Image, Text } from "react-native";
import Title from "../components/ui/Title";
import Card from "../components/ui/Card";
import InstructionText from "../components/ui/InstructionText";
import { Color } from "../utils/colors";
import PrimaryButton from "../components/ui/PrimaryButton";

interface GameOverScreenInput {
  inputNumber: number;
  roundsNumber: number;
  onRestart: () => void;
}

function GameOverScreen({
  inputNumber,
  roundsNumber,
  onRestart,
}: GameOverScreenInput) {
  return (
    <View style={styles.screen}>
      <Title>Game Over!</Title>
      <View style={styles.headerContainer}>
        <View style={styles.badgeContainer}>
          <Image
            style={styles.badgeImage}
            source={require("./../assets/images/success.png")}
          ></Image>
        </View>
        <Text style={styles.gameSummaryText}>
          Number<Text style={styles.gameSummaryHighlight}> {inputNumber} </Text>
          guessed after
          <Text style={styles.gameSummaryHighlight}> {roundsNumber} </Text>
          rounds
        </Text>
      </View>
      <Card style={styles.bodyContainer}>
        <InstructionText>Match History</InstructionText>
        <PrimaryButton onPress={onRestart}>Restart</PrimaryButton>
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 8,
  },
  headerContainer: {
    alignItems: "center",
  },
  badgeContainer: {
    width: 200,
    height: 200,
    margin: 36,
    borderRadius: 100,
    borderWidth: 3,
    borderColor: Color.PRIMARY_500,
    overflow: "hidden",
  },
  badgeImage: {
    width: "100%",
    height: "100%",
  },
  bodyContainer: {
    flex: 1,
  },
  gameSummaryText: {
    fontWeight: "bold",
    fontSize: 16,
    color: Color.PRIMARY_700,
  },
  gameSummaryHighlight: {
    color: Color.SECONDARY_500,
  },
});

export default GameOverScreen;

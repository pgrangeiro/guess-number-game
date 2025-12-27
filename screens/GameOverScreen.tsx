import { StyleSheet, View, Image, Text, FlatList } from "react-native";
import Title from "../components/ui/Title";
import Card from "../components/ui/Card";
import InstructionText from "../components/ui/InstructionText";
import { Color } from "../utils/colors";
import PrimaryButton from "../components/ui/PrimaryButton";
import { GameRound } from "../App";

interface GameOverScreenInput {
  inputNumber: number;
  rounds: GameRound[];
  onRestart: () => void;
}

function GameOverScreen({
  inputNumber,
  rounds,
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
          <Text style={styles.gameSummaryHighlight}> {rounds.length} </Text>
          rounds
        </Text>
      </View>
      <Card style={styles.bodyContainer}>
        <InstructionText>Match History</InstructionText>
        <View style={styles.logContainer}>
          <FlatList
            data={rounds}
            renderItem={(data) => (
              <Text>
                <Text style={[styles.gameSummaryHighlight, styles.gameLogText]}>
                  #{data.item.index}: Phone guessed {data.item.guessedNumber}
                </Text>
              </Text>
            )}
          ></FlatList>
          <PrimaryButton onPress={onRestart}>Restart</PrimaryButton>
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
  logContainer: {
    flex: 1,
  },
  gameLogText: {
    fontSize: 14,
    marginBottom: 8,
  },
});

export default GameOverScreen;

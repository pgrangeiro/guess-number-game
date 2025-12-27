import { PropsWithChildren } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Color } from "../../utils/colors";

function GuessContainer({ children }: PropsWithChildren) {
  return (
    <View style={styles.container}>
      <Text style={styles.numberText}>{children}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 24,
    margin: 24,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 4,
    borderColor: Color.WHITE,
    borderRadius: 8,
  },
  numberText: {
    color: Color.SECONDARY_500,
    fontSize: 36,
  },
});

export default GuessContainer;

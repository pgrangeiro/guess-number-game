import { Text, StyleSheet } from "react-native";
import { Color } from "../../utils/colors";
import { PropsWithChildren } from "react";

function InstructionText({ children }: PropsWithChildren) {
  return <Text style={styles.instructionText}>{children}</Text>;
}

const styles = StyleSheet.create({
  instructionText: {
    color: Color.SECONDARY_500,
    fontSize: 16,
    marginBottom: 8,
  },
});
export default InstructionText;

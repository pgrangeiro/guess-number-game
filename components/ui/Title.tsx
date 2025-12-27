import { PropsWithChildren } from "react";
import { Text, StyleSheet } from "react-native";
import { Color } from "../../utils/colors";

function Title({ children }: PropsWithChildren) {
  return <Text style={styles.title}>{children}</Text>;
}
const styles = StyleSheet.create({
  title: {
    padding: 8,
    fontSize: 24,
    fontWeight: "bold",
    color: Color.SECONDARY_500,
    textAlign: "center",
    borderWidth: 2,
    borderColor: Color.SECONDARY_500,
  },
});

export default Title;

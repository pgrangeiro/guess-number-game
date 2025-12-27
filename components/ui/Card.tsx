import { PropsWithChildren } from "react";
import { View, StyleSheet } from "react-native";
import { Color } from "../../utils/colors";

function Card({ children }: PropsWithChildren) {
  return <View style={styles.cardContainer}>{children}</View>;
}

const styles = StyleSheet.create({
  cardContainer: {
    justifyContent: "center",
    alignItems: "center",
    margin: 24,
    padding: 16,
    backgroundColor: Color.PRIMARY_500,
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
});

export default Card;

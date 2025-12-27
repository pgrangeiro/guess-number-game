import { Pressable, StyleSheet, Text, View } from "react-native";
import { PropsWithChildren } from "react";
import { Color } from "../utils/colors";

interface PrimartButtonInput extends PropsWithChildren {
  onPressHandler: () => void;
}

function PrimaryButton({ children, onPressHandler }: PrimartButtonInput) {
  return (
    <View style={styles.outerContainer}>
      <Pressable
        style={({ pressed }) =>
          pressed
            ? [styles.innerContainer, styles.pressed]
            : styles.innerContainer
        }
        onPress={onPressHandler}
      >
        <Text style={styles.buttonText}>{children}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  outerContainer: {
    margin: 4,
  },
  innerContainer: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 28,
    backgroundColor: Color.PRIMARY_100,
    elevation: 2,
    shadowColor: Color.BLACK,
    shadowOpacity: 0.15,
    shadowOffset: {
      height: 1,
      width: 0,
    },
  },
  buttonText: {
    color: Color.WHITE,
    textAlign: "center",
  },
  pressed: {
    opacity: 0.75,
  },
});

export default PrimaryButton;

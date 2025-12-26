import { Pressable, StyleSheet, Text, View } from "react-native";
import { PropsWithChildren } from "react";

function PrimaryButton({ children }: PropsWithChildren) {
  return (
    <View style={styles.outerContainer}>
      <Pressable
        style={({ pressed }) =>
          pressed
            ? [styles.innerContainer, styles.pressed]
            : styles.innerContainer
        }
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
    backgroundColor: "#8c2357ff",
    elevation: 2,
    shadowColor: "#000000",
    shadowOpacity: 0.15,
    shadowOffset: {
      height: 1,
      width: 0,
    },
  },
  buttonText: {
    color: "#FFFFFF",
    textAlign: "center",
  },
  pressed: {
    opacity: 0.75,
  },
});

export default PrimaryButton;

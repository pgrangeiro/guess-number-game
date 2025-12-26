import { Text, View } from "react-native";
import { PropsWithChildren } from "react";

function PrimaryButton({ children }: PropsWithChildren) {
  return (
    <View>
      <Text>{children}</Text>
    </View>
  );
}

export default PrimaryButton;

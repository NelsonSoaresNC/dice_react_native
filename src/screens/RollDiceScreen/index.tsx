import { View, Text } from "react-native";
import { styles } from "./styles";

interface RollDiceScreenProps {
  dice: number;
  sides: number;
}

export default function RollDiceScreen({ dice, sides }: RollDiceScreenProps) {
  return (
    <View style={styles.container}>
      <Text>Dice Screen Working</Text>
      <Text>Dices:{dice} Sides: {sides}</Text>
    </View>
  );
}
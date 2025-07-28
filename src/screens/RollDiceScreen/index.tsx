import { View, Text, StyleSheet } from "react-native";
import { useEffect, useState } from "react";
import { styles } from "./styles";
import Dice from "../../components/Dice";

interface RollDiceScreenProps {
  dice: number;
  sides: number;
}

function generateRandomBetween(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// fazer o componente dice e passar resultado por parametro para ser renderizado
export default function RollDiceScreen({ dice, sides }: RollDiceScreenProps) {
  const [results, setResults] = useState<number[]>([]);

  useEffect(() => {
    const rolls = Array.from({ length: dice }, () =>
      generateRandomBetween(1, sides)
    );
    setResults(rolls);
  }, [dice, sides]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Results:</Text>
      <View style={styles.diceContainer}>
        {results.map((value, index) => (
          <Dice key={index} value={value}/>
        ))}
      </View>
    </View>
  );
}

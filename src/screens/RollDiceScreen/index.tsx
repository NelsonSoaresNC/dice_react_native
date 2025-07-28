import { View, Text, StyleSheet } from "react-native";
import { useEffect, useState } from "react";
import { styles } from "./styles";
import Dice from "../../components/Dice";
import Button from "../../components/Button";

interface RollDiceScreenProps {
  dice: number;
  sides: number;
}

function generateRandomBetween(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export default function RollDiceScreen({ dice, sides }: RollDiceScreenProps) {

  const [results, setResults] = useState<number[]>([]);
  const [totalResult, setTotalResult] = useState<number>(0);

  useEffect(() => {
    const rolls = Array.from({ length: dice }, () =>
      generateRandomBetween(1, sides)
    );
    const sum = rolls.reduce((acc, val) => acc + val, 0);
    setTotalResult(sum); 
    setResults(rolls);

  }, [dice, sides]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Results:</Text>
      <View style={styles.diceContainer}>
        {results.map((value, index) => (
          <Dice key={index} value={value}/>
        ))}
        <View style={styles.total}>
          <Text style={styles.totalText}>Total: {totalResult}</Text>
        </View>
        <Button title="Play again"/>
      </View>
    </View>
  );
}

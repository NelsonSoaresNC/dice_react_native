import { View, Text, StyleSheet, Pressable } from "react-native";
import { useEffect, useState } from "react";
import { styles } from "./styles";
import Dice from "../../components/Dice";
import Button from "../../components/Button";
import MyModal from "../../components/Modal";

interface RollDiceScreenProps {
  dice: number;
  sides: number;
  onBack: () => void;
}

function generateRandomBetween(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export default function RollDiceScreen({ dice, sides, onBack }: RollDiceScreenProps) {

  const [results, setResults] = useState<number[]>([]);
  const [totalResult, setTotalResult] = useState<number>(0);
  const [modalIsVisible, setModalIsvisible] = useState<boolean>(false)

  function rollDice() {
    const rolls = Array.from({ length: dice }, () =>
      generateRandomBetween(1, sides)
    );
    const sum = rolls.reduce((acc, val) => acc + val, 0);
    setTotalResult(sum);
    setResults(rolls);
  }

  useEffect(() => {
    rollDice();
  }, [dice, sides]);

  function openModal() {
    setModalIsvisible(true);
  }


  return (
    <View style={styles.container}>
      <Pressable onPress={onBack} style={styles.backButton}>
        <Text style={styles.backText}>← Voltar</Text>
      </Pressable>
      <Text style={styles.title}>Results:</Text>
      <View style={styles.diceContainer}>
        {results.map((value, index) => (
          <Dice key={index} value={value} />
        ))}
        <View style={styles.total}>
          <Text style={styles.totalText}>Total: {totalResult}</Text>
        </View>
        <Button title="Play again" onPress={openModal} />
      </View>
      <MyModal
        visible={modalIsVisible}
        onCancel={() => setModalIsvisible(false)}
        onNewValues={onBack}
        onSameValues={() => {
          rollDice();
          setModalIsvisible(false);
        }}
      />
    </View>
  );
}

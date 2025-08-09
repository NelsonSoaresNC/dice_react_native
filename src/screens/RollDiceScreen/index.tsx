import { View, Text, useWindowDimensions } from "react-native";
import { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import type { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { NavigationTypes } from "../../types";
import { styles } from "./styles";

import Dice from "../../components/Dice";
import Button from "../../components/Button";
import MyModal from "../../components/Modal";
import ScreenWrapper from "../ScreenWrapper";
import { useAppSelector} from "../../hooks/hooks";
type NavProps = NativeStackNavigationProp<NavigationTypes, "RollDice">;

function generateRandomBetween(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export default function RollDiceScreen() {
  const navigation = useNavigation<NavProps>();


  const dice = useAppSelector((state) => state.dice.dice);
  const sides = useAppSelector((state) => state.dice.sides);

  const [results, setResults] = useState<number[]>([]);
  const [totalResult, setTotalResult] = useState<number>(0);
  const [modalIsVisible, setModalIsvisible] = useState<boolean>(false);

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

  const { width } = useWindowDimensions();
  const gap = width < 500 ? 0 : 10;

  return (
    <ScreenWrapper>
      <View style={styles.container}>
        <Text style={styles.title}>Results:</Text>

        <View style={[styles.diceContainer, { gap }]}>
          {results.map((value, index) => (
            <Dice key={index} value={value} />
          ))}
          <View style={styles.total}>
            <Text style={styles.totalText}>Total: {totalResult}</Text>
          </View>
          <Button title="Play again" onPress={() => setModalIsvisible(true)} />
        </View>

        <MyModal
          visible={modalIsVisible}
          onCancel={() => setModalIsvisible(false)}
          onNewValues={() => navigation.goBack()}
          onSameValues={() => {
            rollDice();
            setModalIsvisible(false);
          }}
        />
      </View>
    </ScreenWrapper>
  );
}

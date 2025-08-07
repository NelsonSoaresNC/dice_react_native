import { View, Text, Pressable } from "react-native";
import { useEffect, useState } from "react";
import { useRoute, useNavigation, RouteProp } from "@react-navigation/native";
import type { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../types";
import { styles } from "./styles";

import Dice from "../../components/Dice";
import Button from "../../components/Button";
import MyModal from "../../components/Modal";
import ScreenWrapper from "../ScreenWrapper";

type RouteProps = RouteProp<RootStackParamList, "RollDice">;
type NavProps = NativeStackNavigationProp<RootStackParamList, "RollDice">;

function generateRandomBetween(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export default function RollDiceScreen() {
  const navigation = useNavigation<NavProps>();
  const route = useRoute<RouteProps>();
  const { dice, sides } = route.params;

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

  return (

    <ScreenWrapper>
      <View style={styles.container}>
        <Text style={styles.title}>Results:</Text>

        <View style={styles.diceContainer}>
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

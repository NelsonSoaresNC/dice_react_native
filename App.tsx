import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import InputDice from './src/components/inputsDice';
import { useState } from 'react';
import DiceDisplay from './src/components/diceDisplay';

export default function App() {

  const [dice, setDice] = useState<number>(1);
  const [sides, setSides] = useState<number>(6);
  const [rollTrigger, setRollTrigger] = useState<boolean>(false);

  const handleRoll = () => {
    setRollTrigger(prev => !prev);
  };

  return (
    <>
      <StatusBar style='light' />
      <View style={styles.container}>
        <Text style={styles.title}>Roll the dice</Text>
        <InputDice dice={dice}
          setDice={setDice}
          sides={sides}
          setSides={setSides}
          onRoll={handleRoll} />
      </View>
      <DiceDisplay dice={dice} sides={sides} rollTrigger={rollTrigger} />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    flexDirection: "column",
    padding: 60,
    backgroundColor: "darkgreen"
  },
  title: {
    color: "#ca0000ff",
    fontWeight: "bold",
    fontSize: 18
  }
});

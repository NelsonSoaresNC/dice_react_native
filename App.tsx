import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import InputDice from './src/components/inputsDice';
import { useState } from 'react';
import DiceDisplay from './src/components/diceDisplay';
import { LinearGradient } from 'expo-linear-gradient';

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
      <LinearGradient colors={["#004208ff", "#641818ff"]}style={styles.container}>
          <Text style={styles.title}>Roll the dice</Text>
          <InputDice dice={dice}
            setDice={setDice}
            sides={sides}
            setSides={setSides}
            onRoll={handleRoll} />
        
        <DiceDisplay dice={dice} sides={sides} rollTrigger={rollTrigger} />
      </LinearGradient>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    flexDirection: "column",
    padding: 60,
  },
  title: {
    color: "#ca0000ff",
    fontWeight: "bold",
    fontSize: 18
  }
});

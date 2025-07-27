import { StatusBar } from 'expo-status-bar';
import { ImageBackground, StyleSheet, Text, View } from 'react-native';
import InputDice from './src/components/InputsDice';
import { useState } from 'react';
import DiceDisplay from './src/screens/RollDiceScreen';
import { LinearGradient } from 'expo-linear-gradient';
import RollDiceScreen from './src/screens/RollDiceScreen';

export default function App() {

  const [dice, setDice] = useState<number>(1);
  const [sides, setSides] = useState<number>(6);
  const [showRollScreen, setShowRollScreen] = useState<boolean>(false);

  const handleRoll = () => {
    setShowRollScreen(true);
  };

  let screen = <InputDice dice={dice}
    setDice={setDice}
    sides={sides}
    setSides={setSides}
    onRoll={handleRoll}
  />

  if (showRollScreen) {
    screen = <RollDiceScreen dice={dice} sides={sides} />
  }

  return (
    <>
      <StatusBar style='light' />
      <LinearGradient colors={["#004208ff", "#641818ff"]} style={styles.container}>
        <ImageBackground source={require("./assets/images/dice.jpg")}
          resizeMode='cover'
          style={styles.container}
          imageStyle={styles.backgroundImage}
        >
          <View style={!showRollScreen ? styles.brownCard : undefined}>
            <Text style={styles.title}>Roll the dice</Text>
          {screen}
          </View>
        </ImageBackground>
      </LinearGradient>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: "center",
    flexDirection: "column",
    padding: 60,
    paddingTop: 1,
    paddingBottom: 1
  },
  backgroundImage: {
    opacity: 0.15,

  },
  title: {
    color: "#e00000ff",
    fontWeight: "bold",
    fontSize: 18
  },
  brownCard: {
    borderRadius: 15,
    padding: 13,
    alignItems: "center",
    backgroundColor: "#592101ff",
    justifyContent: "center",
    elevation: 8,

  }
});

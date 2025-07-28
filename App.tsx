import { StatusBar } from 'expo-status-bar';
import { ImageBackground, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import InputDice from './src/components/InputsDice';
import { useState } from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import RollDiceScreen from './src/screens/RollDiceScreen';
import Colors from './constants/Colors';

function generateRandomBetween(min: number, max: number, exclude: any): number{
    const rndNum = Math.floor(Math.random() * (max - min)) + min;

    if(rndNum == exclude){
        return generateRandomBetween(min, max, exclude);
    }else{
        return rndNum;
    }
}

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
    setSides={(value) => setSides(Math.max(6, value))}
    onRoll={handleRoll}
  />

  if (showRollScreen) {
    screen = <RollDiceScreen dice={dice} sides={sides} />
  }

  return (
    <>
      <StatusBar style='light' />
      <LinearGradient colors={[Colors.gradientColor1,Colors.gradientColor2]} style={styles.container}>
        <ImageBackground source={require("./assets/images/dice.jpg")}
          resizeMode='cover'
          style={styles.container}
          imageStyle={styles.backgroundImage}
        >
          <SafeAreaView >
            <View style={!showRollScreen ? styles.brownCard : undefined}>
              {!showRollScreen && <Text style={styles.title}>Roll the dice</Text>}
              {screen}
            </View>
          </SafeAreaView>
        </ImageBackground>
      </LinearGradient>
    </>
  );
}

const styles = StyleSheet.create({
   container: {
    flex: 1,                      
    width: "100%",               
    height: "100%",              
    justifyContent: "center",
    alignItems: "center",
  },
  backgroundImage: {
    opacity: 0.15,
    width: "100%",
    height: "100%",            
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

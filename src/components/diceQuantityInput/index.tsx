import { View, TextInput, Text, Alert } from "react-native";
import { useState, useEffect } from "react";
import { styles } from "./styles";

interface DiceQuantityProps {
  dice: number;
  setDice: (value: number) => void;
}

export default function DiceQuantityInput({ dice, setDice }: DiceQuantityProps) {
    
  const [localDice, setLocalDice] = useState(String(dice));
  const [errorDice, setErrorDice] = useState(false);
  const [warningDice, setWarningDice] = useState(false);

  function clearInput(){
    setDice(1);
  }

  const validateInput = (text: string) => {
    const numbersOnly = text.replace(/[^0-9]/g, "");
    const value = parseInt(numbersOnly || "0", 10);
    setLocalDice(numbersOnly);
    setErrorDice(value < 1 || value > 4);
    if (value >= 1 && value <= 4) {
      setDice(value);
    }else{
      clearInput()  
      //Alert.alert("Invalid data", "The number of dices must be have between 1 and 4 dices",
      //[{text:"confirm", style: "destructive", onPress: clearInput}]);
    }
  };

  return (
    <View style={styles.inputText}>
      <Text style={styles.text}>Choose number of dice</Text>
      <TextInput
        value={localDice}
        keyboardType="numeric"
        maxLength={2}
        style={styles.input}
        onChangeText={validateInput}
        onFocus={() => setWarningDice(true)}
        onBlur={() => setWarningDice(false)}
      />
      <Text style={[warningDice && styles.warning, errorDice && styles.error]}>
        {warningDice && "Should have between 1 and 4 dice" || errorDice && "Must be between 1 and 4"}
      </Text>
    </View>
  );
}

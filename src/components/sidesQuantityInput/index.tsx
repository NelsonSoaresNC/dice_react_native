import { View, TextInput, Text, Alert } from "react-native";
import { useState, useEffect } from "react";
import { styles } from "./styles";

interface DiceSidesInputProps {
  sides: number;
  setSides: (value: number) => void;
}

export default function DiceSidesInput({ sides, setSides }: DiceSidesInputProps) {

  const [localSides, setLocalSides] = useState(String(sides));
  const [errorSide, setErrorSides] = useState(false);
  const [warningSide, setWarningSide] = useState(false);

  function clearInput() {
    setSides(6);
  }

  const validateInput = (text: string) => {
    const numbersOnly = text.replace(/[^0-9]/g, "");
    const value = parseInt(numbersOnly || "0", 10);
    setLocalSides(numbersOnly);
    setErrorSides(value < 6 || value > 20);
    if (value >= 6 && value <= 20) {
      setSides(value);
    } else {

      clearInput();
      //Alert.alert("Invalid data", "The number of dices must be have between 6 and 20 sides",
        //[{ text: "confirm", style: "destructive", onPress: clearInput }]);
    }
  };

  return (
    <View style={styles.inputText}>
      <Text style={styles.text}>Choose number of sides</Text>
      <TextInput
        value={localSides}
        keyboardType="numeric"
        style={styles.input}
        maxLength={2}
        onChangeText={validateInput}
        onFocus={() => setWarningSide(true)}
        onBlur={() => setWarningSide(false)}
      />
      <Text style={[warningSide && styles.warning, errorSide && styles.error]}>
        {warningSide && "Should have between 6 and 20 sides" || errorSide && "Must be between 6 and 20"}
      </Text>
    </View>
  );
}

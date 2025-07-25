import { View, TextInput, Text } from "react-native";
import { useState, useEffect } from "react";
import { styles } from "./styles";

interface DiceSidesInputProps {
  sides: number;
  setSides: (value: number) => void;
}

export default function DiceSidesInput({ sides, setSides }: DiceSidesInputProps) {

  const [localSides, setLocalSides] = useState(String(sides));
  const [errorSide, setErrorSide] = useState(false);
  const [warningSide, setWarningSide] = useState(false);

  const validateInput = (text: string) => {
    const numbersOnly = text.replace(/[^0-9]/g, "");
    const value = parseInt(numbersOnly || "0", 10);
    setLocalSides(numbersOnly);
    setErrorSide(value < 6 || value > 20);
    if (value >= 6 && value <= 20) {
      setSides(value);
    }
  };

  return (
    <View style={styles.inputText}>
      <Text style={styles.text}>Choose number of sides</Text>
      <TextInput
        value={localSides}
        keyboardType="numeric"
        style={styles.input}
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

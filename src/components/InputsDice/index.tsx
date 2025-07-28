import { View } from "react-native";
import { styles} from "./styles";
import DiceQuantityInput from "../diceQuantityInput";
import DiceSidesInput from "../sidesQuantityInput";
import Button from "../Button";

interface InputsDiceProps {
  dice: number;
  sides: number;
  setDice: (value: number) => void;
  setSides: (value: number) => void;
  onRoll: () => void;
}

export default function InputDice({ dice, sides, setDice, setSides, onRoll }: InputsDiceProps) {
  return (
    <>
      <View style={styles.container}>
        <DiceQuantityInput dice={dice} setDice={setDice} />
        <DiceSidesInput sides={sides} setSides={setSides} />
      </View>
      <Button title="Roll" onPress={onRoll} />
    </>
  );
}

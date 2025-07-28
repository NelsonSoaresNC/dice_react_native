import { Text, View } from "react-native";
import { styles } from "./styles";

interface DiceProps {
    value: number;
}
export default function Dice({ value }: DiceProps) {
    return (

        <View style={styles.diceBox}>
            <Text style={styles.diceText}>{value}</Text>
        </View>
    )


}
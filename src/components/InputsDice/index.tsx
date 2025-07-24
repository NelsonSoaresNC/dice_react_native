import { View, TextInput, Text } from "react-native"
import { styles } from "./styles";
import { useState } from "react"
import Button from "../button";

    interface Props {
        dice: number;
        sides: number;
        setDice: (value: number) => void;
        setSides: (value: number) => void;
        onRoll: () => void;
    }
export default function InputDice({ dice, sides, setDice, setSides, onRoll }: Props) {


    const [localDice, setLocalDice] = useState(String(dice));
    const [localSides, setLocalSides] = useState(String(sides));
    const [errorDice, setErrorDice] = useState<boolean>(false);
    const [errorSide, setErrorSide] = useState<boolean>(false);
    const [warningSide, setWarningSide] = useState<boolean>(false);
    const [warningDice, setWarningDice] = useState<boolean>(false);

    const validateInput = (text: string, type: "dice" | "sides") => {

        const numbersOnly = text.replace(/[^0-9]/g, "");
        const numbers = parseInt(numbersOnly || "0", 10);

        if (type == "dice") {
            setLocalDice(numbersOnly);
            setErrorDice(numbers < 1 || numbers > 4);
        } else if (type == "sides") {
            setLocalSides(numbersOnly);
            setErrorSide(numbers < 6 || numbers > 20);
        }
    };


    return (
        <>
            <View style={styles.container}>
                <View style={styles.inputText}>
                    <Text style={styles.text}> Choose numbers of dice</Text>
                    <TextInput
                        value={localDice}
                        keyboardType="numeric"
                        style={styles.input}
                        onChangeText={(text) => validateInput(text, "dice")}
                        onFocus={() => setWarningDice(true)}
                        onBlur={() => setWarningDice(false)}
                    />
                    <Text style={[warningDice && styles.warning, errorDice && styles.error]}>{warningDice && "Should be have between 1 and 4 dice" || errorDice && "Must be between 1 and 4"}</Text>
                </View>
                <View style={styles.inputText}>
                    <Text style={styles.text}> Choose numbers of sides</Text>
                    <TextInput
                        value={localSides}
                        keyboardType="numeric"
                        style={styles.input}
                        onChangeText={(text) => validateInput(text, "sides")}
                        onFocus={() => setWarningSide(true)}
                        onBlur={() => setWarningSide(false)}
                    />
                    <Text style={[warningSide && styles.warning, errorSide && styles.error]}>{warningSide && "Should be have between 6 and 20 sides" || errorSide && "Must be between 6 and 20"}</Text>
                </View>
            </View>
            <Button title="Roll" />
        </>
    );
}

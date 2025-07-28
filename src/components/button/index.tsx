import { TouchableOpacityProps, Text, TouchableOpacity } from "react-native";
import { styles } from "./styles";


type ButtonProps = TouchableOpacityProps & {
    title: string
}

export default function Button({ title, ...rest }: ButtonProps) {
    return (
        <TouchableOpacity
            activeOpacity={0.5}
            style={[styles.button, rest.disabled && styles.buttonDisabled]}
            {...rest}
        >
            <Text style={styles.title}> {title} </Text>
        </TouchableOpacity>
    );

}
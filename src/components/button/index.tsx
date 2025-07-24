import { TouchableOpacityProps, Text, TouchableOpacity } from "react-native";
import { styles } from "./styles";


type Props = TouchableOpacityProps & {
    title: string
}

export default function Button({ title, ...rest }: Props) {
    return (
        <TouchableOpacity
            activeOpacity={0.5}
            style={styles.button}
            {...rest}
        >
            <Text style={styles.tilte}> {title} </Text>
        </TouchableOpacity>
    );

}
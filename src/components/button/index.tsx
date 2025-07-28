import { TouchableOpacityProps, Text, TouchableOpacity } from "react-native";
import { styles } from "./styles";


type ButtonProps = TouchableOpacityProps & {
    title: string;
    backcolor?: string;
}

export default function Button({ title, backcolor,  ...rest }: ButtonProps) {
    return (
        <TouchableOpacity
            activeOpacity={0.5}
            style={
            [
                styles.button, 
                rest.disabled && 
                styles.buttonDisabled,
                backcolor && {backgroundColor: backcolor}
                
            ]}
            {...rest}
        >
            <Text style={styles.title}> {title} </Text>
        </TouchableOpacity>
    );

}
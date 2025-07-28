import { StyleSheet } from "react-native";
import Colors from "../../../constants/Colors";

export const styles = StyleSheet.create({
        input: {
        borderColor: "white",
        borderWidth: 1,
        borderRadius: 8,
        color:"white",
        textAlign: "center",
        width: 160
    },
    inputText: {
        margin: 5,
        color: "white"
    },
    text:{
        fontWeight: "bold",
        color: "white"
    },
        warning:{
        fontSize: 9,
        color: Colors.warning,
        fontWeight: "bold"
    },
    error:{
        fontSize: 10,
        color: Colors.error,
        fontWeight: "bold"
    }
});
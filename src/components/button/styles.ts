import { StyleSheet } from "react-native";
import Colors from "../../../constants/Colors";

export const styles = StyleSheet.create({
    button: {
        marginTop: 25,
        width: 300,
        height: 52,
        backgroundColor: Colors.redButton,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 10
    },
    title:{
        fontWeight: "bold",
        color: "#FFFFFF"
    },
        buttonDisabled:{
        backgroundColor: "#ccc",
    }
});

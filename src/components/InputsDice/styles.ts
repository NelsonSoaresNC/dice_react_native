import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flexDirection: "row"
    },
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
    button:{
        width: 80
    },
    warning:{
        fontSize: 9,
        color: "yellow",
        fontWeight: "bold"
    },
    error:{
        fontSize: 10,
        color: "red",
        fontWeight: "bold"
    }
});
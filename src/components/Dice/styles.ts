import { StyleSheet } from "react-native";
import Colors from "../../../constants/Colors";

export const styles = StyleSheet.create({
 container: {
    marginTop: 30,
    alignItems: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#FFF",
    marginBottom: 15,
  },
  diceContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: 10,
  },
  diceBox: {
    backgroundColor:Colors.dice,
    padding: 15,
    margin: 5,
    borderRadius: 8,
    width: 60,
    height: 60,
    justifyContent: "center",
    alignItems: "center",
    
  },
  diceText: {
    color: "white",
    fontSize: 22,
    fontWeight: "bold",
  },
});
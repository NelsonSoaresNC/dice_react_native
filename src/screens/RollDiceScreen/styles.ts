import { StyleSheet } from "react-native";
import Colors from "../../../constants/Colors";

export const styles = StyleSheet.create({
container: {
    flex: 1,
    width: "100%",
    height: "100%",
    justifyContent: "center",
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
  total: {
    width: "100%",
    alignItems: "center",
    marginTop: 20,
  },
  totalText:{
    fontSize: 28,
    color: "white",
    fontWeight: "bold"
  },
  backButton: {
  position: "absolute",
  top: -250, 
  left: 20,
  zIndex: 1,
},

backText: {
  color: "#FFF",
  fontSize: 20,
  fontWeight: "bold",
},

}); 
import { LinearGradient } from "expo-linear-gradient";
import { ReactNode } from "react";
import { ImageBackground, SafeAreaView } from "react-native";
import Colors from "../../../constants/Colors";
import { styles } from "./styles";

interface ScreenWrapperProps {
  children: ReactNode;
}
export default function ScreenWrapper({children}: ScreenWrapperProps){
    return (
    <LinearGradient colors={[Colors.gradientColor1, Colors.gradientColor2]} style={styles.container}>
      <ImageBackground
        source={require("../../../assets/images/dice.jpg")}
        resizeMode="cover"
        style={styles.container}
        imageStyle={styles.backgroundImage}
      >
        <SafeAreaView style={styles.container}>{children}</SafeAreaView>
      </ImageBackground>
    </LinearGradient>
  );
}
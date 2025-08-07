import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator, NativeStackNavigationProp } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, useWindowDimensions, View } from 'react-native';

import Colors from './constants/Colors';
import InputDice from './src/components/InputsDice';
import RollDiceScreen from './src/screens/RollDiceScreen';
import ScreenWrapper from './src/screens/ScreenWrapper';

export type RootStackParamList = {
  Home: undefined;
  RollDice: { dice: number; sides: number };
};

const Stack = createNativeStackNavigator<RootStackParamList>();
type HomeScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'Home'>;

function HomeScreen() {
  const navigation = useNavigation<HomeScreenNavigationProp>();
  const [dice, setDice] = useState<number>(1);
  const [sides, setSides] = useState<number>(6);

  const handleRoll = () => {
    navigation.navigate("RollDice", {
      dice,
      sides: Math.max(6, sides),
    });
  };


  const {width, height} = useWindowDimensions();

  const paddingHorizontal = width < 500 ? 13 : 200;

  return (

    <ScreenWrapper>
      <View style={styles.container}>
        <View style={[styles.brownCard, {paddingHorizontal: paddingHorizontal}]}>
          <Text style={styles.title}>Roll the dice</Text>
          <InputDice
            dice={dice}
            sides={sides}
            setDice={setDice}
            setSides={setSides}
            onRoll={handleRoll}
          />
        </View>
      </View>
    </ScreenWrapper>
  );
}

export default function App() {
  return (
    <>
      <StatusBar style="light" />
      <NavigationContainer>
        <Stack.Navigator screenOptions={{
          headerStyle: { backgroundColor: Colors.navigation },
          headerTintColor: "white"
        }}>
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="RollDice" component={RollDiceScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}
/* const deviceWidth = Dimensions.get("window").width;
const deviceHeight = Dimensions.get("window").height; */

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    color: "#e00000ff",
    fontWeight: "bold",
    fontSize: 18,
  },
  brownCard: {
    borderRadius: 15,
    padding: 13,
    alignItems: "center",
    backgroundColor: "#592101ff",
    justifyContent: "center",
    elevation: 8,
  },
});

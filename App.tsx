import { StatusBar } from 'expo-status-bar';
import { ImageBackground, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { useState } from 'react';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator, NativeStackNavigationProp, NativeStackScreenProps } from '@react-navigation/native-stack';
import { LinearGradient } from 'expo-linear-gradient';

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

  return (

    <ScreenWrapper>
      <View style={styles.container}>
        <View style={styles.brownCard}>
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

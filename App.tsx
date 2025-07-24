import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import InputDice from './src/components/InputsDice';

export default function App() {
  return (
    <>
      <StatusBar style='light' />
      <View style={styles.container}>
        <Text style={styles.title}>Roll the dice</Text>
        <InputDice />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    flexDirection: "column",
    padding: 60,
    backgroundColor: "darkgreen"
  },
  title:{
    color: "#ca0000ff",
    fontWeight: "bold",
    fontSize: 18
  }
});

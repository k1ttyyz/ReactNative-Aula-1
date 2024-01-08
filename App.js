import { View, Text } from 'react-native';
import { StyleSheet } from 'react-native';

export default function App() {

  return (
    <View style={styles.container}>
      <Text style={styles.texto}>Olá mundo!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#008B8B",
    width: "100%",
    height: "100%"
  },
  texto: {
    textAlign: 'center',
    color: 'white',
  }
});



import { View, Button, StyleSheet } from "react-native";


export default function Home({ navigation }) {
    return (
        <View style={styles.container}>
            <Button  title="Consultar aqui" onPress={() => navigation.navigate("Consultar")} />
            <Button  title="Cadastre aqui" onPress={() => navigation.navigate("Cadastrar")} />
        </View>
    );

}
const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: "black",
       color:"green"
    }
});
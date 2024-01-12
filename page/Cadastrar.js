import {  StyleSheet} from "react-native";
import Billie from "../services/Billie";
import { SafeAreaView } from "react-native-safe-area-context";
import { TextInput } from "react-native-gesture-handler";
import { useState } from "react";
import { Button } from "react-native-paper";

export default function Cadastrar() {

    const [billiezinha, setbilliezinha] = useState({
nomemusica:"",
nota: ""
    })

    const botaosalvar = () => {
        Billie.create(billiezinha);
    }

    
    return (
        <SafeAreaView style={styles.container}>
           <Card.container>
            <TextInput
             label="Nome da musica"
             onChangeText={(texto) => {
                setbilliezinha(
                    {...billiezinha, nomemusica: texto}
                )
            }}/>
                <TextInput
            label="Nota da musica"
             onChangeText={(texto) => {
                setbilliezinha(
                    {...billiezinha, nota: texto}
                )
            }}/>
            <Button title='Cadastrar' onPress={botaosalvar}>Cadastrar</Button>
           </Card.container>
        </SafeAreaView>




    );
    }

    const styles = StyleSheet.create({
        container: {
            flex:1,
            display:"flex",
            alignItems:"center",
    backgroundColor:"#FFFACD"
        }
    });

    

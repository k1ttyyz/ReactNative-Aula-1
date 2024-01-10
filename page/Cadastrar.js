import {  StyleSheet} from "react-native";
import Billie from "../services/Billie";
import { SafeAreaView } from "react-native-safe-area-context";
import { TextInput } from "react-native-gesture-handler";
import { useState } from "react";
import { Button } from "react-native-paper";

export default function Cadastrar() {

    const [billiezinha, setbilliezinha] = useState({
nomeBil:"billie stan",
valor: 10
    })

    const cadastrar = () => {
        Billie.create(billiezinha);
    }

    
    return (
        <SafeAreaView style={styles.container}>
           <Card.container>
            <TextInput
             value={billiezinha.nomeBil} 
             onChangeText={(texto) => {
                setbilliezinha(
                    {...billiezinha, nomeBil: texto}
                )
            }}/>
                <TextInput
             value={billiezinha.nomeBil} 
             onChangeText={(texto) => {
                setbilliezinha(
                    {...billiezinha, valor: texto}
                )
            }}/>
            <Button title='Cadastrar' onPress={cadastrar}>Cadastrar</Button>
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

    

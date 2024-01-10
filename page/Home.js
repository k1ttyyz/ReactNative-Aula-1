import { View, StyleSheet , Text,TouchableOpacity , Image} from "react-native";



export default function Home({ navigation }) {
    return (
        <View style={styles.container}>
  <Image
        style={styles.tinyLogo}
        source={{
          uri: '',
        }}
        />
<TouchableOpacity style={styles.button} onPress={() => navigation.navigate("Consultar")} >
    <Text>Consultar</Text>
</TouchableOpacity>
           
<TouchableOpacity style={styles.butaozinho2} onPress={() => navigation.navigate("Cadastrar")} >
    <Text>Cadastrar</Text>
</TouchableOpacity>


          



        </View>
    );

}
const styles = StyleSheet.create({
    container: {
        flex:1,
        display:"flex",
        alignItems:"center",
backgroundColor:"#FFFACD"
    },
    button:{
        backgroundColor:"#F4A460",
        width: "100px",
        height:"20px",
        marginTop:"350px",
        paddingLeft:"15px",
        borderRadius:"10px"
    },
    butaozinho2:{
        backgroundColor:"#F4A460",
        width: "100px",
        height:"20px",
        marginTop:"20px",
        paddingLeft:"15px",
        justifyContent:"center",
        borderRadius:"10px"
    },
    tinyLogo:{
        width: "100px",
        height:"20px"
    }
});


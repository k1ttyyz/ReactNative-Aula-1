import { View, Text, StyleSheet } from "react-native";


export default function Consultar() {

    const lista = [
        {
        nomelinda:"Everthing i wanted",
        valor: 10
},
{
nomelinda:"Happier Than ever",
valor: 10
},
    {
    nomelinda:"No time do die",
    valor: 9.5
},
{
nomelinda:"i love u",
valor: 10
},
];
    return (
        <View style={styles.container}>
                <Text>
               Avaliando Musicas da billie
            </Text>
            {lista?.map((billieeilish)=>
             <View style={styles.textinho}>

                <Text>
                    {billieeilish.nomelinda}
               </Text>
               <Text>

                Nota:    {billieeilish.valor}
               </Text>
               </View>

            )}
        
        </View>
        
    );


}

const styles = StyleSheet.create({
    container: {

        flex:1,
        paddingTop:"100px",
        display:"flex",
        alignItems:"center",
backgroundColor:"#FFFACD"
    },

    textinho:{
    textAlign:"center",
    backgroundColor:"#F4A460",
    borderRadius:"10px",
    width:"150px",
    marginTop:"10px",
    paddingLeft:"20px",
    opacity:"0.9"
    }

});
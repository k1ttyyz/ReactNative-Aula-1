import { Text, StyleSheet, SafeAreaView, Card } from "react-native";


export default function Consultar() {

const [bil,setbil] = useState([]);

useEffect(() => {
    const buscar = async () => {
        const lista = await bil.findAll();
        setbil(lista);
    }
    buscar();
}, [])

return (
<SafeAreaView style={styles.container}>
    { bil?.map((musical)=> (
        <Card key={musical.id}>
            <Text style={styles.paragraph}>{musical.nomemusica}</Text>
            <Text style={styles.paragraph}>{musical.nota}</Text>
        </Card>
    ))}
</SafeAreaView>
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
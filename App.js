import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Home from './page/Home'
import Consultar from './page/Consultar';
import Cadastrar from './page/Cadastrar';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen name="Home"  component={Home}></Stack.Screen>
        <Stack.Screen name="Consultar" component={Consultar}></Stack.Screen>
        <Stack.Screen name="Cadastrar" component={Cadastrar}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}



//const styles = StyleSheet.create({
  //container: {
    //backgroundColor: "#008B8B",
   //width: "100%",
    //height: "100%"
  //},
  //texto: {
    //textAlign: 'center',
    //color: 'white',
  //},
  //textito: {
    //textAlign: 'center',
   // color: 'white',
  //}
//});



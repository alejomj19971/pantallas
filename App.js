
import { StyleSheet, Text, View,TouchableOpacity,TextInput } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ProfileScreen from './assets/components/ProfileScreen';
import LogIn from './assets/components/LogIn';
import Administrador from './assets/components/Administrador';
const Stack= createNativeStackNavigator();
export default function App() {
  //Rutas
  return (
    <View style={styles.container}>
    
      <NavigationContainer>
        <Stack.Navigator initialRouteName='LogIn'>
          <Stack.Screen  name="LogIn" component={LogIn} options={{title:'Sing In'}} />
          <Stack.Screen  name="Admin" component={Administrador} options={{title:'Administrador'}} />
          <Stack.Screen  name="Contacts" component={ContactScreen} options={{title:'Contactenos'}} />
          <Stack.Screen name="Home" component={HomeScreen} options={{title:'Inicio'}} />
          <Stack.Screen name="Profile" component={ProfileScreen} options={{title:'Perfil de Usuario'}}/>
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
{ /* ese navigation es como un paramatreo*/ }
function HomeScreen({navigation,route}){
  return(

    <View style={styles.container}>

      <Text>Bienvenido {route.params.fullname} nos alegra que hayas vuelto</Text>
      <TouchableOpacity onPress={()=>{navigation.navigate('Contacts')}} style={{backgroundColor:'red',opacity:0.7,color:'white',padding:10,marginTop:2,borderRadius:10}}>Bienvenido</TouchableOpacity>
    </View>
  )
}


function ContactScreen({navigation}){
  let username="janedoe2014"
  let fullname="John Doe";
  let salary=2500000
  return(

    <View style={styles.container}>

      <Text>Estas son las principales empresas aliadas</Text>
      <TouchableOpacity onPress={()=>{navigation.navigate('Profile',{fullname,username,salary})}} style={{backgroundColor:'green',opacity:0.7,color:'white',padding:10,marginTop:2,borderRadius:10}}>Perfil del Usuario</TouchableOpacity>
    </View>
  )
}






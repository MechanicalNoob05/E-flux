import { createStackNavigator } from '@react-navigation/stack';
import Home from '../Screens/Stack Screens/Home Page/Home';
import Login from '../Screens/Stack Screens/Login Page/Login';
import Ionicons from 'react-native-vector-icons/Ionicons'
import Signup from '../Screens/Stack Screens/Signup Page/Signup';


const Stack = createStackNavigator();

function MyStack(props) {

  const { navigation } = props
  const handleclick = (e) => {
    e.preventDefault()
    navigation.navigate('Login')
}
  return (
    <Stack.Navigator initialRouteName='Login'>
        {/* Add Screens Below for Stack*/}
      <Stack.Screen name="Login" component={Login} options={{headerShown:false}} />
      <Stack.Screen name="Signup" component={Signup} options={{headerShown:false}} />
      <Stack.Screen name="Home" component={Home}  
      />
      {/* <Stack.Screen name="Chargeup" component={Chargeup} options={{headerShown:false}} /> */}
    </Stack.Navigator>
  );
}
export default MyStack
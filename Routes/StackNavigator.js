import { createStackNavigator } from '@react-navigation/stack';
import Home from '../Screens/Stack Screens/Home Page/Home';
import Login from '../Screens/Stack Screens/Login Page/Login';
import Ionicons from 'react-native-vector-icons/Ionicons'
import Signup from '../Screens/Stack Screens/Signup Page/Signup';


const Stack = createStackNavigator();

function MyStack() {

  return (
    <Stack.Navigator initialRouteName='Login'>
      {/* Add Screens Below for Stack*/}
      <Stack.Screen
        name="Login"
        component={Login}
        options={
          {
            headerShown: false
          }
        }
      />
      <Stack.Screen
        name="Signup"
        component={Signup}
        options={
          {
            headerShown: false
          }
        }
      />
      <Stack.Screen
        name="Home"
        component={Home}
        options={
          {
            title: false,
            headerBackTitle: 'a',
            headerBackImage: () => <Ionicons name='log-out-outline' size={30}></Ionicons>
          }
        }
      />
      {/* <Stack.Screen name="Chargeup" component={Chargeup} options={{headerShown:false}} /> */}
    </Stack.Navigator>
  );
}
export default MyStack
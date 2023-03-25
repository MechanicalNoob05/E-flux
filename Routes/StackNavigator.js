import { createStackNavigator } from '@react-navigation/stack';
import Home from '../Screens/Stack Screens/Home Page/Home';
import Login from '../Screens/Stack Screens/Login Page/Login';
import Ionicons from 'react-native-vector-icons/Ionicons'
import Signup from '../Screens/Stack Screens/Signup Page/Signup';
import Admin from '../Screens/Stack Screens/Admin/Admin';
import Admin_Home from '../Screens/Stack Screens/Admin/Admin Home page/Admin_Home';


const Stack = createStackNavigator();

function MyStack() {

  return (
    <Stack.Navigator initialRouteName='Login'
      screenOptions={
        {
          headerShown: false,
          tabBarStyle: { paddingBottom: 0 },
          tabBarActiveTintColor: 'blue',
          tabBarHideOnKeyboard: true,
          keyboardHidesTabBar: true

        }
      }
    >
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
        name="Admin"
        component={Admin}
        options={
          {
            headerShown: false
          }
        }
      />
      <Stack.Screen
        name="Admin_home_page"
        component={Admin_Home}
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
            headerLeft: false
          }
        }
      />
      {/* <Stack.Screen name="Chargeup" component={Chargeup} options={{headerShown:false}} /> */}
    </Stack.Navigator>
  );
}
export default MyStack
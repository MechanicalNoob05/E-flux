import { createStackNavigator } from '@react-navigation/stack';
import Home from '../Screens/Stack Screens/Home Page/Home';

const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator initialRouteName='Home' screenOptions={{headerShown:false}}>
        {/* Add Screens Below for Stack*/}
      <Stack.Screen name="Home" component={Home} />
    </Stack.Navigator>
  );
}
export default MyStack
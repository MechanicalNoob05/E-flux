import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Map from '../Screens/Tab Screens/Map Page/Map';
import Profile from '../Screens/Tab Screens/Profile Page/Profile';
import Ionicons from '@expo/vector-icons/Ionicons'
import Stats from '../Screens/Tab Screens/Stats Page/Stats';
import Replacement from '../Screens/Tab Screens/Replacement Page/Replacement';

const Tab = createBottomTabNavigator();

function MyTabs() {
    return (
        <Tab.Navigator
            screenOptions={
                {
                    headerShown: false,
                    tabBarStyle: { paddingBottom: 20 }
                }
            }
        >
            <Tab.Screen name="Map" component={Map} />
            <Tab.Screen name="Profile" component={Profile} />
            <Tab.Screen name="stats" component={Stats} />
            <Tab.Screen name="Rep" component={Replacement} />
        </Tab.Navigator>
    );
}

export default MyTabs
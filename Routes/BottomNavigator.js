import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Map from '../Screens/Tab Screens/Map Page/Map';
import Profile from '../Screens/Tab Screens/Profile Page/Profile';
import Ionicons from '@expo/vector-icons/Ionicons'
import Stats from '../Screens/Tab Screens/Stats Page/Stats';
import Replacement from '../Screens/Tab Screens/Replacement Page/Replacement';



const Tab = createBottomTabNavigator();

function MyTabs(props) {

    const { navigation } = props
    return (
        <Tab.Navigator

            screenOptions={
                {   headerShown:false,
                    tabBarStyle: { paddingBottom: 20 }
                }
            }
        >
            <Tab.Screen name="Home" screenOptions={{headerShown:false}} component={Map} />
            <Tab.Screen name="Vehicle" component={Stats} />
            <Tab.Screen name="Notifications"component={Replacement}/>
            <Tab.Screen name="Profile" component={Profile}
                 />
        </Tab.Navigator>
    );
}

export default MyTabs
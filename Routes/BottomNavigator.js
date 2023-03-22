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
                    tabBarStyle: { paddingBottom: 0 },
                    tabBarActiveTintColor:'blue'
                }
            }
        >
            <Tab.Screen name="Map" component={Map} options={{tabBarIcon:()=><Ionicons name='map-outline' size={20}/>,tabBarShowLabel:false,tabBarActiveBackgroundColor:'blue'}}/>
            <Tab.Screen name="stats" component={Stats} options={{tabBarIcon:()=><Ionicons name='stats-chart-outline' size={20}/>,tabBarShowLabel:false,tabBarActiveBackgroundColor:'blue'}}/>
            <Tab.Screen name="Rep"component={Replacement}options={{tabBarIcon:()=><Ionicons name='repeat-outline' size={20}/>,tabBarShowLabel:false,tabBarActiveBackgroundColor:'blue'}}/>
            <Tab.Screen name="Profile" component={Profile} options={{tabBarIcon:()=><Ionicons name='person-outline' size={20}/>,tabBarShowLabel:false,tabBarActiveBackgroundColor:'blue'}}/>
        </Tab.Navigator>
    );
}

export default MyTabs
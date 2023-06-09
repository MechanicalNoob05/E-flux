import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Map from '../Screens/Tab Screens/Map Page/Map';
import Profile_Stack from '../Screens/Tab Screens/Profile Page/Profile_Stack';
import Ionicons from '@expo/vector-icons/Ionicons'
import Stats from '../Screens/Tab Screens/Stats Page/Stats';
import Replacement from '../Screens/Tab Screens/Replacement Page/Replacement';



const Tab = createBottomTabNavigator();

function MyTabs(props) {

    const { navigation } = props
    return (
        <Tab.Navigator>
            <Tab.Screen
                name="Map" component={Map}
                options={
                    {
                        tabBarIcon: () => <Ionicons name='map-outline' size={20} />,
                        tabBarShowLabel: true, tabBarActiveBackgroundColor: '#ebeef2'
                    }
                }
            />
            <Tab.Screen
                name="Stats"
                component={Stats}
                options={
                    {
                        tabBarIcon: () => <Ionicons name='stats-chart-outline' size={20} />,
                        tabBarShowLabel: true, tabBarActiveBackgroundColor: '#ebeef2'
                    }
                }
            />
            <Tab.Screen
                name="Swap"
                component={Replacement}
                options={
                    {
                        tabBarIcon: () => <Ionicons name='repeat-outline' size={20} />,
                        tabBarShowLabel: true, tabBarActiveBackgroundColor: '#ebeef2'
                    }
                }
            />
            <Tab.Screen
                name="Profile"
                component={Profile_Stack}
                options={
                    {
                        tabBarIcon: () => <Ionicons name='person-outline' size={20} />,
                        tabBarShowLabel: true, tabBarActiveBackgroundColor: '#ebeef2'
                    }
                }
            />
        </Tab.Navigator>
    );
}

export default MyTabs
import React, { useEffect } from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Profile from './Profile Stack/Profile_Option_Page/Profile';
import Account from './Profile Stack/Account Page/Account';
import Password from './Profile Stack/Password Page/Password';
import About from './Profile Stack/About Us/About';
import Contact from './Profile Stack/Contact Us/Contact';
import CurrentBooking from './Profile Stack/Current Booking/CurrentBooking';
import FAQ from './Profile Stack/FAQ/FAQ';
import History from './Profile Stack/History/History';
import Help from './Profile Stack/Help/Help';
import * as SecureStorage from 'expo-secure-store';
import ip from '../../../ip.json'

const PStack = createStackNavigator();

const Map = (props) => {
  const [token, settoken] = React.useState('');
  async function getValueFor(key) {
      let result = await SecureStorage.getItemAsync(key);
      if (result) {
          settoken(result)
      } else {
      }
  }
  useEffect(() => {
      getValueFor("jwt-token")
  }, [token])
  const { navigation } = props
  return (
    <NavigationContainer independent={true} >
      <PStack.Navigator>
        <PStack.Screen
          name="Profile"
          component={Profile}
          options={{ headerShown: false }}
        />
        <PStack.Screen
          name='Account'
          component={Account}
          options={{ headerShown: false }}
          initialParams={{token:"token"}}
        />
        <PStack.Screen
          name='Password'
          component={Password}
          options={{ headerShown: false }}
        />
          <PStack.Screen
          name="About"
          component={About}
          options={{ headerShown: false }}
        />
        <PStack.Screen
          name='Contact'
          component={Contact}
          options={{ headerShown: false }}
        />
        <PStack.Screen
          name='CurrentBooking'
          component={CurrentBooking}
          options={{ headerShown: false }}
        />
        <PStack.Screen
          name='FAQ'
          component={FAQ}
          options={{ headerShown: false }}
        />
        <PStack.Screen
          name='History'
          component={History}
          options={{ headerShown: false }}
        />
        <PStack.Screen
        name='Help'
        component={Help}
        options={{ headerShown: false }}
      />
             
      </PStack.Navigator>
    </NavigationContainer>
  )
}
export default Map





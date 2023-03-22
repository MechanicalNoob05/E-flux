import React from 'react'
import { StyleSheet, View, Text } from 'react-native'
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
const PStack = createStackNavigator();

const Map = (props) => {

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
        />
        <PStack.Screen
          name='Password'
          component={Password}
          options={{ headerShown: false }}
        />
        
             
      </PStack.Navigator>
    </NavigationContainer>
  )
}
const styles = StyleSheet.create({ container: { padding: 24 } })
export default Map





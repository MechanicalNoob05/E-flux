import React from 'react'
import { StyleSheet, View, Text } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Chargeup from '../Map Page/ChargeStation Info Page/Chargeup';

const PStack = createStackNavigator();
const Profile = (props) => {

  const { navigation } = props
  return (
    <NavigationContainer independent={true}>
      <PStack.Navigator>
        <PStack.Screen name="test" component={Chargeup} options={{ headerShown: false }}></PStack.Screen>
      </PStack.Navigator>
    </NavigationContainer>
  )
}
const styles = StyleSheet.create({ container: { padding: 24 } })
export default Profile
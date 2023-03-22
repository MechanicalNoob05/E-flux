import React from 'react'
import { StyleSheet, View, Text } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Chargeup from './ChargeStation Info Page/Chargeup';
import Map_Display from './Map Display Page/Map_Display';

const MStack = createStackNavigator();

const Map = (props) => {

  const { navigation } = props
  return (
    <NavigationContainer independent={true} >
      <MStack.Navigator>
        <MStack.Screen
          name="Chargeup"
          component={Chargeup}
          options={{ headerShown: false }}
        />
        <MStack.Screen
        name='M_Display'
        component={Map_Display}
        options={{headerShown:false}}/>
      </MStack.Navigator>
    </NavigationContainer>
  )
}
const styles = StyleSheet.create({ container: { padding: 24 } })
export default Map





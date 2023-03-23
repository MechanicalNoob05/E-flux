import React from 'react'
import { StyleSheet, View, Text } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import List from './Repalcement Stack/Replacement List/List';
import Battery_Details from './Repalcement Stack/Replacement Detail/Battery_Details';

const RStack = createStackNavigator();

const Replacement = (props) => {

  const { navigation } = props
  return (
    <NavigationContainer independent={true} >
      <RStack.Navigator>
        <RStack.Screen 
        name='List' 
        component={List}
        options={{
          headerShown:false
        }}
        ></RStack.Screen>
        <RStack.Screen 
        name='Battery_Detail' 
        component={Battery_Details}
        options={{
          headerShown:false
        }}
        ></RStack.Screen>
      </RStack.Navigator>
    </NavigationContainer>
  )
}
const styles = StyleSheet.create({ container: { padding: 24 } })
export default Replacement





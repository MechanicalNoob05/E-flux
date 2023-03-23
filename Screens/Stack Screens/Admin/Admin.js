import { View } from 'react-native'
import React from 'react'
import { Divider, Icon, Input, Text } from 'react-native-elements'
import { StyleSheet } from 'react-native'
import { Button } from 'react-native-elements';

import { ImageBackground } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
const image = {uri: 'https://reactjs.org/logo-og.png'};

const Admin = (props) => {

  const { navigation } = props
  return (
    <ScrollView>
      <Icon
  name='sc-telegram'
  type='evilicon'
  color='#517fa4'
  size={45}
/>
   
    <View>
      


       <ImageBackground source={image} resizeMode="cover" style={styles.image}>

      <Text h4 style={styles.textcenter}>Admin</Text>
      <Divider/>

      <Text h3 style={styles.textcenter}>Sign In</Text>
      <View style={styles.InputContainer}>
      <Input
            placeholder='Username'
            leftIcon={{ type: 'font-awesome', name: 'user-circle-o', size: 20 }}
          />
           <Input
            placeholder='password'
            leftIcon={{ type: 'font-awesome', name: 'key', size: 20 }}
            secureTextEntry={true}
          />
          <Button
  title="Sign In"
  onPress={()=> navigation.navigate('Admin_home_page')}

/>

          </View>
      </ImageBackground>
    </View>
    </ScrollView>
  )
}


const styles = StyleSheet.create({
  InputContainer:{
    padding: 10,
    alignContent:'center',
    backgroundColor: 'ghostwhite',
    margin: 10
  }
  ,
textcenter:{
  textAlign:'center',
}
})
export default Admin
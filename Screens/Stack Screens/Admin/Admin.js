import { View, Text, Button } from 'react-native'
import React from 'react'
const Admin = (props) => {

  const { navigation } = props
  return (
    <View>
      <Text>Admin</Text>
      <Button title='test' onPress={()=> navigation.navigate('Admin_home_page')}></Button>
    </View>
  )
}

export default Admin
import React from 'react'
import { StyleSheet, View, Text, Button } from 'react-native'
const Signup = (props) => {

  const { navigation } = props
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Signup Screen</Text>

      <Button title='='
        onPress={() => navigation.navigate('Login')} />
    </View>
  )
}
const styles = StyleSheet.create({ container: { padding: 24 } })
export default Signup
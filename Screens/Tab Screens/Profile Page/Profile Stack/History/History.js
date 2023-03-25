import React from 'react'
import { StyleSheet, View, Button} from 'react-native'
import { Text } from 'react-native-elements'
const History = (props) => {

  const { navigation } = props
    return (
      <View style={styles.container}>
      <Text h4  style={{textAlign:'center'}}>View your Previous booking Section</Text>
      
  </View>)
}
const styles = StyleSheet.create({ container: { padding: 24 } })
export default History
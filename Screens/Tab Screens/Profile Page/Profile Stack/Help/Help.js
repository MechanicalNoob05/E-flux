import React from 'react'
import { StyleSheet, View, Text, Button} from 'react-native'
const Help = (props) => {

  const { navigation } = props
    return (
      <View style={styles.container}>
      <Text h4  style={{textAlign:'center'}}>Help Section</Text>
      
  </View>)
}
const styles = StyleSheet.create({ container: { padding: 24 } })
export default Help
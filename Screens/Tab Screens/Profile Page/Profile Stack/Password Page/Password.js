import React from 'react'
import { StyleSheet, View, Text, Button} from 'react-native'
const Password = (props) => {

  const { navigation } = props
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Password Screen</Text>
            
        </View>)
}
const styles = StyleSheet.create({ container: { padding: 24 } })
export default Password
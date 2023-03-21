import React from 'react'
import { StyleSheet, View, Text} from 'react-native'
const Stats = (props) => {

  const { navigation } = props
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Stats Screen</Text>
        </View>)
}
const styles = StyleSheet.create({ container: { padding: 24 } })
export default Stats
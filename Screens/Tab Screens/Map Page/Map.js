import React from 'react'
import { StyleSheet, View, Text} from 'react-native'
const Map = (props) => {

  const { navigation } = props
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Map Screen</Text>
        </View>)
}
const styles = StyleSheet.create({ container: { padding: 24 } })
export default Map
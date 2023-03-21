import React from 'react'
import { StyleSheet, View, Text, Button} from 'react-native'
const Map_Display = (props) => {

  const { navigation } = props
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Map_Display Screen</Text>
            
            <Button title='='
                onPress={() => navigation.navigate('Chargeup')} />
        </View>)
}
const styles = StyleSheet.create({ container: { padding: 24 } })
export default Map_Display
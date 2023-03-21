import React from 'react'
import { StyleSheet, View, Text, Button} from 'react-native'
const Chargeup = (props) => {

  const { navigation } = props
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Chargeup Screen</Text>
            
            <Button title='='
                onPress={() => navigation.navigate('M_Display')} />
        </View>)
}
const styles = StyleSheet.create({ container: { padding: 24 } })
export default Chargeup
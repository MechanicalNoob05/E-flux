import React from 'react'
import { StyleSheet, View, Button} from 'react-native'
import { Text } from 'react-native-elements'
const About = (props) => {

  const { navigation } = props
    return (
        <View style={styles.container}>
            <Text h4 style={styles.text}>ChargeUp</Text>
            
        </View>)
}
const styles = StyleSheet.create({ container: { padding: 24 } })
export default About
import React from 'react'
import { StyleSheet, View, Button} from 'react-native'
import { Text } from 'react-native-elements'
const CurrentBooking = (props) => {

  const { navigation } = props
    return (
        <View style={styles.container}>
           <Text>See your Upcoming Bookings</Text>
            
        </View>)
}
const styles = StyleSheet.create({ container: { padding: 24 } })
export default CurrentBooking
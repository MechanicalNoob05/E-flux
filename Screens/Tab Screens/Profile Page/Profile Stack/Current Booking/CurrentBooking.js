import Ionicons from 'react-native-vector-icons/Ionicons'
import React from 'react'
import { StyleSheet, View, Button} from 'react-native'
import { Text } from 'react-native-elements'
const CurrentBooking = (props) => {

  const { navigation } = props
    return (
        <View style={styles.container}>
           <Text>See your Upcoming Bookings</Text>
            <View style={styles.card}>
            <Text h4 style={{padding: 5}}>
              Manish Garage Electric Charging Station
            </Text>
           
              <Text> <Ionicons name='calendar-outline'/> 15 March</Text>
              <Text> <Ionicons name='time'/> 12-1.0 PM</Text>
              <Button title='View Location on Maps'></Button>
            </View>
        </View>)
}
const styles = StyleSheet.create({ container: { padding: 24 },
 
card:{
  padding: 10,
  backgroundColor:'#fff',
  borderRadius: 15
}
})
export default CurrentBooking
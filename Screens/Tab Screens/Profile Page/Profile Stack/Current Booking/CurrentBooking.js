import Ionicons from 'react-native-vector-icons/Ionicons'
import React from 'react'
import { StyleSheet, View, Button} from 'react-native'
import { Divider, Text } from 'react-native-elements'
const CurrentBooking = (props) => {

  const { navigation } = props
    return (
        <View style={styles.container}>
           <Text style={{textAlign:'center', marginVertical: 10}}>See your Upcoming Bookings</Text>
            <View style={styles.card}>
            <Text h4 style={{padding: 5}}>
              Manish Garage Electric Charging Station
            </Text>
           
              <Text> <Ionicons name='calendar-outline'/> 15 March</Text>
              <Text style={{marginBottom: 10}}> <Ionicons name='time'/> 12-1.0 PM</Text>
              <Button title='View Location on Maps' />
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
import Ionicons from 'react-native-vector-icons/Ionicons'
import React, { useEffect } from 'react'
import { StyleSheet, View, Button } from 'react-native'
import { Text } from 'react-native-elements'
import * as SecureStorage from 'expo-secure-store';
import ip from '../../../../../ip.json'


const CurrentBooking = (props) => {
  const [booking, setBookings] = React.useState({})
  const [token, settoken] = React.useState('');



  const [battery, setBattery] = React.useState([])
  const [station, setStation] = React.useState([]);

  async function getValueFor(key) {
    let result = await SecureStorage.getItemAsync(key);
    if (result) {
      settoken(result)
    } else {
    }
  }

  const getBookings = async (token) => {
    // Default options are marked with *
    const response = await fetch(`http://${ip.ip}:3001/app/getbooking`, {
      method: "POST",
      headers: {
        "Content-type": "application/json;charset=UTF-8",
        "auth-token": token
      },
      // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
      body: JSON.stringify({}) // body data type must match "Content-Type" header
    });
    const json5 = await response.json()
    // console.log(json5)
    if (json5.data) {
      setBookings(json5.data)
    } else {
    }
  }
  useEffect(() => {
    getValueFor("jwt-token")
    getBookings(token)
  }, [token])

  useEffect(() => {
    setStation(booking.savedstationbooking)
    setBattery(booking.savedbatterybooking)
  }, [booking])
  console.log(battery)
  const { navigation } = props
  return (
    <View style={styles.container}>
      <Text>See your Upcoming Bookings</Text>

      <View>
        {
          station ? (
            station.map((slot) => {
              return (
                <View style={styles.card}>
                  <Text h4 style={{ padding: 5 }}>
                    {slot.Station[0].Stationname}
                  </Text>

                  <Text> <Ionicons name='calendar-outline' /> 15 March</Text>
                  <Text> <Ionicons name='time' />{slot.Timeslot[0].Duration}</Text>
                  <Button title='View Location on Maps'></Button>
                </View>
              )
            }))
            : (
              <View>

              </View>

            )
        }
      </View>
      <View>
        {
          battery ? (
            battery.map((slot) => {
              return (
                <View style={styles.card}>
                  <Text h4 style={{ padding: 5 }}>
                    {slot.Station[0].Stationname}
                  </Text>

                  <Text> <Ionicons name='calendar-outline' /> 15 March</Text>
                  <Text> <Ionicons name='time' />{slot.Battery[0].Batteryname}</Text>
                  <Text> <Ionicons name='time' />{slot.Battery[0].Batterycapacity}</Text>
                  <Button title='View Location on Maps'></Button>
                </View>
              )
            }))
            : (
              <View>

              </View>

            )
        }
      </View>
    </View>)
}
const styles = StyleSheet.create({
  container: { padding: 24 },

  card: {
    padding: 10,
    backgroundColor: '#fff',
    borderRadius: 15
  }
})
export default CurrentBooking
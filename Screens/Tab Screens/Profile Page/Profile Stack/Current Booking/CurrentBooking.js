import Ionicons from 'react-native-vector-icons/Ionicons'
import React, { useEffect } from 'react'
import { StyleSheet, View, Button, ScrollView } from 'react-native'
import { Divider, Text } from 'react-native-elements'
import * as SecureStorage from 'expo-secure-store';

import ip from '../../../../../ip.json'


const CurrentBooking = (props) => {
  const [booking, setBookings] = React.useState({})
  const [token, settoken] = React.useState('');


  const handleconfirm = (Bookingid) => (e) => {
    e.preventDefault();
    confirmBookings(token, Bookingid)
  }
  const handleconfirmbattery = (Batterybookingid) => (e) => {
    e.preventDefault();
    confirmBattery(token, Batterybookingid)
  }
  const handledelete = (Bookingid) => {
    deleteBookings(token, Bookingid)
  }
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


  const confirmBookings = async (token, Bookingid) => {
    // Default options are marked with *
    const response = await fetch(`http://${ip.ip}:3001/app/adddeleterequest`, {
      method: "POST",
      headers: {
        "Content-type": "application/json;charset=UTF-8",
        "auth-token": token
      },
      // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
      body: JSON.stringify({ Bookingid }) // body data type must match "Content-Type" header
    });
    const json5 = await response.json()
    // console.log(json5)
    if (json5.savedBooking) {
      alert('Confirmed')
    } else {
      alert(json5.err)
    }
  }


  const deleteBookings = async (token, Bookingid) => {
    // Default options are marked with *
    const response = await fetch(`http://${ip.ip}:3001/app/getbooking`, {
      method: "POST",
      headers: {
        "Content-type": "application/json;charset=UTF-8",
        "auth-token": token
      },
      // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
      body: JSON.stringify({ Bookingid }) // body data type must match "Content-Type" header
    });
    const json5 = await response.json()
    // console.log(json5)
    if (json5.data) {
    } else {
    }
  }




  const confirmBattery = async (token, Batterybookingid) => {
    // Default options are marked with *
    const response = await fetch(`http://${ip.ip}:3001/app/deletebatteryrequest`, {
      method: "POST",
      headers: {
        "Content-type": "application/json;charset=UTF-8",
        "auth-token": token
      },
      // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
      body: JSON.stringify({ Batterybookingid }) // body data type must match "Content-Type" header
    });
    const json5 = await response.json()
    // console.log(json5)
    if (json5.savedBooking) {
      alert("Confirmed")
    } else {
      alert(json5.err)
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
  const { navigation } = props
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Charging Slots</Text>
      <ScrollView>
        <View>
          {
            station ? (
              station.map((slot) => {
                return (
                  <View style={styles.card} key={slot._id}>
                    <Text h4 style={{ padding: 5 }}>
                      {slot.Station[0].Stationname}
                    </Text>

                    <Text> <Ionicons name='calendar-outline' /> 15 March</Text>
                    <Text> <Ionicons name='time' />{slot.Timeslot.Duration}</Text>
                    <Text> <Ionicons name='time' />{slot.Station[0].Stationaddress}</Text>
                    {(slot.Deletestatus === false) ?
                      <View style={styles.button_grp}>
                        <Button title='Done' onPress={handleconfirm(slot._id)} color={'#32cd32'}></Button>
                        <Button title='Cancel' color={'#ff5733'}></Button>
                      </View>
                      :
                      <View style={styles.button}>
                        <Button title='pending' color={'#ffc300'}></Button>
                      </View>
                    }
                  </View>
                )
              }))
              : (
                <View>

                </View>

              )
          }
        </View>
        <Divider color='black'></Divider>
        <Text style={styles.text}>Battery Replacement</Text>
        <View>
          {
            battery ? (
              battery.map((slot) => {
                return (
                  <View style={styles.card} key={slot._id}>
                    <Text h4 style={{ padding: 5 }}>
                      {slot.Station[0].Stationname}
                    </Text>

                    <Text> <Ionicons name='calendar-outline' /> 15 March</Text>
                    <Text> <Ionicons name='time' />{slot.Battery[0].Batteryname}</Text>
                    <Text> <Ionicons name='time' />{slot.Battery[0].Batterycapacity}</Text>
                    <Text> <Ionicons name='time' />{slot.Station[0].Stationaddress}</Text>
                    {(slot.Deletestatus === false) ?

                      <View style={styles.button_grp}>
                        <Button title='Confirm' onPress={handleconfirmbattery(slot._id)} color={'#32cd32'}></Button>
                        <Button title='Cancel' color={'#ff5733'}></Button>
                      </View>
                      :
                      <View style={styles.button}>
                        <Button title='pending' color={'#ffc300'}></Button>
                      </View>
                    }
                  </View>
                )
              }))
              : (
                <View>

                </View>

              )
          }
        </View>
      </ScrollView>
    </View>)
}
const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
    paddingBottom: 50
  },

  card: {
    padding: 20,
    backgroundColor: '#fff',
    borderRadius: 15,
    marginBottom: 10
  },
  button_grp: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    paddingVertical: 25
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: 10,
    textAlign: 'center'
  },
  button: {
    paddingVertical: 25
  }
})
export default CurrentBooking
import React, { useEffect, useState } from 'react'
import { Button, ScrollView } from 'react-native'
import { StyleSheet, View, Text, Image } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons'
import ip from '../../../../ip.json'
import * as SecureStorage from 'expo-secure-store'

const Map_Display = ({ route, navigation }) => {
  const [Station, setStation] = useState([])
  
  // async function getValueFor(key) {
  //   let result = await SecureStorage.getItemAsync(key);
  //   if (result) {
  //   } else {
  //     alert('No values stored under that key.');
  //   }
  // }
    const getStation = async (id) => {
      // Default options are marked with *
      const response = await fetch(`http://${ip.ip}:3001/app/getstationid`, {
        method: "POST",
        headers: {
          "Content-type": "application/json;charset=UTF-8",
        },
        // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
        body: JSON.stringify({ id }) // body data type must match "Content-Type" header
      });
      const json5 = await response.json()
      // console.log(json5)
      if (json5.savedStation) {
        setStation(json5.savedStation)
      } else {
      }
    }
    // getValueFor('jwt-token')
    useEffect(() => {
      getStation(route.params.id)
    }, [])


    return (
      <View style={styles.container}>
        {Station ? (Station.map((item) => {
          return (
            <ScrollView>
              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <View style={{ flex: 1, height: 1, backgroundColor: 'black' }} />
                <View>
                  <Text style={{ width: 50, textAlign: 'center' }}></Text>
                </View>
                <View style={{ flex: 1, height: 1, backgroundColor: 'black' }} />
              </View>
              <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                <View>

                  <Text key={item.id} style={styles.text}>{item.Stationname}</Text>
                  <Text key={item.id} style={styles.text_city}><Ionicons name='location' size={20} ></Ionicons>{item.City}</Text>
                  <Text key={item.id} style={styles.text_city}><Ionicons name='call' size={15}></Ionicons>{item.Phone}</Text>
                </View>
                <View>
                  <Text onPress={() => { }} style={{ marginEnd: 35, width: 80, textAlign: 'center', borderColor: 'black', borderRadius: 5, borderWidth: 1, padding: 8 }}>Let's go</Text>
                </View>
              </View>

              <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 20 }}>
                <View style={{ flex: 1, height: 1, backgroundColor: 'black' }} />
                <View>
                  <Text style={{ width: 150, textAlign: 'center', fontSize: 20 }}>Available Slots</Text>
                </View>
                <View style={{ flex: 1, height: 1, backgroundColor: 'black' }} />
              </View>

              <View style={{ padding: 10, flexDirection: 'row' }}>
                {
                  item.Slot.map((slot) => {
                    return (
                      <View key={slot._id}>
                        <Text onPress={() => { }}
                          style={
                            {
                              marginEnd: 35,
                              width: 80,
                              textAlign: 'center',
                              borderColor: 'black',
                              borderRadius: 5,
                              borderWidth: 1,
                              padding: 8
                            }
                          }
                        >{slot.Slotname}</Text>
                        <Text>{slot.Connectortype}</Text>
                      </View>
                    )
                  })
                }
              </View>


              <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 20 }}>
                <View style={{ flex: 1, height: 1, backgroundColor: 'black' }} />
                <View>
                  <Text style={{ width: 150, textAlign: 'center', fontSize: 20 }}>Available Time</Text>
                </View>
                <View style={{ flex: 1, height: 1, backgroundColor: 'black' }} />
              </View>

              <View style={{ padding: 10, flexDirection: 'row' }}>
                {
                  item.Timeslot.map((slot) => {
                    return (
                      <View key={slot._id}>
                        <Text onPress={() => { }}
                          style={
                            {
                              marginEnd: 35,
                              width: 80,
                              textAlign: 'center',
                              borderColor: 'black',
                              borderRadius: 5,
                              borderWidth: 1,
                              padding: 8,
                              verticalAlign: 'middle'
                            }
                          }
                        >{slot.Duration}</Text>
                      </View>
                    )
                  })
                }
              </View>
              <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingHorizontal: 20, paddingVertical: 30 }}>

                <Text style={{ textAlign: 'center', fontSize: 20 }}>{item.Priceperunit}</Text>
                <Text style={{
                  marginEnd: 35,
                  width: 80,
                  textAlign: 'center',
                  borderColor: 'black',
                  borderRadius: 5,
                  borderWidth: 1,
                  padding: 8,
                  verticalAlign: 'middle'
                }}>Book
                </Text>
              </View>
            </ScrollView>
          )
        })) : (<Text>Chutiyap</Text>)}
      </View>)
  }
  const styles = StyleSheet.create(
    {
      container: {
        padding: 0
      },
      text: {
        fontSize: 40,
        fontWeight: 'bold',
        paddingHorizontal: 20
      },
      text_city: {
        fontSize: 20,
        paddingHorizontal: 20,
      }
    }
  )
  export default Map_Display
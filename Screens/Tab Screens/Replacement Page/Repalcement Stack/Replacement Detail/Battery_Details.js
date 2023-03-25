import React, { useEffect, useState } from 'react'
import { Image } from 'react-native'
import { StyleSheet, View, Text, Button, ScrollView } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons'
import ip from '../../../../../ip.json'

const image = { uri: "https://images.hindustantimes.com/img/2022/01/28/1600x900/4f422c8e-8072-11ec-862a-ad8c40546e4c_1643398983603.jpg" }
const Battery_Details = ({ route, navigation }) => {
    const [Station, setStation] = useState([])

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
    useEffect(() => {
        getStation(route.params.id)
    }, [Station])


    return (
      
        <View style={styles.container}>
          {Station ? (Station.map((item) => {
            return (
              <ScrollView key={item._id}>
                <Image style={{ height: 200, marginBottom: 10 }} source={image} >
                </Image>
  
  
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingHorizontal: 10, }}>
                  <View>
  
                    <Text key={item.id} h4>{item.Stationname}</Text>
                    <Text key={item.id} style={styles.text_city}><Ionicons name='location' size={15} ></Ionicons> {item.City}</Text>
                    <Text key={item.id} style={styles.text_city}><Ionicons name='call' size={15}></Ionicons> {item.Phone}</Text>
                    <Text key={item.id} style={styles.text_city}><Ionicons name='calendar' size={15}></Ionicons> {Date()}</Text>
  
                  </View>
                 
                </View>
  
                <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 20 }}>
                  <View style={{ flex: 1, height: 1, backgroundColor: 'black' }} />
                  <View>
                    <Text style={{ width: 150, textAlign: 'center', fontSize: 18 }}>Available Batteries</Text>
                  </View>
                  <View style={{ flex: 1, height: 1, backgroundColor: 'black' }} />
                </View>
  
                <View style={{ padding: 10, flex: 1, flexDirection: 'row', flexWrap:'wrap', }}>
  
                  {
                    item.Battery.map((slot) => {
                      return (
                        <View key={slot._id} style={{ borderColor: '#cdcfd1', backgroundColor: '#e8e9eb',
                        borderRadius: 5,
                        borderWidth: 1, margin: 4, }}>
                          <View style={{paddingVertical: 10, paddingHorizontal: 20}}> 
                          <Text onPress={() => { }}
                            style={
                              {
                                
                                textAlign: 'center',
                                fontSize: 16
                              }
                            }
                          >{slot.Batteryname}</Text>
                          <Text style={{    textAlign: 'center', fontSize: 14, fontStyle: 'italic'}}>{slot.Batterycapacity}
                          </Text>
                          </View>
                         
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
const styles = StyleSheet.create({ container: { padding: 10 } })
export default Battery_Details
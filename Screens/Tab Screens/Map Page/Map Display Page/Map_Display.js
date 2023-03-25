import React, { useEffect, useState } from 'react'
import { Button, ScrollView } from 'react-native'
import { StyleSheet, View, Image } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons'
import ip from '../../../../ip.json'
import * as SecureStorage from 'expo-secure-store'
import { Divider, Text } from 'react-native-elements'
import TouchableScale from 'react-native-touchable-scale'

const image = { uri: "https://images.hindustantimes.com/img/2022/01/28/1600x900/4f422c8e-8072-11ec-862a-ad8c40546e4c_1643398983603.jpg" }
const Map_Display = ({ route, navigation }) => {
  const [Station, setStation] = useState([])
  
  async function getValueFor(key) {
    let result = await SecureStorage.getItemAsync(key);
    if (result) {
    } else {
    }
  }
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
    getValueFor('jwt-token')
    useEffect(() => {
      getStation(route.params.id)
    }, [])

    return (
      
      <View style={styles.container}>
        {Station ? (Station.map((item) => {
          return (
            <ScrollView key={item._id}>
              <Image style={{ height: 200, marginBottom: 10, borderRadius:20 }} source={image} >
              </Image>


              <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingHorizontal: 10, }}>
                <View>

                  <Text key={item.id} h4>{item.Stationname}</Text>
                  <Text key={item.id} style={styles.text_city}><Ionicons name='location' size={15} ></Ionicons> {item.City}</Text>
                  <Text key={item.id} style={styles.text_city}><Ionicons name='call' size={15}></Ionicons> {item.Phone}</Text>
                  <Text key={item.id} style={styles.text_city}><Ionicons name='calendar' size={15}></Ionicons> {Date()}</Text>
                  <Text style={styles.text_city}><Ionicons name='cash-outline' size={15}></Ionicons> Price/Unit:  {item.Priceperunit} Rs</Text>

                </View>
               
              </View>

              <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 20 }}>
                <View style={{ flex: 1, height: 1, backgroundColor: 'black' }} />
                <View>
                  <Text style={{ width: 150, textAlign: 'center', fontSize: 18 }}>Available Slots</Text>
                </View>
                <View style={{ flex: 1, height: 1, backgroundColor: 'black' }} />
              </View>

              <View style={{ padding: 4, flex: 1, flexDirection: 'row', flexWrap:'wrap',justifyContent:'space-between' }}>

                {
                  item.Slot.map((slot) => {
                    return (
                      <View key={slot._id} style={{ borderColor: '#cdcfd1', backgroundColor: '#f5fff7',
                      borderRadius: 5,
                      borderWidth: 1, marginTop:10  }}>
                        <View style={{paddingVertical: 10, paddingHorizontal: 32,}}> 
                        <Text onPress={() => { }}
                          style={
                            {
                              
                              textAlign: 'center',
                              fontSize: 18
                            }
                          }
                        >{slot.Slotname}</Text>
                        <Text style={{    textAlign: 'center', fontSize: 14, fontStyle: 'italic'}}>{slot.Connectortype}
                        </Text>
                        </View>
                       
                      </View>
                    )
                  })
                }
              </View>

<Divider/>
              <View style={{margin: 10, justifyContent:'center', alignContent:'center'}}>
                <Text style={{fontSize: 24, textAlign:'center'}}>Available Time</Text>
</View>                

              <View style={{ padding: 1, flexDirection: 'row' ,flexWrap:'wrap', justifyContent:'space-between'}}>
                {
                  item.Timeslot.map((slot) => {
                    return (
                      <View key={slot._id} style={{ borderColor: '#cdcfd1', backgroundColor: '#f2fffd',
                      borderRadius: 5,
                      borderWidth: 1, marginHorizontal: 1, marginVertical: 3 }}>
                        <Text onPress={() => { }}
                          style={
                            {
                            
                              textAlign: 'center',
                              fontSize: 16,
                              padding: 2
                            }
                          }
                        >{slot.Duration}</Text>
                      </View>
                    )
                  })
                }
              </View>
            <View style={{marginVertical: 10 , marginBottom:  60}}>              
            <Button title='Book' style={{marginTop: 10, height :30}}/>
</View>

            </ScrollView>
          )
        })) : (<Text>Chutiyap</Text>)}
      </View>)
  }
  const styles = StyleSheet.create(
    {
      container: {
        padding: 10,
        backgroundColor:'#fff'
      },
      text: {
        fontSize: 40,
        fontWeight: 'bold',
        paddingHorizontal: 20
      },
      text_city: {
        fontSize: 14,
        paddingHorizontal: 5,
      }
      ,
      selectButton:{
        padding: 10,
        backgroundColor: 'white',
        borderRadius: 10,
        textAlign:'center',
         margin: 10

      },
      text1:{
        fontSize: 15,
      
      },
      text2:{
        fontStyle:'italic',
        fontSize: 12
      }
    }
  )
  export default Map_Display
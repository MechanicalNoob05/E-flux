<<<<<<< HEAD
import React from 'react'
import { StyleSheet, View, Text, Button, ScrollView } from 'react-native'
=======
import React, { useEffect, useState } from 'react'
import { StyleSheet, View,Touchable, Button, ScrollView } from 'react-native'

import TouchableScale from 'react-native-touchable-scale'
import { Avatar, Icon, Image, ListItem, Text } from 'react-native-elements'
import Ionicons from 'react-native-vector-icons/Ionicons'
>>>>>>> 42bc93dbf6e7ed6e2f954d91184454b9caebb72f
import openMap from 'react-native-open-maps';
import { WebView } from 'react-native-webview';

const Chargeup = (props) => {
  
  const { navigation } = props
  const [Station, setStation] = useState([])

  const getStation = async () => {
    // Default options are marked with *
    const response = await fetch('http://192.168.0.247:3001/app/getstation', {
      method: "POST",
      headers: {
        "Content-type": "application/json;charset=UTF-8",
      },
      // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
      body: JSON.stringify({}) // body data type must match "Content-Type" header
    });
    const json5 = await response.json()
    // console.log(json5)
    if (json5.savedStation) {
      setStation(json5.savedStation)
    } else {
    }
  }
  useEffect(() => {
    getStation()
  }, [Station])
  
  return (

    <ScrollView style={styles.container}>
      <View style={styles.card}>

        <WebView
          originWhitelist={['*']}
          source={{ html: '<iframe src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d109905.47043106775!2d72.87619256101306!3d19.059801996601557!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1selectric%20charging%20station!5e0!3m2!1sen!2sin!4v1679593122445!5m2!1sen!2sin" width="100%" height="100%" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>' }} />
           </View>
        <View>
<<<<<<< HEAD
       

=======
          {
            Station.map((perticular_station)=>{
              return(
                <ListItem key={perticular_station._id} style={{ borderColor: '#f2f2f2', borderBottomWidth: 1, borderTopWidth: 1 }}
                onPress={()=>navigation.navigate('M_Display',{id:perticular_station._id})}

                Component={TouchableScale}
                friction={95} //
                tension={100} // These props are passed to the parent component (here TouchableScale)
                activeScale={0.95} >
                <Image source={'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1f/Dwayne_Johnson_2014_%28cropped%29.jpg/640px-Dwayne_Johnson_2014_%28cropped%29.jpg'} style={{ width: 40, height: 40 }}
                />
                <ListItem.Content>
                  <ListItem.Title>{perticular_station.Stationname}</ListItem.Title>
                  <ListItem.Subtitle>

                    <Ionicons name="location" style={{ width: 15 }} />
                    <Text>{perticular_station.City}</Text>


                  </ListItem.Subtitle>

                </ListItem.Content>
                <ListItem.Subtitle >{perticular_station.Priceperunit}</ListItem.Subtitle>
              </ListItem>
              )
            })
          }
>>>>>>> 42bc93dbf6e7ed6e2f954d91184454b9caebb72f
        </View>

    </ScrollView >)
}
const styles = StyleSheet.create({
  container: {
    minHeight: 100
  },
  card: {
    justifyContent: 'center',
    height: 700
  }
})
export default Chargeup
import React, { useState, useCallback, useRef, useEffect } from 'react';
import { Dimensions } from 'react-native';
import { StyleSheet, View, Button, ScrollView, FlatList } from 'react-native'
import { Input, SearchBar, Text } from 'react-native-elements';
import MapView, { Marker } from 'react-native-maps';
import Ionicons from 'react-native-vector-icons/Ionicons'
import Swiper from 'react-native-swiper';
import ip from '../../../../ip.json'

const { width, height } = Dimensions.get('window')
const Chargeup = (props) => {

  const { navigation } = props
  const [region, setRegion] = useState({
    latitude: 51.5079145,
    longitude: -0.0899163,
    latitudeDelta: 0.01,
    longitudeDelta: 0.01,
  });
  const Item = ({ title }) => (
    <View style={styles.item}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
  const list = [
    {
      StationName: 'Station1',
      longitude: 72.8778,
      latitude: 19.0760
    },
    {
      StationName: 'Station2',
      longitude: 72.8788,
      latitude: 19.0750
    },

  ]

  const [search, setSearch] = React.useState('');

  const [Station, setStation] = useState([])

  const getStation = async () => {
    // Default options are marked with *
    const response = await fetch(`http://${ip.ip}:3001/app/getstation`, {
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

    <View style={styles.container}>


      <MapView
        style={StyleSheet.absoluteFillObject}
        initialRegion={{
          latitude: 19.0760,
          longitude: 72.8777,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}>


        {
          Station.map((item) => {

            return (
              <Marker key={item._id} coordinate={{ latitude: parseFloat(item.Latitude), longitude: parseFloat(item.Longitude) }}
                title={item.Stationname} description={item.Description}>


              </Marker>

            )


          })
        }
        <Marker key={2} coordinate={{ latitude: 18.981239, longitude: 73.133338 }}></Marker>




      </MapView>
      <View style={styles.menu}>

        <Swiper loop={false}>

          {
            Station.map((item) => {
              return (

                <View style={styles.card} key={item._id}>
                  <Text h4 style={{ padding: 5 }} onPress={() => { navigation.navigate("M_Display", { id: item._id }) }}>
                    {item.Stationname}
                  </Text>

                  <View style={{
                    flex: 1, flexDirection: 'row',
                    flexWrap: 'wrap'
                  }}>

                    <Text><Ionicons name='location' />{item.City}  | </Text>
                    <Text> <Ionicons name='battery-charging' /> {item.Slot.length} Charging Ports</Text>
                  <Text style={styles.address}> <Ionicons name='battery-charging' /> {item.Stationaddress}</Text>
                  </View>

                </View>
              )



            })
          }

        </Swiper>
      </View>
      <View>

      </View>

    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    zIndex: 3,
    elevation: 3, // works on android
  },
  card: {
    backgroundColor: 'white',
    borderRadius: 15,
    margin: 10,
    padding: 10,
    height: 160,
    textAlign: 'center',
    justifyContent: 'center'

  },
  menu: {
    width: width,
    margin: 1,
    minHeight: 105,
    maxHeight: 200,
    bottom: 10,
    position: 'absolute',

  },
  address: {
    paddingTop:10,
  },
  map: {


  },


})

export default Chargeup
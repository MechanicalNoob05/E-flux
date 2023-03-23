import React, { useEffect, useState } from 'react'
import { StyleSheet, View, Text, Button } from 'react-native'
const Map_Display = ({ route, navigation }) => {
  const [Station, setStation] = useState([])

  const getStation = async (id) => {
    // Default options are marked with *
    const response = await fetch('http://192.168.0.247:3001/app/getstationid', {
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
      <Text style={styles.text}>{Station[0].Stationname}</Text>

      <Button title='='
        onPress={() => navigation.navigate('Chargeup')} />
    </View>)
}
const styles = StyleSheet.create({ container: { padding: 10 } })
export default Map_Display
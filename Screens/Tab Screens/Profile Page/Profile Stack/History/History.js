import { StyleSheet, View, Button } from 'react-native'
import { Text } from 'react-native-elements'
import Ionicons from 'react-native-vector-icons/Ionicons'
import * as SecureStorage from 'expo-secure-store';
import React, { useEffect } from 'react'
import ip from '../../../../../ip.json'


const History = (props) => {

  const { navigation } = props

  const [history, setHistory] = React.useState([])
  const [token, settoken] = React.useState('');
  async function getValueFor(key) {
    let result = await SecureStorage.getItemAsync(key);
    if (result) {
      settoken(result)
    } else {
    }
  }
  const getHistory = async (token) => {
    // Default options are marked with *
    const response = await fetch(`http://${ip.ip}:3001/app/gethistory`, {
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
    if (json5.savedhistory) {
      setHistory(json5.savedhistory)
      // console.log(json5)
      // alert(json5)
    } else {
      // alert(json5)
      // console.log(json5)
    }
  }
  useEffect(() => {
    getValueFor("jwt-token")
    getHistory(token)
  }, [token])
  console.log(history)
  return (
    <View style={styles.container}>
      <Text h4 style={{ textAlign: 'center' }}>View your Previous booking Section</Text>
      {
        history ? (
          history.map((slot) => {
            return (
              <View style={styles.card} key={slot._id}>
                <View style={styles.his}>
                  <Text h4 style={{ padding: 5 }}>
                    {slot.Station[0].Stationname}
                  </Text>
                  <Text style={styles.exp}>
                    Expired
                  </Text>
                </View>
                <Text> <Ionicons name='calendar-outline' /> {slot.Station[0].Stationname}</Text>
                <Text> <Ionicons name='calendar-outline' /> {slot.Station[0].Stationaddress}</Text>
              </View>
            )
          }))
          : (
            <View>

            </View>

          )
      }
    </View>)
}
const styles = StyleSheet.create(
  {
    container: {
      padding: 24
    },
    card: {
      marginTop: 20,
      padding: 20,
      backgroundColor: '#fff',
      borderRadius: 15,
      marginBottom: 10
    },
    his:{
      flexDirection:'row',
      justifyContent:'space-between',
      textAlign:'center',
      textAlignVertical:'center'
    },
    exp:{
      backgroundColor:'#ffd1d1',
      textAlign:'center',
      padding:15,
      borderRadius:50
    }
  }
)
export default History
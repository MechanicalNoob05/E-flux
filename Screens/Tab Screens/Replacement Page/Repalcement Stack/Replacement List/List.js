import { ScrollView, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Avatar, Icon, Image, ListItem, Text } from 'react-native-elements'
import { StyleSheet } from 'react-native'
import TouchableScale from 'react-native-touchable-scale'
import Ionicons from 'react-native-vector-icons/Ionicons'
import ip from '../../../../../ip.json'

const List = (props) => {

  const { navigation } = props
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
    <ScrollView>
      <View style={styles.container}>
        <View>
          {

            Station.map((item) => (
              <ListItem key={item._id} style={{ borderColor: '#f2f2f2', borderBottomWidth: 1, borderTopWidth: 1 }}
                onPress={()=>navigation.navigate('Battery_Detail',{id:item._id})}

                Component={TouchableScale}
                friction={95} //
                tension={100} // These props are passed to the parent component (here TouchableScale)
                activeScale={0.95} >
                
                <ListItem.Content>
                  <ListItem.Title>{item.Stationname}</ListItem.Title>
                  <ListItem.Subtitle>

                    <Ionicons name="location" style={{ width: 15 }} />
                    <Text>{item.City}</Text>


                  </ListItem.Subtitle>

                </ListItem.Content>
                <ListItem.Subtitle >350m</ListItem.Subtitle>
              </ListItem>



            ))
          }
        </View>
      </View>
      <Text style={{textAlign:'center'}}>End of The List</Text>
    </ScrollView>
  )
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    marginVertical: 10

  }
})

export default List
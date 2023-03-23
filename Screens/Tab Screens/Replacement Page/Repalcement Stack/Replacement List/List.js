import { ScrollView, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Avatar, Icon, Image, ListItem, Text } from 'react-native-elements'
import { StyleSheet } from 'react-native'
import TouchableScale from 'react-native-touchable-scale'
import Ionicons from 'react-native-vector-icons/Ionicons'

const List = (props) => {

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
                <Image source={'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1f/Dwayne_Johnson_2014_%28cropped%29.jpg/640px-Dwayne_Johnson_2014_%28cropped%29.jpg'} style={{ width: 40, height: 40 }}
                />
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
    </ScrollView>
  )
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    padding: 10,

  }
})

export default List
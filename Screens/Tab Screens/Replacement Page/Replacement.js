import { ScrollView, View } from 'react-native'
import React from 'react'
import { Avatar, Icon, Image, ListItem, Text } from 'react-native-elements'
import { StyleSheet } from 'react-native'
import TouchableScale from 'react-native-touchable-scale'
import Ionicons from 'react-native-vector-icons/Ionicons'

const Replacement = () => {
  const list1 = [
    {
      name: 'Amy Farha',
      uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1f/Dwayne_Johnson_2014_%28cropped%29.jpg/640px-Dwayne_Johnson_2014_%28cropped%29.jpg',
      location: 'Panvel'

    },
    {
      name: 'Chris Jackson',
      uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1f/Dwayne_Johnson_2014_%28cropped%29.jpg/640px-Dwayne_Johnson_2014_%28cropped%29.jpg',
      location: 'Panvel'
    },
    {
      name: 'Amy Farha',
      uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1f/Dwayne_Johnson_2014_%28cropped%29.jpg/640px-Dwayne_Johnson_2014_%28cropped%29.jpg',
      location: 'Panvel'

    },
    {
      name: 'Chris Jackson',
      uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1f/Dwayne_Johnson_2014_%28cropped%29.jpg/640px-Dwayne_Johnson_2014_%28cropped%29.jpg',
      location: 'Panvel'
    },

    {
      name: 'Amy Farha',
      uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1f/Dwayne_Johnson_2014_%28cropped%29.jpg/640px-Dwayne_Johnson_2014_%28cropped%29.jpg',
      location: 'Panvel'

    },
    {
      name: 'Chris Jackson',
      uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1f/Dwayne_Johnson_2014_%28cropped%29.jpg/640px-Dwayne_Johnson_2014_%28cropped%29.jpg',
      location: 'Panvel'
    },

    {
      name: 'Amy Farha',
      uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1f/Dwayne_Johnson_2014_%28cropped%29.jpg/640px-Dwayne_Johnson_2014_%28cropped%29.jpg',
      location: 'Panvel'

    },
    {
      name: 'Chris Jackson',
      uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1f/Dwayne_Johnson_2014_%28cropped%29.jpg/640px-Dwayne_Johnson_2014_%28cropped%29.jpg',
      location: 'Panvel'
    },

    {
      name: 'Amy Farha',
      uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1f/Dwayne_Johnson_2014_%28cropped%29.jpg/640px-Dwayne_Johnson_2014_%28cropped%29.jpg',
      location: 'Panvel'

    },
    {
      name: 'Chris Jackson',
      uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1f/Dwayne_Johnson_2014_%28cropped%29.jpg/640px-Dwayne_Johnson_2014_%28cropped%29.jpg',
      location: 'Panvel'
    },

    {
      name: 'Amy Farha',
      uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1f/Dwayne_Johnson_2014_%28cropped%29.jpg/640px-Dwayne_Johnson_2014_%28cropped%29.jpg',
      location: 'Panvel'

    },
    {
      name: 'Chris Jackson',
      uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1f/Dwayne_Johnson_2014_%28cropped%29.jpg/640px-Dwayne_Johnson_2014_%28cropped%29.jpg',
      location: 'Panvel'
    },
  ]

  return (
    <ScrollView>
      <View style={styles.container}>
        <Text h5 style={{ textAlign: 'center' }}>Click to See Nearby Charging Stations</Text>
        <View>
          {

            list1.map((item, i) => (
              <ListItem key={i} style={{ borderColor: '#f2f2f2', borderBottomWidth: 1, borderTopWidth: 1 }}
                // onPress={()=>navigation.navigate(item.link)}

                Component={TouchableScale}
                friction={95} //
                tension={100} // These props are passed to the parent component (here TouchableScale)
                activeScale={0.95} >
                <Image source={item.avatar_url} style={{ width: 40, height: 40 }}
                />
                <ListItem.Content>
                  <ListItem.Title>{item.name}</ListItem.Title>
                  <ListItem.Subtitle>

                    <Ionicons name="location" style={{ width: 15 }} />
                    <Text>{item.location}</Text>


                  </ListItem.Subtitle>

                </ListItem.Content>
                <ListItem.Subtitle >350m</ListItem.Subtitle>
              </ListItem>



            ))
          }
        </View>


      </View>
      <Text style={{ textAlign: 'center' }}>End of the List</Text>
    </ScrollView>
  )
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    padding: 10,

  }
})

export default Replacement
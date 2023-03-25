import React, { useState, useCallback, useRef } from 'react';
import { Dimensions } from 'react-native';
import { StyleSheet, View, Button, ScrollView,FlatList } from 'react-native'
import { Input, SearchBar, Text } from 'react-native-elements';
import MapView, { Marker } from 'react-native-maps';
import Ionicons from 'react-native-vector-icons/Ionicons'

const {width, height} = Dimensions.get('window')
const Chargeup = () => {

  const [region, setRegion] = useState({
    latitude: 51.5079145,
    longitude: -0.0899163,
    latitudeDelta: 0.01,
    longitudeDelta: 0.01,
  });
  const Item = ({title}) => (
    <View style={styles.item}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
  const list =[
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

const [search , setSearch] = React.useState('');
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

          <Marker key={1} coordinate={{latitude: 19.0761, longitude: 72.8788}}
           title="Mumbai" description='This is Mumbairr'>

            
           </Marker>
          <Marker key={2} coordinate={{latitude: 18.981239, longitude: 73.133338}}></Marker>

      
        
      
    </MapView>

    <View style={styles.menu}>
    <View style={styles.card}>
            <Text h4 style={{padding: 5}}>
              Manish Garage Electric Charging Station 
            </Text>
           
           <View style={{flex:1 , flexDirection: 'row',
    flexWrap: 'wrap'}}>
      
             <Text><Ionicons name='location'/>Panvel  | </Text> 
              <Text> <Ionicons name='battery-charging'/> 5 Charging Ports</Text>
           </View>
            
            </View>
    </View>
<View>

</View>
   
        </View>
        )
}
const styles = StyleSheet.create({
  container: {
flex:1,
zIndex: 3,
elevation: 3, // works on android
 },
 card:{
  backgroundColor:'white',
  borderRadius: 15,
  margin: 10,
  padding: 10


},
 menu:{
  width: width,
  margin: 1,
  minHeight: 105,
 maxHeight: 200,
  bottom: 10,
  position: 'absolute',

 },
  map:{


  },


})

export default Chargeup
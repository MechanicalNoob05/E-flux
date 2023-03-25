import React, { useState, useCallback, useRef } from 'react';
import { Dimensions } from 'react-native';
import { StyleSheet, View, Button, ScrollView,FlatList } from 'react-native'
import { Input, SearchBar, Text } from 'react-native-elements';
import MapView, { Marker } from 'react-native-maps';

const {width, height} = Dimensions.get('window')
const Chargeup = () => {
  const DATA = [
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      title: 'First Item',
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      title: 'Second Item',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      title: 'Third Item',
    },
  ];
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

    <SearchBar placeholder='Search...' lightTheme='1' value={search} onChangeText={setSearch} />
    <View style={styles.menu}>
    <FlatList
        data={DATA}
        renderItem={({item}) => <Item title={item.title} />}
        keyExtractor={item => item.id}
      />

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
 menu:{
  padding: 20,
  width: width,
  margin: 1,
  height: 10,
  backgroundColor: 'red',
  bottom: 10,
  position: 'absolute',

 },
  map:{


  },

  card: {
    justifyContent: 'center',
    height: 700
  }
})

export default Chargeup
import React from 'react'
import { StyleSheet, View, Text, Button} from 'react-native'
import Mapbox from '@rnmapbox/maps';

Mapbox.setAccessToken('pk.eyJ1IjoidGhlZGlzY291bnRjb3Vwb24iLCJhIjoiY2xmOHI1NDRxMDE3ZDN4cWtlejY3ZGxuMiJ9.4YSA8wKeiyoPuNvSHNH1FA');

const Chargeup = (props) => {

  const { navigation } = props
    return (
        <View style={styles.container}>
            {/* <Text style={styles.text}>Chargeup Screen</Text>
            
            <Button title='='
                onPress={() => navigation.navigate('M_Display')} /> */}
                 <View style={styles.page}>
      <View style={styles.container}>
        <Mapbox.MapView style={styles.map} />
      </View>
    </View>
        </View>)
}
const styles = StyleSheet.create({ container: { padding: 24 },   page: {
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
},
container: {
  height: 300,
  width: 300,
},
map: {
  flex: 1
}
})
export default Chargeup
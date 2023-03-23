import React from 'react'
import { StyleSheet, View, Text, Button } from 'react-native'
import openMap from 'react-native-open-maps';

const Chargeup = (props) => {
  const map = () => {

    openMap(
      {
        start: 'Plot No - 35, opp. Ganesh Mandir, Sector-5, Kharghar, Navi Mumbai, Maharashtra 410210',
        end: "Plot No. 46, near MSEB Sub Station, Sector-5, Kharghar, Navi Mumbai, Maharashtra 410210",
        travelType: 'drive',
        navigate: true
      }
    )
  }
  return (
    <View style={styles.container}>
      {/* <Text style={styles.text}>Chargeup Screen</Text>
            
            <Button title='='
                onPress={() => navigation.navigate('M_Display')} /> */}
      <Button onPress={map} title='Tu dabake to dekh isko'></Button>

    </View>)
}
const styles = StyleSheet.create({
  container: {
    padding: 24,
    justifyContent: 'center',
    height: '100%'
  }

})
export default Chargeup
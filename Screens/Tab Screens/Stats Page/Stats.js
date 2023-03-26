import React from 'react'
import { Dimensions, Image } from 'react-native'
import { StyleSheet, View, Text } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
import Ionicons from 'react-native-vector-icons/Ionicons'

const Stats = (props) => {

  const { navigation } = props
  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.imageContainer}>
          <View style={styles.imageWrapper}>
            <Image source={{ uri: 'https://i.ibb.co/PCfmFd3/gradient.png' }} style={styles.image} />
          </View>
<Image source={{uri:'https://i.ibb.co/mS3Qq3F/camelo.png'}} style={{ width: 250, height: 190 ,  marginTop: -115, }} />
        </View>
        <View style={{ flex: 1, padding: 15, flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between' }}>
          <View style={{ padding: 35, backgroundColor: 'white', borderRadius: 15, shadowColor: '#f3f3f3', justifyContent:'center', textAlign: 'center'}}>
        
            <Text style={styles.cardtitle}><Ionicons name='car-sport' style={{fontSize: 24}} /> Mileage</Text>
            <Text style={styles.cardtitle1}>12 KM/L</Text>

          </View>
          <View style={{ padding: 35, backgroundColor: 'white', borderRadius: 15, shadowColor: '#f3f3f3', justifyContent:'center', textAlign: 'center'}}>
        
        <Text style={styles.cardtitle}><Ionicons name='speedometer-outline' style={{fontSize: 24}} /> Speed</Text>
        <Text style={styles.cardtitle1}>200 KM/Hr</Text>

      </View>
        </View>
        <View style={{ flex: 1, padding: 15, flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between' }}>
        <View style={{ padding: 35, backgroundColor: 'white', borderRadius: 15, shadowColor: '#f3f3f3', justifyContent:'center', textAlign: 'center'}}>
        
        <Text style={styles.cardtitle}><Ionicons name='speedometer-outline' style={{fontSize: 24}} /> Speed</Text>
        <Text style={styles.cardtitle1}>200 KM/Hr</Text>

      </View>
      <View style={{ padding: 35, backgroundColor: 'white', borderRadius: 15, shadowColor: '#f3f3f3', justifyContent:'center', textAlign: 'center'}}>
        
        <Text style={styles.cardtitle}><Ionicons name='speedometer-outline' style={{fontSize: 24}} /> Speed</Text>
        <Text style={styles.cardtitle1}>200 KM/Hr</Text>

      </View>
      
        </View>
        <View style={{backgroundColor: '#000', color: 'white' ,borderRadius: 15, padding: 20,margin: 10}}>

<Text style={{color: 'white', fontSize: 20}}>
  <Ionicons  name='car' style={{fontSize: 20}}/> More information
</Text>
<Text style={{fontSize: 15, color: 'white'}}> <Ionicons name='aperture-outline' style={{fontSize: 15}}/>  360 Steering </Text>
</View>

      </View>

    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imageContainer: {
    alignItems: 'center',
  },
  cardtitle:{
    fontSize:18,
    
  },cardtitle1:{
    fontSize: 18,
    fontWeight: "900",
    textAlign:'center'
  },
  image: {
    width: windowWidth,
    height: windowHeight / 2,
    marginTop: -(windowHeight / 4),
    borderRadius: 125, // half of the image width
    backgroundColor: 'transparent'
  }
}); export default Stats
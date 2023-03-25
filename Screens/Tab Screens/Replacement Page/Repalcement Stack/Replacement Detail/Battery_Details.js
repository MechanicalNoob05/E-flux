import React, { useEffect, useState } from 'react'
import { Dimensions, Image } from 'react-native'
import { StyleSheet, View, Button, ScrollView } from 'react-native'
import { Dialog, Text,CheckBox} from 'react-native-elements'
import Ionicons from 'react-native-vector-icons/Ionicons'
import ip from '../../../../../ip.json'
import { SelectList } from 'react-native-dropdown-select-list'

const image = { uri: "https://images.hindustantimes.com/img/2022/01/28/1600x900/4f422c8e-8072-11ec-862a-ad8c40546e4c_1643398983603.jpg" }
const Battery_Details = ({ route, navigation }) => {
    const toggleDialog5 = () => {
        setVisible5(!visible5);
      };
      const [selected, setSelected] = React.useState("");

      const [visible5, setVisible5] = useState(false);
      const [checked, setChecked] = useState(1);

    const [Station, setStation] = useState([])

    const getStation = async (id) => {
        // Default options are marked with *
        const response = await fetch(`http://${ip.ip}:3001/app/getstationid`, {
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

    const data = [
        {key:'1', value:'Mobiles', disabled:true},
        {key:'2', value:'Appliances'},
        {key:'3', value:'Cameras'},
        {key:'4', value:'Computers', disabled:true},
        {key:'5', value:'Vegetables'},
        {key:'6', value:'Diary Products'},
        {key:'7', value:'Drinks'},
    ]
    return (
      
        <View style={styles.container}>
          {Station ? (Station.map((item) => {
            return (
              <ScrollView key={item._id}>
                <Image style={{ height: 200, marginBottom: 10, borderRadius: 15 }} source={image} >
                </Image>
  
  
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingHorizontal: 10, }}>
                  <View>
  
                    <Text key={item.id} h4>{item.Stationname}</Text>
                    <Text key={item.id} style={styles.text_city}><Ionicons name='location' size={15} ></Ionicons> {item.City}</Text>
                    <Text key={item.id} style={styles.text_city}><Ionicons name='call' size={15}></Ionicons> {item.Phone}</Text>
                    <Text key={item.id} style={styles.text_city}><Ionicons name='calendar' size={15}></Ionicons> {Date()}</Text>
                    <Text style={styles.text_city}><Ionicons name='cash-outline' size={15}></Ionicons> Price/Unit:  {item.Priceperunit} Rs</Text>

                  </View>
                 
                </View>
  
                <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 20 }}>
                  <View style={{ flex: 1, height: 1, backgroundColor: 'black' }} />
                  <View>
                    <Text style={{ width: 150, textAlign: 'center', fontSize: 18 }}>Available Batteries</Text>
                  </View>
                  <View style={{ flex: 1, height: 1, backgroundColor: 'black' }} />
                </View>
  
                <View style={{ padding: 10, flex: 1, flexDirection: 'row', flexWrap:'wrap', }}>
  
                  {
                    item.Battery.map((slot) => {
                      return (
                        <View key={slot._id} style={{ borderColor: '#cdcfd1', backgroundColor: '#ebf7ee', textAlign:'center', alignContent:'center',
                        borderRadius: 5,
                        borderWidth: 1, margin: 2, }}>
                          <View style={{width: 150}}> 
                          <Text onPress={() => { }}
                            style={
                              {
                                paddding: 2,
                                textAlign: 'center',
                                fontSize: 16
                              }
                            }
                          >{slot.Batteryname}</Text>
                          <Text style={{textAlign: 'center', fontSize: 14, fontStyle: 'italic'}}>
                            {slot.Batterycapacity}
                          </Text>
                          </View>
                         
                        </View>
                      )
                    })
                  }
                </View>
  
  
 <View style={{marginVertical: 10, marginBottom: 30}}>
<Button title="Book"  onPress={toggleDialog5}/></View>

<Dialog
      isVisible={visible5}
      onBackdropPress={toggleDialog5}
    >
      <Dialog.Title title="Select Preference"/>
      <SelectList 
        setSelected={(val) => setSelected(val)} 
        data={data} 
        save="value"
    />

      <Dialog.Actions>
        <Dialog.Button
          title="CONFIRM"
          onPress={() => {
            console.log(`Option ${checked} was selected!`);
            toggleDialog5();
          }}
        />
        <Dialog.Button title="CANCEL" onPress={toggleDialog5} />
      </Dialog.Actions>
    </Dialog>
              </ScrollView>
            )
          })) : (<Text>Chutiyap</Text>)}
        </View>)
}
const styles = StyleSheet.create({ container: { padding: 10, backgroundColor: 'white' } })
export default Battery_Details
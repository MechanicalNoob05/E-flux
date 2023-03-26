import React, { useEffect } from 'react'
import { StyleSheet, View } from 'react-native'
import { Text } from 'react-native-elements'
import { Input, Button } from '@rneui/themed';
import { ScrollView } from 'react-native';
import * as SecureStorage from 'expo-secure-store';
import ip from '../../../../../ip.json'

const Account = (props) => {
  const [firstname, onChangeFirstName] = React.useState('');
  const [lastname, onChangeLastName] = React.useState('');
  const [phone, onChangePhnoName] = React.useState('');
  const [carno, onChangeCarno] = React.useState('');

  const { navigation } = props

  const [token, settoken] = React.useState('');
  const [data, setdata] = React.useState('');
  const Accountdetails = async (token) => {
    // Default options are marked with *
    const response = await fetch(`http://${ip.ip}:3001/app/getcustomer`, {
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
    if (json5.savedcustomer) {
      setdata(json5.savedcustomer)
    } else {
    }
  }
  const changeAccountdetails = async (token,Firstname,Lastname,Phonenumber,Carnumber) => {
    // Default options
    const response = await fetch(`http://${ip.ip}:3001/app/update`, {
      method: "POST",
      headers: {
        "Content-type": "application/json;charset=UTF-8",
        "auth-token": token
      },
      // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
      body: JSON.stringify({Firstname,Lastname,Phonenumber,Carnumber}) // body data type must match "Content-Type" header
    });
    const json5 = await response.json()
    // console.log(json5)
    if (json5.savedUser) {
      setdata(json5.savedUser)
      alert('successful')
    } else {
      console.log(json5.err)
    }
  }
  const handleconfirm = (e) => {
    e.preventDefault();
    changeAccountdetails(token,firstname,lastname,phone,carno)
  }
  async function getValueFor(key) {
    let result = await SecureStorage.getItemAsync(key);
    if (result) {
      settoken(result)
    } else {
    }
  }
  useEffect(() => {
    getValueFor('jwt-token')
    Accountdetails(token)
  }, [token])

  return (
    <ScrollView>
      <View style={styles.container}>
        <Text h4 style={styles.text}> Edit Account Information</Text>
        <View>

          <Input
            placeholder={data.Firstname}
            leftIcon={{ type: 'font-awesome', name: 'user-circle-o', size: 20 }}
            onChangeText={onChangeFirstName}
            value={firstname}
          />
          <Input
            placeholder={data.Lastname}
            leftIcon={{ type: 'font-awesome', name: 'user-circle-o', size: 20 }}
            onChangeText={onChangeLastName}
            value={lastname}
          />
          <Input
            placeholder={data.Phonenumber}
            leftIcon={{ type: 'font-awesome', name: 'phone-square', size: 20 }}
            value={phone}
            onChangeText={onChangePhnoName}/>
          <Input
            placeholder={data.Carnumber}
            leftIcon={{ type: 'font-awesome', name: 'car', size: 20 }}
            value={carno}
            onChangeText={onChangeCarno}
          />



        </View>
        <Button radius={'sm'} type="solid" onPress={handleconfirm}>
          Save Changes
        </Button>

      </View>
    </ScrollView>
  )
}
const styles = StyleSheet.create({ container: { padding: 24 } })
export default Account
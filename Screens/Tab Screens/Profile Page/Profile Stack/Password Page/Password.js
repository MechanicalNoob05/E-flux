import React, { useEffect } from 'react'
import { StyleSheet, View, Text, Button, TextInput } from 'react-native'
import * as SecureStorage from 'expo-secure-store';
import ip from '../../../../../ip.json'


const Password = (props) => {

  const { navigation } = props
  const [token, settoken] = React.useState('');
  async function getValueFor(key) {
    let result = await SecureStorage.getItemAsync(key);
    if (result) {
      settoken(result)
    } else {
    }
  }


  const [Newpassword, onChangeNpass] = React.useState('');
  const [oldpassword, onChangeOpass] = React.useState('');

  useEffect(() => {
    getValueFor("jwt-token")
  }, [token])


  const changePassword = async (token, Newpassword, oldpassword) => {
    // Default options are marked with *
    const response = await fetch(`http://${ip.ip}:3001/app/changepassword`, {
      method: "POST",
      headers: {
        "Content-type": "application/json;charset=UTF-8",
        "auth-token": token
      },
      // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
      body: JSON.stringify({ Newpassword, oldpassword }) // body data type must match "Content-Type" header
    });
    const json5 = await response.json()


    // console.log(json5)
    if (json5.savedUser) {
      alert('Password Change Sucessful')
      navigation.navigate('Profile')
    } else {
      alert("Incorrect info")
    }
  }

  const handleclick = (e) => {
    e.preventDefault();
    changePassword(token,Newpassword, oldpassword)
  }
  return (

    <View style={styles.container}>
      <View style={styles.inputview}>
        <Text for="fname">Password</Text>
        <TextInput
          secureTextEntry={true}
          placeholder='**********'
          label='First Name'
          style={styles.input}
          onChangeText={onChangeOpass}
          value={oldpassword}
        />
      </View>

      <View style={styles.inputview}>
        <Text for="fname">Password</Text>
        <TextInput
          secureTextEntry={true}
          placeholder='**********'
          label='First Name'
          style={styles.input}
          onChangeText={onChangeNpass}
          value={Newpassword}
        />
      </View>
      <View style={styles.inputview}>
        <Text for="fname">Confirm password</Text>
        <TextInput
          style={styles.input}
          secureTextEntry={true}
        />
      </View>
      <View style={{ marginTop: 20, height: 50 }}>
        <Button
          style={{ height: 50, }}
          title="Change Password"
          onPress={handleclick}
        />
      </View>
    </View>)
}
const styles = StyleSheet.create(
  {
    container: {
      marginTop: '10%',
      padding: 24,

    },
    inputview: {
      marginTop: 10,
    },

    input: {
      height: 40,
      borderWidth: 1,
      borderColor: '#f8f8f8',
      backgroundColor: '#e8e8e8',

      padding: 10,
      borderRadius: 5
    },
  }
)
export default Password
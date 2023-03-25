import React from 'react'
import { Image, StatusBar } from 'react-native'
import { ScrollView } from 'react-native'
import { SafeAreaView } from 'react-native'
import { TextInput } from 'react-native'
import { StyleSheet, View, Text, Button } from 'react-native'
const Signup = (props) => {
  const [Password, onChangePass] = React.useState('');
  const [Phonenumber, onChangePhone] = React.useState('');
  
  const [Firstname, onChangeText] = React.useState('');
  const [Lastname, onChangeName] = React.useState('');
  const [Carname, onChangeCar] = React.useState('');
  const [Carnumber, onChangeCarnumber] = React.useState('');
  const [Cartype,onChangeCartype] = React.useState('')
  const [Carmodel,onChangeCarmodel] = React.useState('')


  const handleclick = (e) => {
    e.preventDefault();
    Signup(Firstname,Lastname,Phonenumber, Carname,Carmodel,Carnumber,Cartype,Password)
  }
  const Signup = async (Firstname,Lastname,Phonenumber, Carname,Carmodel,Carnumber,Cartype,Password) => {
    // Default options are marked with *
    const response = await fetch('http://192.168.43.113:3001/app/addcustomer', {
      method: "POST",
      headers: {
        "Content-type": "application/json;charset=UTF-8",
      },
      // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
      body: JSON.stringify({ Firstname,Lastname,Phonenumber, Carname,Carmodel,Carnumber,Cartype,Password }) // body data type must match "Content-Type" header
    });
    const json5 = await response.json()
    // console.log(json5)
    if (json5.savedCustomer) {
      navigation.navigate('Login')
    } else {
      console.log(json5)
      alert("invalid")
    }
  }
  const { navigation } = props
  return (
    <ScrollView>
      <SafeAreaView>

        <View style={styles.container}>

          <StatusBar
            auto
            animated={true}
            backgroundColor="#61dafb"

          />

          <Text style={styles.text}>Hello 👋, {Firstname}</Text>
          <Text style={styles.text2}>Create a New Account</Text>
          {/* First Name */}
          <View style={styles.inputview}>
            <Text for="fname">First Name</Text>
            <TextInput
              placeholder='John'
              label='First Name'
              style={styles.input}
              onChangeText={onChangeText}
              value={Firstname}
            />
          </View>
          {/* Last Name */}
          <View style={styles.inputview}>
            <Text for="fname">Last Name</Text>
            <TextInput
              placeholder='Doe'
              label='First Name'
              style={styles.input}
              onChangeText={onChangeName}
              value={Lastname}
            />
          </View>
          {/* Mobile */}
          <View style={styles.inputview}>
            <Text for="fname">Phone Number</Text>
            <TextInput
              placeholder='+91 91341656'
              label='First Name'
              keyboardType="numeric"

              style={styles.input}
              onChangeText={onChangePhone}
              value={Phonenumber}
            />
          </View>

          {/* Car number */}
          <View style={styles.inputview}>
            <Text for="fname">Car number</Text>
            <TextInput
              placeholder='Car Number'
              label='First Name'
              style={styles.input}
              onChangeText={onChangeCarnumber}
              value={Carnumber}
            />
          </View>

          {/* Car Name */}
          <View style={styles.inputview}>
            <Text for="fname">Car Name</Text>
            <TextInput
              placeholder='Car Name'
              label='First Name'
              style={styles.input}
              onChangeText={onChangeCar}
              value={Carname}
            />
          </View>

          {/* car type */}
          <View style={styles.inputview}>
            <Text for="fname">Car Type</Text>
            <TextInput
              placeholder='Car Type'
              label='First Name'
              style={styles.input}
              onChangeText={onChangeCartype}
              value={Cartype}
            />
          </View>

          {/* car model*/}
          <View style={styles.inputview}>
            <Text for="fname">Car Model</Text>
            <TextInput
              placeholder='Car Model'
              label='First Name'
              style={styles.input}
              onChangeText={onChangeCarmodel}
              value={Carmodel}
            />
          </View>

          {/* Password */}
          <View style={styles.inputview}>
            <Text for="fname">Password</Text>
            <TextInput
              secureTextEntry={true}
              placeholder='**********'
              label='First Name'
              style={styles.input}
              onChangeText={onChangePass}
              value={Password}
            />
          </View>
          <View style={{ marginTop: 20, height: 50 }}>
            <Button
              style={
                {
                  height: 50,

                }
              }
              title="Sign Up"
              onPress={handleclick}
            />
          </View>

          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <View style={{ flex: 1, height: 1, backgroundColor: 'black' }} />
            <View>
              <Text style={{ width: 50, textAlign: 'center' }}>or</Text>
            </View>
            <View style={{ flex: 1, height: 1, backgroundColor: 'black' }} />
          </View>

          <View>
            <Text style={{ textAlign: 'center' }}>Already Have an Account? <Text style={{ color: 'blue' }} onPress={() => navigation.navigate('Login')}>Sign In</Text></Text>

          </View>

        </View>

      </SafeAreaView>

    </ScrollView>
  )
}
const styles = StyleSheet.create({
  button: {
    height: 10,
  },
  inputview: {
    marginTop: 10,
  },
  container: {
    padding: 24
  },
  text: {
    top: 20,
    fontSize: 30,
    textAlign: 'center',
  },
  text2: {
    padding: 20,
    fontSize: 25,
    fontWeight: 400,
    textAlign: 'center',
  },
  input: {
    height: 40,
    borderWidth: 1,
    borderColor: '#f8f8f8',
    backgroundColor: '#e8e8e8',

    padding: 10,
    borderRadius: 5
  },
})
export default Signup
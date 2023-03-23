import React from 'react'
import { Image, StatusBar } from 'react-native'
import { ScrollView } from 'react-native'
import { SafeAreaView } from 'react-native'
import { TextInput } from 'react-native'
import { StyleSheet, View, Text, Button } from 'react-native'

const Signup = (props) => {
  const [phone, onChangePhone] = React.useState('');
  const [pass, onChangePass] = React.useState('');

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
          <Text style={styles.text}>Tap into Charging World with Single Touch</Text>

          <Text style={styles.text2}>Login</Text>

          {/* Mobile */}
          <View style={styles.inputview}>
            <Text for="fname">Phone Number</Text>
            <TextInput
              placeholder='+91 91341656'
              label='First Name'
              keyboardType="numeric"

              style={styles.input}
              onChangeText={onChangePhone}
              value={phone}
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
              value={pass}
            />
          </View>
          <View style={{ marginTop: 20, height: 50 }}>
            <Button
              style={
                {
                  height: 50,

                }
              }
              onPress={() => navigation.navigate('Home')}
              title="Sign In"
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
            <Text style={{ textAlign: 'center' }}>Don't Have an Account? <Text style={{ color: 'blue' }} onPress={() => navigation.navigate('Signup')}>Sign Up</Text></Text>

          </View>

          <View>
            <Text style={{ textAlign: 'center' }}>Admin entry? <Text style={{ color: 'blue' }} onPress={() => navigation.navigate('Admin')}>Login</Text></Text>

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
    fontSize: 15,
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
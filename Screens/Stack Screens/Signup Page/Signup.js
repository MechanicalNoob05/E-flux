import React from 'react'
import { Image, StatusBar } from 'react-native'
import { ScrollView } from 'react-native'
import { SafeAreaView } from 'react-native'
import { TextInput } from 'react-native'
import { StyleSheet, View, Text, Button} from 'react-native'
const Signup = (props) => {
  const [text, onChangeText] = React.useState('');
  const [name, onChangeName] = React.useState('');
  const [phone, onChangePhone] = React.useState('');
  const [car, onChangeCar] = React.useState('');
  const [carnumber, onChangeCarnumber] = React.useState('');
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
      
            <Text style={styles.text}>Hello 👋, {text}</Text>
            <Text style={styles.text2}>Create a New Account</Text>
{/* First Name */}
            <View style={styles.inputview}>
            <Text for="fname">First Name</Text>
            <TextInput
            placeholder='John'
            label='First Name'
        style={styles.input}
        onChangeText={onChangeText}
        value={text}
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
        value={name}
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
        value={phone}
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
        value={carnumber}
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
        value={car}
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
<View style={{marginTop: 20, height: 50}}>
<Button
      style={
        { 
          height: 50,
          
        }
      }
  title="Sign Up"
/>
</View>

<View style={{flexDirection: 'row', alignItems: 'center'}}>
  <View style={{flex: 1, height: 1, backgroundColor: 'black'}} />
  <View>
    <Text style={{width: 50, textAlign: 'center'}}>or</Text>
  </View>
  <View style={{flex: 1, height: 1, backgroundColor: 'black'}} />
</View>

<View>
<Text  style={{textAlign:'center'}}>Already Have an Account? <Text style={{color: 'blue'}} onPress={() => navigation.navigate('Login')}>Sign In</Text></Text>

</View>

        </View>

        </SafeAreaView>

        </ScrollView>
        )
}
const styles = StyleSheet.create({ 
  button:{
    height: 10,
  
  

  },
  inputview:{
    marginTop: 10,
  },
  container: { 
    padding: 24
   },
  text:{
    top: 20,
    fontSize: 30,
    textAlign: 'center',
  },
  text2:{
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
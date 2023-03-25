import React from 'react'
import { ScrollView } from 'react-native'
import { StyleSheet, View, Text, Button, TextInput } from 'react-native'
import { Divider } from 'react-native-elements'
import Ionicons from 'react-native-vector-icons/Ionicons'

const Contact = (props) => {

  return (
    <ScrollView>
    <View style={styles.container}>
      <Text style={{fontSize: 20, textAlign:'center'}}>Contact Us</Text>

      <View style={styles.inputview}>
        <Text for="fname">Your Name</Text>
        <TextInput
          style={styles.input}
          secureTextEntry={true}
        />
      </View>

      <View style={styles.inputview}>
        <Text for="fname">Email Address</Text>
        <TextInput
          style={styles.input}
          secureTextEntry={true}
        />
      </View>

      <View style={styles.inputview}>
        <Text for="fname">Comments</Text>
        <TextInput
        multiline
        numberOfLines={4}

          style={styles.input2}
        />
      </View>
      <View style={{ marginTop: 20, height: 50 }}>
        <Button
          style={{ height: 50,}}
          title="Send"
        />
      </View>
      <Divider/>
<View style={{padding: 10,  textAlign: 'center'}}>
  <Text style={{fontSize: 16, textAlign: 'center'}}><Ionicons name='mail-outline' style={{fontSize: 18, color: 'blue'}} /> customercare@eflux.com </Text>
  <Text style={{fontSize: 16, textAlign: 'center'}}><Ionicons name='call-outline' style={{fontSize: 18, color: 'skyblue'}} /> +91 9163756591 </Text>
  <Text style={{fontSize: 16, textAlign: 'center'   }}><Ionicons name='location-outline' style={{fontSize: 18, color: 'red'}} /> Mumbai, India, 410206S </Text>

</View>
    </View></ScrollView>)
}
const styles = StyleSheet.create(
  {
    container: {
      marginTop:'10%',
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
    input2: {
      height: 80,
      borderWidth: 1,
      borderColor: '#f8f8f8',
      backgroundColor: '#e8e8e8',

      padding: 10,
      borderRadius: 5
    },
  }
)
export default Contact
import React from 'react'
import { StyleSheet, View, Text, Button, TextInput } from 'react-native'
const Password = (props) => {

  return (
    <View style={styles.container}>
      <View style={styles.inputview}>
        <Text for="fname">Current password</Text>
        <TextInput
          style={styles.input}
          secureTextEntry={true}
        />
      </View>

      <View style={styles.inputview}>
        <Text for="fname">New password</Text>
        <TextInput
          style={styles.input}
          secureTextEntry={true}
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
          style={{ height: 50,}}
          title="Change Password"
        />
      </View>
    </View>)
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
  }
)
export default Password
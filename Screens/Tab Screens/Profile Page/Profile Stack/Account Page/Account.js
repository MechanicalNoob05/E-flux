import React from 'react'
import { StyleSheet, View } from 'react-native'
import { Text } from 'react-native-elements'
import { Input, Button } from '@rneui/themed';
import { ScrollView } from 'react-native';

const Account = (props) => {
  const [name, onChangeName] = React.useState('');
  const fullname = name.split(" ");
  const firstName = fullname[0];
  const lastName = fullname[1];
  const { navigation } = props
  return (
    <ScrollView>
      <View style={styles.container}>
        <Text h4 style={styles.text}> Edit Account Information</Text>
        <View>

          <Input
            placeholder='Name'
            leftIcon={{ type: 'font-awesome', name: 'user-circle-o', size: 20 }}
            onChangeText={onChangeName}
            value={name}
          />
          <Input
            placeholder='Phone Number'
            keyboardType="numeric"
            leftIcon={{ type: 'font-awesome', name: 'phone-square', size: 20 }}

          />
          <Input
            placeholder='Car Name'
            leftIcon={{ type: 'font-awesome', name: 'car', size: 20 }}

          />



        </View>
        <Button radius={'sm'} type="solid">
          Save Changes
        </Button>

      </View>
    </ScrollView>
  )
}
const styles = StyleSheet.create({ container: { padding: 24 } })
export default Account
import React from 'react'
import { ApplicationProvider, Layout, Text, Input, Divider,Button } from '@ui-kitten/components';
import * as eva from '@eva-design/eva';
import { StyleSheet,  } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
const Signup = (props) => {
  const [value, setValue] = React.useState('');
  const [pass, setPass] = React.useState('');
  const { navigation } = props

  return (
    <ApplicationProvider {...eva} theme={eva.light}>
          <ScrollView>

      <Layout style={{ flex: 1, paddingTop: 45, padding: 10,  justifyContent:'center' , alignContent:'center'  }}>
      <Text category='h3' style={styles.title}>Hello 👋 </Text>

        <Text category='h2' style={{ marginBottom: 15, textAlign:'center'}}>
          Create a New Account
          </Text>

          <Layout style={styles.container} level='1'>

<Input
  style={styles.input}
  placeholder='First Name'
  onChangeText={nextValue => setValue(nextValue)}
  label='First Name'
/>

<Input
  style={styles.input}
  placeholder='Last name'
  label='Last Name'
/>

</Layout>
        <Input style={{ padding: 10 }}
          placeholder='demonslayer@emmail.com'
          value={value}
          label='Email'
          onChangeText={nextValue => setValue(nextValue)}
        />
         <Input style={{ padding: 10 }}
          placeholder='Tesla 3s'
          
          label='Car Model'
        />
         <Input style={{ padding: 10 }}
          placeholder='eg. MHCET106'
          caption='this will help us to create more customizations for you'
          label='Car Number'
        />
        <Input style={{ padding: 10 }}
          type='password'
          placeholder='***********'
          value={pass}
          label='Password'
          onChangeText={nextValue => setPass(nextValue)}
        />
        <Button style={styles.installButton} title='sign Up'>Sign Up</Button>
        <Divider />
      
          <Text style={styles.signuptext}>
           Already have an Account? Please <Text status='primary'
              onPress={() => navigation.navigate('Login')}>Sign In</Text>
          </Text>
      </Layout>
</ScrollView>
    </ApplicationProvider>
  )
}

const styles = StyleSheet.create({
  signuptext:{
    flex: 1, alignContent:'center',
    marginTop: 15,
    textAlign: 'center'
  },
  details: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 4,
  },
  title: {
    marginBottom: 45,
    marginHorizontal: 8,
    textAlign:'center'
  },
  installButton: {
    marginVertical: 4,
    marginBottom: 10
  },
  container: {
    flexDirection: 'row',
    padding: 10
  },
  input: {
    flex: 1,
    margin: 2,
  },
});
export default Signup
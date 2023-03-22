import React from 'react'
import { ApplicationProvider, Layout, Text, Input, Divider,Button } from '@ui-kitten/components';
import * as eva from '@eva-design/eva';
import { StyleSheet,  } from 'react-native';
const Login = (props) => {
  const [value, setValue] = React.useState('');
  const [pass, setPass] = React.useState('');
  const { navigation } = props

  return (
    <ApplicationProvider {...eva} theme={eva.light}>
      <Layout style={{ flex: 1, paddingTop: 45, padding: 10,  justifyContent:'center' , alignContent:'center'  }}>
        <Text category='h5' style={styles.title}>🚗 Welcome to ChargeUp 🚕</Text>
        <Text category='h1' style={{ marginBottom: 30, textAlign:'center'}}>
          Sign In  
          </Text>

        <Input style={{ padding: 10 }}
          placeholder='demonslayer@emmail.com'
          value={value}
          label='Email'
          onChangeText={nextValue => setValue(nextValue)}
        />
        <Input style={{ padding: 10 }}
          type='password'
          placeholder='***********'
          value={pass}
          label='Password'
          onChangeText={nextValue => setPass(nextValue)}
        />
        <Button style={styles.installButton} title='sign in'>Sign In</Button>
        <Divider />
      
          <Text style={styles.signuptext}>
            Don't have an Account? Please <Text status='primary'
              onPress={() => navigation.navigate('Signup')}>Sign Up</Text>
          </Text>

          <Text name="Home" onPress={() => navigation.navigate('Home',{name:"Map"})}> Home router</Text>
      </Layout>
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
    marginHorizontal: 10,
    padding: 10,
    marginVertical: 10,
    marginBottom: 15
  },
});
export default Login
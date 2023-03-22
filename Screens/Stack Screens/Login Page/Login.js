import React from 'react'
import { StyleSheet, View, Text, Button } from 'react-native'
const Login = (props) => {

    const { navigation } = props
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Login Screen</Text>
            <Button title="Login"
                onPress={() =>
                    navigation.navigate('Home')
                }
            />
            <Button title='='
                onPress={() => navigation.navigate('Signup')} />
        </View>)
}
const styles = StyleSheet.create({ container: { padding: 24 } })
export default Login
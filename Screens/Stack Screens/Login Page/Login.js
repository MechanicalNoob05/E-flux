import React from 'react'
import { StyleSheet, View, Text, Button, StatusBar, TextInput } from 'react-native'
const Login = (props) => {

    const { navigation } = props
    return (
        <View style={styles.container}>
            <StatusBar auto />
            <View>
                <View style={styles.form_field}>

                    <Text style={styles.text}>Username</Text>
                    <TextInput style={styles.input}></TextInput>

                </View>
                <View style={styles.form_field} >

                    <Text style={styles.text}>Password</Text>
                    <TextInput style={styles.input}></TextInput>

                </View>

                <View style={styles.form_field} >
                    <Text
                        style={styles.form_button}
                        onPress={() =>
                            navigation.navigate('Home')
                        }
                    >Login</Text>
                </View>
                <View style={styles.form_field} >
                    <Text>Don't have an account?</Text>
                    <Text
                        onPress={() => navigation.navigate('Signup')} >Sign-up</Text>
                </View>
            </View>
        </View>
    )
}
const styles = StyleSheet.create(
    {
        container: {
            height: '100%',
            padding: 20,
            justifyContent:'center',
            width: '100%'
        },
        text: {
            fontSize: 20,
            marginVertical: 5,
            alignSelf: 'flex-start'
        },
        input: {
            backgroundColor: 'grey',
            borderRadius: 5,
            height: 40,
            width: '100%'
        },
        form_field: {
            marginVertical: 20,
            alignItems: 'center'
        },
        form_button: {
            width: '30%',
            backgroundColor: 'green',
            height: 45,
            textAlign: 'center',
            textAlignVertical: 'center',
            borderRadius: 20
        },
    }
)
export default Login
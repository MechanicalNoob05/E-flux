import React, { useEffect } from 'react'
import { StyleSheet, View, Text, Image, ScrollView } from 'react-native'
import { Avatar } from 'react-native-elements';
import { ListItem } from 'react-native-elements'
import TouchableScale from 'react-native-touchable-scale';
import Ionicons from 'react-native-vector-icons/Ionicons'
import * as SecureStorage from 'expo-secure-store';
import ip from '../../../../../ip.json'

const Profile = (props) => {
    const [profie,setProfile] = React.useState('{"Firstname":"" }')
    const [token, settoken] = React.useState('');
    async function getValueFor(key) {
        let result = await SecureStorage.getItemAsync(key);
        if (result) {
            settoken(result)
        } else {
        }
    }
    
    const getProfileInfo = async (token) => {
        // Default options are marked with *
        const response = await fetch(`http://${ip.ip}:3001/app/getcustomer`, {
            method: "POST",
            headers: {
                "Content-type": "application/json;charset=UTF-8",
                "auth-token": token
            },
            // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
            body: JSON.stringify({ }) // body data type must match "Content-Type" header
        });
        const json5 = await response.json()
        // console.log(json5)
        if (json5.savedcustomer) {
            setProfile(json5.savedcustomer)
        } else {
        }
    }
    useEffect(() => {
        getValueFor("jwt-token")
        getProfileInfo(token)
    }, [token])

    
    const list = [
        {
            title: 'Account',
            icon: 'person-circle',
            link: 'Account'
        },
        {
            title: 'Password',
            icon: 'key-outline',
            link: 'Password'
        },

        {
            title: 'Current Booking',
            icon: 'snow-outline',
            link: 'CurrentBooking'
        },
        {
            title: 'History',
            icon: 'play-back',
            link: 'History'
        },
        {
            title: 'FAQ',
            icon: 'help-circle',
            link: 'FAQ'
        },
        {
            title: 'Help',
            icon: 'help-buoy',
            link: 'Help'
        },


    ]


    const { navigation } = props
    return (

        <ScrollView style={{ backgroundColor: "#ffffff" }}>
            <View style={styles.container}>
                <View>
                    <Avatar
                        rounded
                        size="xlarge"
                        source={{
                            uri:
                                'https://static.wikia.nocookie.net/naruto/images/b/bd/Indra_%C5%8Ctsutsuki.png/revision/latest/scale-to-width-down/1200?cb=20220214090844',
                        }}
                    />

                </View>
                <View>
                    <Text style={styles.user}>{profie.Firstname} {profie.Lastname}</Text>
                </View>
            </View>
            <View>
                {
                    list.map((item, i) => (
                        <ListItem key={i}
                            onPress={() => navigation.navigate(item.link)}
                            bottomDivider
                            Component={TouchableScale}
                            friction={70} //
                            tension={100} // These props are passed to the parent component (here TouchableScale)
                            activeScale={0.8} >
                            <Ionicons name={item.icon} style={{ fontSize: 20 }} />
                            <ListItem.Content>
                                <ListItem.Title>{item.title}</ListItem.Title>
                            </ListItem.Content>
                            <ListItem.Chevron />
                        </ListItem>
                    ))
                }
            </View>
            <View style={{ marginTop: 3 }}></View>
            <View >

                <ListItem topDivider

                    onPress={() => navigation.navigate('About')}
                    bottomDivider
                    Component={TouchableScale}
                    friction={70} //
                    tension={100} // These props are passed to the parent component (here TouchableScale)
                    activeScale={0.8} >
                    <Ionicons name='trophy' style={{ fontSize: 20 }} />
                    <ListItem.Content>
                        <ListItem.Title>About Us</ListItem.Title>
                    </ListItem.Content>
                    <ListItem.Chevron />
                </ListItem>
                <ListItem bottomDivider
                    onPress={() => navigation.navigate('Contact')}
                    Component={TouchableScale}
                    friction={70} //
                    tension={100} // These props are passed to the parent component (here TouchableScale)
                    activeScale={0.8} >
                    <Ionicons name='mail-unread' style={{ fontSize: 20 }} />
                    <ListItem.Content>
                        <ListItem.Title>Contact Us</ListItem.Title>
                    </ListItem.Content>
                    <ListItem.Chevron />
                </ListItem>



            </View>

        </ScrollView>)
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 10
    },
    user: {
        fontSize: 24,
        textAlign: 'center'
    },
    logo: {
        justifyContent: 'center',
        width: 100,
        height: 100,
        borderRadius: 50,
    },
}); export default Profile
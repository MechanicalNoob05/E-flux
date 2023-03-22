import React from 'react'
import { StyleSheet, View, Text, Image, ScrollView } from 'react-native'
import { Avatar } from 'react-native-elements';
import { ListItem } from 'react-native-elements'
import TouchableScale from 'react-native-touchable-scale';
import Ionicons from 'react-native-vector-icons/Ionicons'

const Profile = (props) => {
    const list = [
        {
            title: 'Account',
            icon: 'person-circle',
            link: 'Account'
        },
        {
            title: 'Password',
            icon: 'key-outline',
            link: 'Account'
        },

        {
            title: 'Current Booking',
            icon: 'snow-outline',
            link: 'Account'
        },
        {
            title: 'History',
            icon: 'play-back',
            link: 'Account'
        },
        {
            title: 'FAQ',
            icon: 'help-circle',
            link: 'Account'
        },
        {
            title: 'Help',
            icon: 'help-buoy',
            link: 'Account'
        },


    ]
    const list1 = [
        {
            title: 'About Company',
            icon: 'trophy-outline'
        }
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
                                'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
                        }}
                    />

                </View>
                <View>
                    <Text style={styles.user}>Mayur Jadhav</Text>
                </View>
            </View>
            <View>
                {
                    list.map((item, i) => (
                        <ListItem key={i} 
                        onPress={()=>navigation.navigate(item.link)}
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
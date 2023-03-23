import React from 'react'
import { Image } from 'react-native'
import { StyleSheet, View, Text} from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
const Stats = (props) => {

  const { navigation } = props
    return (
      <ScrollView>
        <View style={styles.container}>
<Image source={{uri: 'https://images.unsplash.com/photo-1614288532696-203f89dc0db4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=327&q=80'}}/>

        </View>
        
        </ScrollView>
        )
}
const styles = StyleSheet.create({ container: { padding: 24 } })
export default Stats
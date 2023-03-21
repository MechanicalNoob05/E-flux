import React from 'react'
import { StyleSheet} from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import MyTabs from '../../../Routes/BottomNavigator';
const Home = (props) => {

    const { navigation } = props
    return (
        <NavigationContainer independent={true} >
            <MyTabs/>
        </NavigationContainer>
    )
}
const styles = StyleSheet.create({ container: { padding: 24 } })
export default Home
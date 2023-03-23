import React, {useRef, useState} from 'react';
import { ScrollView } from 'react-native';
import {
  Button,
  DrawerLayoutAndroid,
  StyleSheet,
  View,
} from 'react-native';
import { Header, Icon, ListItem,  Text} from 'react-native-elements'
import TouchableScale from 'react-native-touchable-scale';
import Ionicons from 'react-native-vector-icons/Ionicons'

const Admin_Home = (props) => {
  const drawer = useRef(null);
  const [drawerPosition, setDrawerPosition] = useState('left');
 
  const navigationView = () => (
    
    <View style={[styles.container, styles.navigationContainer]}>

      <Button
        title="Close drawer"
        onPress={() => drawer.current.closeDrawer()}
      />
        <ListItem
                        bottomDivider
                            Component={TouchableScale}
                            friction={70} //
                            tension={100} // These props are passed to the parent component (here TouchableScale)
                            activeScale={0.8} >
                            <ListItem.Content>
                                <ListItem.Title>Current Bookings</ListItem.Title>
                            </ListItem.Content>
                            <ListItem.Chevron />
                        </ListItem>
                        <ListItem
                        bottomDivider
                            Component={TouchableScale}
                            friction={70} //
                            tension={100} // These props are passed to the parent component (here TouchableScale)
                            activeScale={0.8} >
                            <ListItem.Content>
                                <ListItem.Title>Previous Bookings</ListItem.Title>
                            </ListItem.Content>
                            <ListItem.Chevron />
                        </ListItem>
                        <ListItem
                        
                        Component={TouchableScale}
                        friction={70} //
                        tension={100} // These props are passed to the parent component (here TouchableScale)
                        activeScale={0.8} >
                        <ListItem.Content>
                            <ListItem.Title>Settings</ListItem.Title>
                        </ListItem.Content>
                        <ListItem.Chevron />
                    </ListItem>

    </View>
  );
  const { navigation } = props
  return (
    <DrawerLayoutAndroid
    ref={drawer}
    drawerWidth={300}
    drawerPosition={drawerPosition}
    renderNavigationView={navigationView}>
    <View>
     

      <Header
  leftComponent={<Icon name='menu' style={{color:'#fff'}}         onPress={() => drawer.current.openDrawer()}  />}
  centerComponent={{ text: 'ChargeUp', style: { color: '#fff' } }}
  rightComponent={{ icon: 'search', color: '#fff' }}
/>
<Text h5 style={{margin: 10}}>All Bookings</Text>
<ScrollView>
   <ListItem style={{borderColor: '#f2f2f2', borderBottomWidth:1, borderTopWidth:1}}
      // onPress={()=>navigation.navigate(item.link)}
      
          Component={TouchableScale}
          friction={95} //
          tension={100} // These props are passed to the parent component (here TouchableScale)
          activeScale={0.95} >

          <ListItem.Content>
              <ListItem.Title>User Name</ListItem.Title>
              <ListItem.Subtitle>
                  
                  <Ionicons name="time" style={{width: 15}}/>
              <Text>3PM-4PM   | </Text>  
              <Ionicons name="battery-charging" style={{width: 15}}/>
              <Text>Station No. 3</Text>  
                
                  
                </ListItem.Subtitle>

          </ListItem.Content>
          <ListItem.Subtitle><Text>24 March</Text></ListItem.Subtitle>
      </ListItem>
      </ScrollView>
    </View>
    </DrawerLayoutAndroid>

  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 30,
    padding: 16,
  },
  navigationContainer: {
  },
  paragraph: {
    padding: 16,
    fontSize: 15,
    textAlign: 'center',
  },
});

export default Admin_Home
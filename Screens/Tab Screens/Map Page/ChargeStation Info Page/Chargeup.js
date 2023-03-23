import React from 'react'
import { StyleSheet, View, Text, Button, ScrollView } from 'react-native'
import openMap from 'react-native-open-maps';
import { WebView } from 'react-native-webview';

const Chargeup = () => {
  return (

    <ScrollView style={styles.container}>
      <View style={styles.card}>

        <WebView
          originWhitelist={['*']}
          source={{ html: '<iframe src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d109905.47043106775!2d72.87619256101306!3d19.059801996601557!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1selectric%20charging%20station!5e0!3m2!1sen!2sin!4v1679593122445!5m2!1sen!2sin" width="100%" height="100%" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>' }} />
           </View>
        <View>
       

        </View>

    </ScrollView >)
}
const styles = StyleSheet.create({
  container: {
    minHeight: 100
  },
  card: {
    justifyContent: 'center',
    height: 700
  }
})
export default Chargeup
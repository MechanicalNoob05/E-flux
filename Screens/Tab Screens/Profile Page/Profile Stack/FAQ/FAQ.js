import React from 'react'
import { StyleSheet, View, Button, ScrollView} from 'react-native'
import { Text } from 'react-native-elements';
import {Collapse,CollapseHeader, CollapseBody, AccordionList} from 'accordion-collapse-react-native';

const FAQ = (props) => {
  const data = [
    {
      'question': 'What kind of electric vehicles are compatible with your charging station?',
      'answer': 'Our charging station is compatible with all electric vehicles that use the standard charging connector.'
    },
    {
      'question': 'What is the charging time for my electric vehicle at your charging station?',
      'answer': 'The charging time will vary depending on the battery size of your electric vehicle and the charging level selected. Typically, a full charge can take anywhere from 30 minutes to a few hours.'
    },
    {
      'question': 'What payment options do you accept for charging sessions?',
      'answer': 'We accept payment through our mobile application, which accepts major credit cards and mobile payment options..'
    },
    {
      'question': ' Can I reserve a charging station in advance?',
      'answer': 'Yes, you can reserve a charging station in advance through our mobile application.    '
    },
    {
      'question': 'What if I have trouble using the charging station?',
      'answer': 'If you have any trouble using the charging station, please contact our customer support team through the mobile application or by calling our customer support line.'
    },
    {
      'question': 'How often do you maintain your charging stations?',
      'answer': 'We perform regular maintenance on our charging stations to ensure they are operating properly and efficiently. We also monitor them remotely to address any issues as they arise.    '
    },
  ]

  const { navigation } = props
    return (
      <ScrollView>
        <View style={styles.container}>
            <Text h4  style={{textAlign:'center'}}>FAQ Section</Text>
            <View>
            {data.map((key, i) => (
            <Collapse key={i} style={{paddingVertical: 10}}>
    <CollapseHeader>
      <View style={styles.FAQ}>
        <Text style={styles.text}>{key.question}</Text>
      </View>
    </CollapseHeader>
    <CollapseBody style={styles.text2}>
      <Text style={styles.text1}>{key.answer}</Text>
    </CollapseBody>
</Collapse>))}
            </View>
        </View>
        </ScrollView>
        )
}
const styles = StyleSheet.create({ container: { padding: 24, backgroundColor:'white' }
, FAQ:{
  backgroundColor: 'white'
},
text:{
  fontSize: 20,
  
},
text1:{
  paddingVertical: 10,
  paddingHorizontal: 4,
  fontSize: 15
}
,
text2:{
  backgroundColor: '#f2f2f2',
  borderRadius: 5,

}

})
export default FAQ
import React from 'react';
import { Text, View, Button, AsyncStorage } from 'react-native';
import { settingsStyle } from '../style/settingsStyle';

export default function Settings({navigation }) {
  
  /*Async storage to store user choice*/
  const setSettings = (userChoice) =>{
    AsyncStorage.setItem('userChoice', userChoice);
  }
  
  const reset = async () => {
      try {
          await AsyncStorage.removeItem('userChoice');
          alert('Reštartujte aplikáciu pre dokončenie a aplikovanie zmien');
      }
      catch(exception) {
          alert(exception);
      }
  }

  const backHandler = () => {
    navigation.pop();
  }

  return (
    <View style={settingsStyle.container}>

      <View style={settingsStyle.section}>
        <Text style={settingsStyle.headings} >Notifikácie</Text>
          <View>
              <Button title='ano' />
              <Button title='nie' />
          </View>
      </View>

      <View style={settingsStyle.section}>
        <Text style={settingsStyle.headings} >Zmena jazyka</Text>
              <Button title='Zmena jazyka' onPress={()=> {reset();}}/>
      </View>

      <View style={settingsStyle.section}>
        <Button title='Nas5' onPress={()=>{backHandler();}}/>
      </View>

    </View>
  );
}

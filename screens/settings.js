import React from 'react';
import { Text, View, Button, AsyncStorage } from 'react-native';
import { settingsStyle } from '../style/settingsStyle';

export default function Settings({navigation }) {
  /*Async storage to store user choice*/
  const setSettings = (userChoice) =>{
    AsyncStorage.setItem('userChoice', userChoice);
  }
  
  const temporary = async () => {
      try {
          await AsyncStorage.removeItem('userChoice');
          alert('done');
      }
      catch(exception) {
          alert(exception);
      }
  
  }

  return (
    <View>
      <View style={settingsStyle.container}>
        <Text style={settingsStyle.header}>Set Language</Text>
        <View>
          <View style={settingsStyle.button}>
            <Button title={'English'} onPress={() => {alert("Language has been set");   setSettings("english");}} />
          </View>
          <View style={settingsStyle.button}>
            <Button title={'Slovak'} onPress={() => {alert("Jazyk bol nastavený");    setSettings("slovak");}} />
          </View>
          <Button title = {'remove'} onPress={()=> {temporary();}} />
        </View>
      </View>
    </View>
  );
}

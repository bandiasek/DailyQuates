import React from 'react';
import { Text, View, Button } from 'react-native';
import { settingsStyle } from '../style/settingsStyle';

export default function Settings({navigation }) {
  return (
    <View>
      <View style={settingsStyle.container}>
        <Text style={settingsStyle.header}>Set Language</Text>
        <View
          style={[
            settingsStyle.buttonSection,
            settingsStyle.parentOfContent,
            settingsStyle.container,
          ]}>
          <View style={settingsStyle.button}>
            <Button title={'English'} onPress={() => {navigation.setSettings("english");alert("Language has been set")}} />
          </View>
          <View style={settingsStyle.button}>
            <Button title={'Slovak'} onPress={() => {navigation.setSettings("slovak");alert("Jazyk bol nastavený")}} />
          </View>
        </View>
      </View>
    </View>
  );
}

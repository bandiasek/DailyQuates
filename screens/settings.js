import React, { useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { settingsStyle } from '../style/settingsStyle';

export default function App() {
  const [Language, SetLanguage] = useState('Slovak');
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
            <Button title={'English'} onPress={() => SetLanguage('English')} />
          </View>
          <View style={settingsStyle.button}>
            <Button title={'Slovak'} onPress={() => SetLanguage('Slovak')} />
          </View>
        </View>
      </View>
    </View>
  );
}

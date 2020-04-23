import React, { useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { settingsStyle } from '../style/settingsStyle';
export default function App() {
  return (
    <View>
      <View style={settingsStyle.container}>
        <Text style={settingsStyle.header}>Set Language</Text>
        <View style={[settingsStyle.buttonSection, settingsStyle.parentOfContent, settingsStyle.container]}>
          <View style={settingsStyle.button}>
            <Button title={'English'} />
          </View>
          <View style={settingsStyle.button}>
            <Button title={'Slovak'} />
          </View>
        </View>
      </View>
    </View>
  );
}

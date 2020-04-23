import React,{ useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
      <View style={styles.container}>
          <Text>Settings</Text>
      </View>
    );
  }

  const styles = StyleSheet.create({
      container: {
          padding:25,
          backgroundColor: 'green'
      }
  });

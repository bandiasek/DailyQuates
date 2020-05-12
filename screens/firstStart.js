import React from 'react';
import { Text, View, AsyncStorage, TouchableOpacity } from 'react-native';
import { firstStartStyle } from '../style/firstStartStyle';

export default function FirstStart({navigation }) {
    
  return (
    <View style={firstStartStyle.mainContainer}>
        <View style={firstStartStyle.buttonSection}>

            <TouchableOpacity>
                <Text style={firstStartStyle.text} >English</Text>
            </TouchableOpacity>

            <TouchableOpacity>
                <Text style={firstStartStyle.text} >Slovak</Text>
            </TouchableOpacity>

        </View>
    </View>
  );
}

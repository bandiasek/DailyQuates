import React, {useState, useEffect} from 'react';
import { Text, View, AsyncStorage, TouchableOpacity } from 'react-native';
import { firstStartStyle } from '../style/firstStartStyle';

export default function FirstStart({navigation }) {
    
    /*----all-functions----------*/
    const setSettings = (userChoice) =>{
        AsyncStorage.setItem('userChoice', userChoice);
        navigation.navigate('DailyQuotes', {userChoice: userChoice});
      }

    const checkSettings = async () => {
        try {
            let asyncUserChoice = await AsyncStorage.getItem('userChoice');
            if(asyncUserChoice!==null){
                navigation.navigate('DailyQuotes', {userChoice: asyncUserChoice});
            }
    
        }catch(error){
            alert(error);
        }
      }

    /*----all-hooks--------------*/
    useEffect(()=>{
        console.log('first start of the App>> ----checking-----');
        checkSettings();
    });
    
  return (
    <View style={firstStartStyle.mainContainer}>
        <View style={firstStartStyle.buttonSection}>

            <TouchableOpacity
                onPress={()=>{setSettings('english');}}
            >
                <Text style={firstStartStyle.text} >English</Text>
            </TouchableOpacity>

            <TouchableOpacity
                onPress={()=>{setSettings('slovak');}}
            >
                <Text style={firstStartStyle.text} >Slovak</Text>
            </TouchableOpacity>

        </View>
    </View>
  );
}

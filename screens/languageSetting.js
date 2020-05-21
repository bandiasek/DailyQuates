import React, { useEffect, useState} from 'react';
import { Text, View, AsyncStorage, TouchableOpacity } from 'react-native';
import { firstStartStyle } from '../style/languageSettingStyle';

export default function LanguageSetting({navigation }) {
   /*----basic-data-storages----*/
    let slovakData = require('../public/slovak.json');
    let englishData = require('../public/english.json');

    /*----all-functions----------*/
    const setUserChoice = (userChoice) =>{
        AsyncStorage.setItem('userChoice', userChoice);
        
        if(userChoice=='slovak'){
           // AsyncStorage.setItem('authData', JSON.stringify(slovakData.authData));
            AsyncStorage.setItem('quoteData', JSON.stringify(slovakData.quoteData));
            AsyncStorage.setItem('dailyQuotesData', JSON.stringify(slovakData.dailyQuotesData));
        } else if(userChoice=='english'){
            // AsyncStorage.setItem('authData', JSON.stringify(englishData.authData));
             AsyncStorage.setItem('quoteData', JSON.stringify(englishData.quoteData));
             AsyncStorage.setItem('dailyQuotesData', JSON.stringify(englishData.dailyQuotesData));
         }else {
             console.log('eroor has occured, loading data failed');
         }

    }
      

    const checkSettings = async () => { 
        try {
            let asyncUserChoice = await AsyncStorage.getItem('userChoice');
            if(asyncUserChoice!==null){
                navigation.navigate('DailyQuotes');
            }
    
        }catch(error){
            alert(error);
        }
      }

    /*----all-hooks--------------*/
    useEffect(()=>{
        console.log('Language choosing page has been loaded');
        checkSettings();
    });
    
  return (
    <View style={firstStartStyle.mainContainer}>
        <View style={firstStartStyle.buttonSection}>

            <TouchableOpacity
                onPress={()=>{setUserChoice('english');}}
            >
                <Text style={firstStartStyle.text} >English</Text>
            </TouchableOpacity>

            <TouchableOpacity
                onPress={()=>{setUserChoice('slovak');}}
            >
                <Text style={firstStartStyle.text} >Slovak</Text>
            </TouchableOpacity>
        </View>
        <View>

        </View>
    </View>
  );
}

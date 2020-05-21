import React, { useEffect, useState} from 'react';
import { Text, View, AsyncStorage, TouchableOpacity } from 'react-native';
import { firstStartStyle } from '../style/languageSettingStyle';

export default function LanguageSetting({navigation }) {
   /*----basic-data-storages----*/
    let slovakData = require('../public/slovak.json');
    let englishData = require('../public/english.json');

    /*----all-functions----------*/
    const saveStorageMulti = async(value) => {
        console.log('saving> '+value)
        try{
            await AsyncStorage.multiSet(value, (error)=>{console.log(error)})
        }catch(error){
            console.log('error has occured: '+error)
        }
    }
    
    
    const setUserChoice = (userChoice) =>{
        
        if(userChoice=='slovak'){
            saveStorageMulti([
               // ['authData', JSON.stringify(slovakData.authData)],
               // ['dailyQuotesData', JSON.stringify(slovakData.dailyQuotesData)],
               // ['quoteData', JSON.stringify(slovakData.quoteData)],
                ['userChoice', userChoice]
            ]);
        } else if(userChoice=='english'){
            saveStorageMulti([
               // ['authData', JSON.stringify(slovakData.authData)],
              //  ['dailyQuotesData', JSON.stringify(englishData.dailyQuotesData)],
               // ['quoteData', JSON.stringify(englishData.quoteData)],
                ['userChoice', userChoice]
            ]);
         }else {
             console.log('eroor has occured, setting data failed');
         }

    }
      

    const checkSettings = async () => { 
        try {
            let asyncUserChoice = await AsyncStorage.multiGet(['userChoice']);
            console.log(asyncUserChoice[0][1]);
            if(asyncUserChoice[0][1]!==null){
                navigation.navigate('Auth');
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

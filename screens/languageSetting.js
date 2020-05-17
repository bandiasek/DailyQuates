import React, { useEffect, useState} from 'react';
import { Text, View, AsyncStorage, TouchableOpacity } from 'react-native';
import { firstStartStyle } from '../style/languageSettingStyle';

export default function LanguageSetting({navigation }) {

    /*----all-functions----------*/
    const setUserChoice = (userChoice) =>{
        AsyncStorage.setItem('userChoice', userChoice);

        if(userChoice=='english'){
            AsyncStorage.setItem('author', 'Your developers.');
            AsyncStorage.setItem('text', 'Use the button to get a quote...');
            
            navigation.navigate('DailyQuotes', {userChoice: userChoice, author: 'Your developers', text: 'Use the button to get a quote...'});
        
        }else if(userChoice=='slovak'){
            AsyncStorage.setItem('author', 'Vaši vývojári.');
            AsyncStorage.setItem('text', 'Pre získanie citátu použi tlačidlo...');
            
            navigation.navigate('DailyQuotes', {userChoice: userChoice, author: 'Vaši vývojári.', text: 'Pre získanie citátu použi tlačidlo...'});

        }else{console.log('Failed to set default quote');}
      }
      

    const checkSettings = async () => {   //treba este upravit a skomprimovat
        try {
            let asyncUserChoice = await AsyncStorage.getItem('userChoice');
            let asyncAuthor = await AsyncStorage.getItem('author');
            let asyncText = await AsyncStorage.getItem('text');
            if(asyncUserChoice!==null){
                navigation.navigate('DailyQuotes', {userChoice: asyncUserChoice, author: asyncAuthor, text: asyncText});
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

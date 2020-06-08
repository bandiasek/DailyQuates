import React, { useEffect, useState} from 'react';
import { Text, View, AsyncStorage, TouchableOpacity } from 'react-native';
import { firstStartStyle } from '../style/languageSettingStyle';

export default function LanguageSetting({}) {
   /*----basic-data-storages----*/

    /*----all-functions----------*/
    const saveStorage = async(value) => {
        console.log('saving> '+value)
        try{
            await AsyncStorage.setItem('userChoice', value)
        }catch(error){
            console.log('error has occured: '+error)
        }
    }
    
    
    const setUserChoice = (userChoice) =>{
        if(userChoice=='slovak'){
           saveStorage('slovak');
           //navigation.navigate('Auth');


        } else if(userChoice=='english'){
            saveStorage('englsih');
            //navigation.navigate('Auth');

         }else {
             console.log('eroor has occured, setting data failed');
         }

    }
      

    const checkSettings = async () => { 
        try {
            let asyncUserChoice = await AsyncStorage.getItem('userChoice');
            console.log('userChoice has been loaded: '+asyncUserChoice);
            if(asyncUserChoice!==null){
                //navigation.navigate('Auth');
            }
    
        }catch(error){
            alert(error);
        }
      }

    /*----all-hooks--------------*/
    useEffect(()=>{
        console.log('UseEffect has been loaded >> languageSettings');
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

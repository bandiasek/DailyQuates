import React, { useEffect, useState} from 'react';
import { Text, View, AsyncStorage, TouchableOpacity, KeyboardAvoidingView } from 'react-native';
import { authStyle } from '../style/authStyle';
import { disableExpoCliLogging } from 'expo/build/logs/Logs';
import LanguageSetting from './languageSetting';

export default function Auth({navigation }) {
     /*----all-data---------------*/
    const [userDetails, setUserDetails] = useState({
        username: '',
        password:''
    });

    /*----all-functions----------*/
    const checkLogin = async () => {
        try{
            var value = await AsyncStorage.getItem('user');
            if(value!== null){
                navigation.navigate('LanguageSetting');
            }

        }catch(error){
            alert(error);
        }
    }

    /*----all-hooks--------------*/
    useEffect(()=>{
        console.log('logging page has been loaded');
        checkLogin();
    });
    
  return (
    
  );
}

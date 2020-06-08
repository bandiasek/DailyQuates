import React, { useEffect, useContext} from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { firstStartStyle } from '../style/languageSettingStyle';
import {FuncContext} from '../components/funcContext';
import * as Animatable from 'react-native-animatable';

export default function LanguageSetting() {
   /*----basic-data-storages----*/

   const { setChoice } = useContext(FuncContext);
    
    

    /*----all-hooks--------------*/
    useEffect(()=>{
        console.log('UseEffect has been loaded >> languageSettings');
    });
    
  return (
    <View style={firstStartStyle.mainContainer}>
        <View style={firstStartStyle.buttonSection}>

            <TouchableOpacity
                onPress={()=>{setChoice('english');}}
            >
                <Text style={firstStartStyle.text} >English</Text>
            </TouchableOpacity>

            <TouchableOpacity
                onPress={()=>{setChoice('slovak');}}
            >
                <Text style={firstStartStyle.text} >Slovak</Text>
            </TouchableOpacity>
        </View>
        <View>

        </View>
    </View>
  );
}

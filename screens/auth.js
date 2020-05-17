import React, { useEffect, useState} from 'react';
import { Text, View, AsyncStorage, TouchableOpacity, KeyboardAvoidingView } from 'react-native';
import { authStyle } from '../style/authStyle';
import { TextInput } from 'react-native-gesture-handler';


export default function Auth({navigation }) {
     /*----all-data---------------*/
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    /*----all-functions----------*/
    const login = () => {
        alert("tested");
    }

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
    <KeyboardAvoidingView behavior='padding' style={authStyle.wrapper}>

        <View style={authStyle.container} >

                <Text style={authStyle.heading} > LOGIN </Text>
                <TextInput
                   style={authStyle.textInput} placeholder='Username'
                   onChangeText={(event)=>setUsername(event)}
                   underlineColorAndroid='transparent'
                />
                <TextInput
                   style={authStyle.textInput} placeholder='Password'
                   onChangeText={(event)=>setPassword(event)}
                   underlineColorAndroid='transparent'
                />

                <TouchableOpacity
                    style={authStyle.textInput}
                    onPress={()=>login()}
                >
                    <Text>Press to login</Text>
                </TouchableOpacity>
        </View>

    </KeyboardAvoidingView>
  );
}

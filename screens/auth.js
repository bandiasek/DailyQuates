import React, { useEffect, useState} from 'react';
import { Text, View, AsyncStorage, TouchableOpacity, KeyboardAvoidingView } from 'react-native';
import { authStyle } from '../style/authStyle';
import { TextInput } from 'react-native-gesture-handler';


export default function Auth({navigation }) {
     /*----all-data---------------*/
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    /*----all-functions----------*/
    const login = () => {
        console.log('starting fetch mathod --->');

        fetch(
            'http://192.168.0.111:8000/api/login',
            {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Cpmtemt-Type': 'application/json'
                },
                body: JSON.stringify({
                    email: email,
                    password: password
                })
            })
            
            .then((response)=>response.json())
            .then((res) => {
                
                if(res.success !==  null){
                    AsyncStorage.setItem('email', email);
                    navigation.navigate('LanguageSetting');
                }else{
                    alert(res.message);
                }

            })
            .done();
            console.log('fetch method is done');
    }

    const checkLogin = async () => {
        try{
            var value = await AsyncStorage.getItem('email');
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

        <View >

                <Text style={authStyle.heading} > LOGIN </Text>
                <TextInput
                   style={authStyle.textInput} placeholder='Email'
                   onChangeText={(event)=>setEmail(event)}
                   underlineColorAndroid='transparent'
                />
                <TextInput
                   style={authStyle.textInput} placeholder='Password'
                   onChangeText={(event)=>setPassword(event)}
                   underlineColorAndroid='transparent'
                />

                <TouchableOpacity
                    style={authStyle.loginBtn}
                    onPress={()=>login()}
                >
                    <Text style={authStyle.loginBtnText} >Press to login</Text>
                </TouchableOpacity>
        </View>

    </KeyboardAvoidingView>
  );
}

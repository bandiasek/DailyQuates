import React, { useEffect, useState} from 'react';
import { Text, View, AsyncStorage, TouchableOpacity, KeyboardAvoidingView, TextInput } from 'react-native';
import { authStyle } from '../style/authStyle';
import Logo from '../components/logo';


export default function Auth({navigation }) {
     /*----all-data---------------*/
    const [data, setData] = useState({
        emailCorrect: true,
        passwordCorrect: true,
    });

    /*----all-functions----------*/
   
    const login = () => {
                console.log('--------------------------');
                console.log('starting fetch mathod --->');
                    fetch(
                        'http://192.168.0.111:8000/api/login',
                        {
                            method: 'POST',
                            headers: {
                                'Accept': 'application/json',
                                'Content-Type': 'application/json',
                            },
                            body: JSON.stringify({
                                email: email,
                                password: password
                            })
                        })
                        
                        .then((response)=>response.json())
                        .then((res) => {
                            console.log(res.state);
                            if(res.state){
                                AsyncStorage.setItem('token', res.success.token);
                                navigation.navigate('DailyQuotes');
                            }else{
                                alert(res.error);
                            }

                        })
                        .catch((error)=>{
                            alert(error);
                        })
                        .done();
                        console.log('fetch method is done');
                        console.log('--------------------------');
                
        }
        
        
        

    const checkLogin = async () => {
        try{
            var value = await AsyncStorage.getItem('token');
            if(value!== null){
                console.log('User is already logged in');
                navigation.navigate('DailyQuotes');
            }

        }catch(error){
            alert(error);
        }
    }

    /*----all-hooks--------------*/
    useEffect(()=>{
  
    },[]);
    
  return (
    //<KeyboardAvoidingView behavior='padding' style={authStyle.wrapper}>
        <View style={authStyle.container}>
            <View style={authStyle.header}>
                <Logo />
            </View>
            <View style={authStyle.footer}>
                <Text>Footer</Text>
            </View>
        </View>
  //  </KeyboardAvoidingView>
  );
}

import React, { useEffect, useState} from 'react';
import Feather from 'react-native-vector-icons/Feather';
import { Text, View, AsyncStorage, TouchableOpacity, TextInput } from 'react-native';
import * as Animatable from 'react-native-animatable';
import { authStyle } from '../style/authStyle';
import Logo from '../components/logo';


export default function Auth({navigation }) {
     /*----all-data---------------*/
    const [data, setData] = useState({
        email:'',
        password:'',
        emailCorrect: false,
        secureTextEntry: true,
    });

    /*----all-functions----------*/
    const textInputChange = (value) => {
            setData({
                ...data,
                email: value
                });
            if(value.includes('@')&&value.includes('.')&&!value.includes(' ')){
                setData({
                    ...data,
                    emailCorrect:true
                });
            }else{
                setData({
                    ...data,
                    emailCorrect:false
                });
            }
    }

   
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
        <View style={authStyle.container}>
            
            <Animatable.View 
                style={authStyle.header}
                    animation='bounceIn'
                >
                <Logo 
                    style={authStyle.logo}
                />
            </Animatable.View>
            
            <Animatable.View 
                style={authStyle.footer}
                    animation='fadeInUpBig'
            >
                <Text style={authStyle.heading}>LOGIN</Text>
                <View style={authStyle.inputSection}>
                    <Feather
                        name='user'
                        size={20}
                        style={authStyle.icon}
                    />
                    <TextInput
                        placeholder='Your Email'
                        autoCapitalize='none'
                        style={authStyle.textInput}
                        onChangeText={(value)=>{textInputChange(value)}}
                    />
                        <Feather
                            name={data.emailCorrect ? 'check-circle' : 'circle'}
                            color={data.emailCorrect ? 'green' : 'grey'}
                            size={20}
                            style={authStyle.icon}
                        />
                </View>
                
                <View style={authStyle.inputSection}>
                    <Feather
                        name='lock'
                        size={20}
                        style={authStyle.icon}
                        
                    />
                    <TextInput
                        placeholder='Your Password'
                        style={authStyle.textInput}
                        autoCapitalize='none'
                        secureTextEntry={data.secureTextEntry}
                    />
                    <TouchableOpacity>
                        <Feather
                            name='eye-off'
                            color='grey'
                            size={20}
                            style={authStyle.icon,{paddingRight:12}}
                        />
                    </TouchableOpacity>
                </View>
               
                <View style={authStyle.btnSection}>
                    <TouchableOpacity style={authStyle.signInOpacity}>
                        <Text style={authStyle.signInText}>Sign In</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={authStyle.signUpOpacity}>
                        <Text style={authStyle.signUpText}>Don't have an account ?</Text>
                    </TouchableOpacity>
                </View>

            </Animatable.View>
        </View>
  );
}

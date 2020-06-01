import React, { useEffect, useState} from 'react';
import Feather from 'react-native-vector-icons/Feather';
import { Text, View, AsyncStorage, TouchableOpacity, TextInput, TouchableWithoutFeedback, Keyboard } from 'react-native';
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
    const emailInputChange = (value) => {
            if(value.includes('@')&&value.includes('.')&&!value.includes(' ')){
                setData({
                    ...data,
                    emailCorrect:true,
                    email: value
                });
            }else{
                setData({
                    ...data,
                    emailCorrect:false,
                    email: value
                });
            } 
    }

    const login = () => {
        if(data.emailCorrect){
            if(data.password!==''){
                loginRemote();
            }else{
                alert('Password can not be empty');
            }
        }else{
            alert('Email is incorrect');
        }
    }
   
    const loginRemote = () => {
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
                                email: data.email,
                                password: data.password
                            })
                        })
                        
                        .then((response)=>response.json())
                        .then((res) => {
                            console.log(res.state == 1 ? 'succesfuly login' : 'login failed');
                            if(res.state){
                                AsyncStorage.setItem('token', res.success.token);
                                navigation.navigate('DailyQuotes');
                            }else{
                                alert('Login failed');
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
        checkLogin();
    },[]);
    
  return (
    <TouchableWithoutFeedback onPress={()=>{Keyboard.dismiss()}}>
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
                        name='mail'
                        size={20}
                        style={authStyle.icon}
                    />
                    <TextInput
                        placeholder='Your Email'
                        autoCapitalize='none'
                        style={authStyle.textInput}
                        onChangeText={(value)=>{emailInputChange(value)}}
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
                        onChangeText={(value)=>{
                            setData({
                                ...data,
                                password:value
                            });
                        }}
                    />
                    <TouchableOpacity
                        onPress={()=>{
                            setData({...data,secureTextEntry:!data.secureTextEntry});
                        }}
                    >
                        <Feather
                            name={data.secureTextEntry ? 'eye-off':'eye'}
                            color='grey'
                            size={20}
                            style={authStyle.icon,{paddingRight:12}}
                        />
                    </TouchableOpacity>
                </View>
               
                <View style={authStyle.btnSection}>
                    <TouchableOpacity 
                        style={authStyle.signInOpacity}
                        onPress={()=>{login()}}
                    >
                        <Text style={authStyle.signInText}>Sign In</Text>
                    </TouchableOpacity>

                    <TouchableOpacity 
                        style={authStyle.signUpOpacity}
                        onPress={()=>{navigation.navigate('Register')}}    
                    >
                        <Text style={authStyle.signUpText}>Don't have an account ?</Text>
                    </TouchableOpacity>
                </View>

            </Animatable.View>
        </View>
    </TouchableWithoutFeedback>    
  );
}

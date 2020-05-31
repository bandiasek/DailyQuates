import React, { useEffect, useState} from 'react';
import Feather from 'react-native-vector-icons/Feather';
import { Text, View, AsyncStorage, TouchableOpacity, TextInput, KeyboardAvoidingView } from 'react-native';
import * as Animatable from 'react-native-animatable';
import { registerStyle } from '../style/registerStyle';
import Logo from '../components/logo';


export default function Register({navigation }) {
     /*----all-data---------------*/
    const [data, setData] = useState({
        name:'',
        email:'',
        password:'',
        confirmPassword:'',
        emailCorrect: false,
        nameCorrect: false,
        confirmPasswordCorrect: false,
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

    const nameInputChange = (value) => {
        if(value!==''){
            setData({
                ...data,
                nameCorrect: true,
                name: value
            });
        }else{
            setData({
                ...data,
                nameCorrect: false,
                name: value
            });
        }    
    }

    const confirmPasswordInputChange = (value) => {
        if(value===data.password){
            setData({
                ...data,
                confirmPasswordCorrect: true,
                confirmPassword: value
            });
        }else{
            setData({
                ...data,
                confirmPasswordCorrect: false,
                confirmPassword: value
            });
        }
    }

    const register = () => {
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
   
    const registerRemote = () => {
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
  
    },[]);
    
  return (
        <KeyboardAvoidingView
            behavior='padding'
            style={registerStyle.container}   
            >
            <Animatable.View 
                style={registerStyle.header}
                    animation='bounceIn'
                >
                <Logo 
                    style={registerStyle.logo}
                />
            </Animatable.View>
            
            <Animatable.View 
                    style={registerStyle.footer}
                    animation='fadeInUpBig'
            >
                <Text style={registerStyle.heading}>REGISTER</Text>
                {/*Nickname Input*/}
                <View style={registerStyle.inputSection}>
                    <Feather
                        name='user'
                        size={20}
                        style={registerStyle.icon}
                    />
                    <TextInput
                        placeholder='Your Nickname'
                        autoCapitalize='none'
                        style={registerStyle.textInput}
                        onChangeText={(value)=>{nameInputChange(value)}}
                    />
                        <Feather
                            name={data.nameCorrect ? 'check-circle' : 'circle'}
                            color={data.nameCorrect ? 'green' : 'grey'}
                            size={20}
                            style={registerStyle.icon}
                        />
                </View>
                {/*Email Input*/}
                <View style={registerStyle.inputSection}>
                    <Feather
                        name='mail'
                        size={20}
                        style={registerStyle.icon}
                    />
                    <TextInput
                        placeholder='Your Email'
                        autoCapitalize='none'
                        style={registerStyle.textInput}
                        onChangeText={(value)=>{emailInputChange(value)}}
                    />
                        <Feather
                            name={data.emailCorrect ? 'check-circle' : 'circle'}
                            color={data.emailCorrect ? 'green' : 'grey'}
                            size={20}
                            style={registerStyle.icon}
                        />
                </View>
                {/*Password Input*/}                
                <View style={registerStyle.inputSection}>
                    <Feather
                        name='lock'
                        size={20}
                        style={registerStyle.icon}
                        
                    />
                    <TextInput
                        placeholder='Your Password'
                        style={registerStyle.textInput}
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
                            style={registerStyle.icon,{paddingRight:12}}
                        />
                    </TouchableOpacity>
                </View>
                {/*Re-enter password Input*/}
                <View style={registerStyle.inputSection}>
                    <Feather
                        name='lock'
                        size={20}
                        style={registerStyle.icon}
                        
                    />
                    <TextInput
                        placeholder='Confirm Password'
                        style={registerStyle.textInput}
                        autoCapitalize='none'
                        secureTextEntry={true}
                        onChangeText={(value)=>{confirmPasswordInputChange(value)}}
                            />
                        <Feather
                            name={data.confirmPasswordCorrect ? 'check-circle' : 'circle'}
                            color={data.confirmPasswordCorrect ? 'green' : 'grey'}
                            size={20}
                            style={registerStyle.icon,{paddingRight:12}}
                        />
                </View>
                {/*Button section Input*/}
                <View style={registerStyle.btnSection}>
                    <TouchableOpacity 
                        style={registerStyle.signInOpacity}
                        onPress={()=>{login()}}
                    >
                        <Text style={registerStyle.signInText}>Sign Up</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={registerStyle.signUpOpacity}>
                        <Text style={registerStyle.signUpText}>Already registered ?</Text>
                    </TouchableOpacity>
                </View>

            </Animatable.View>
            
        </KeyboardAvoidingView>
  );
}

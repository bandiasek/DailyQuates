import React, { useEffect, useState, useContext} from 'react';
import Feather from 'react-native-vector-icons/Feather';
import { Text, View, AsyncStorage, TouchableOpacity, TextInput, TouchableWithoutFeedback, Keyboard, ImageBackground } from 'react-native';
import * as Animatable from 'react-native-animatable';
import { authStyle } from '../style/authStyle';
import Logo from '../components/logo';
import {FuncContext} from '../components/funcContext';


export default function Auth({navigation }) {
     /*----all-data---------------*/
    const [data, setData] = useState({
        email:'',
        password:'',
        emailCorrect: false,
        secureTextEntry: true,
    });
    const { signIn } = useContext(FuncContext);

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
                signIn(data.email, data.password);
            }else{
                alert('Password can not be empty');
            }
        }else{
            alert('Email is incorrect');
        }
    }
   

    /*----all-hooks--------------*/
    useEffect(()=>{
        console.log('UseEffect has been loaded >> auth');
    },[]);
    
  return (
    <TouchableWithoutFeedback onPress={()=>{Keyboard.dismiss()}}>
        <View style={authStyle.container}>
            <ImageBackground 
            source={require('../assets/background.jpg')}
            style={authStyle.background}
            >
            
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
            </ImageBackground>
        </View>
    </TouchableWithoutFeedback>    
  );
}

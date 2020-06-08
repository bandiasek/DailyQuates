import React, { useContext } from 'react';
import { Text, View, Button, AsyncStorage, ImageBackground } from 'react-native';
import { settingsStyle } from '../style/settingsStyle';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Feather from 'react-native-vector-icons/Feather';
import * as Animatable from 'react-native-animatable';
import {FuncContext} from '../components/funcContext';

export default function Settings({navigation }) {
  
  const { signOut, remChoice, syntax } = useContext(FuncContext);

  const backHandler = () => {
    navigation.pop();
  }

  return (
    <View style={settingsStyle.container}>
       <ImageBackground 
          source={require('../assets/background.jpg')}
          style={settingsStyle.background}
        >

      <Animatable.View 
        style={settingsStyle.header}
        animation='bounceInDown'
      >
        <Text style={settingsStyle.heading}>
          Settings
        </Text>
      </Animatable.View>

      <View style={settingsStyle.body}>
        
        <Animatable.View 
          style={settingsStyle.section}
          animation='bounceIn'
        >
          <Text style={settingsStyle.sectionText}>
            Zmena jazyka
          </Text>
          <TouchableOpacity
            style={settingsStyle.sectionBtn}
            onPress={()=>{remChoice()}}
          >
            <Feather 
              name='corner-down-right'
              size={30}
              style={settingsStyle.icon}
            />
            <Text style={settingsStyle.sectionBtnText}>
              click here
            </Text>
          </TouchableOpacity>
        </Animatable.View>

        <Animatable.View 
          style={settingsStyle.section}
          animation='bounceIn'
        >
          <Text style={settingsStyle.sectionText}>
            Zmena uctu
          </Text>
          <TouchableOpacity
            style={settingsStyle.sectionBtn}
            onPress={()=>{signOut()}}
          >
            <Feather 
              name='log-out'
              size={30}
              style={settingsStyle.icon}
            />
            <Text style={settingsStyle.sectionBtnText}>
              Sign out
            </Text>
          </TouchableOpacity>
        </Animatable.View>

      </View>

      <Animatable.View 
        style={settingsStyle.footer}
        animation='bounceInRight'
      >
        <TouchableOpacity
          style={settingsStyle.backBtn}
          onPress={()=>{navigation.goBack()}}
        >
        <Feather 
              name='chevron-left'
              size={25}
              style={{
                paddingTop: 5,
                color: 'white'
              }}
            />
          <Text
            style={settingsStyle.textBtn}
          >
            Back
          </Text>
        </TouchableOpacity>
      </Animatable.View>
      
      </ImageBackground>         
    </View>
  );
}

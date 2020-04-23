import React,{ useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Button, Image, AsyncStorage } from 'react-native';
import Quotation from '../components/quotation';
import { homeStyle } from '../style/homeStyle';

export default function DailyQuotes({ navigation }) {

    /*-----reading-settings------*/
  const english = require("../public/english.json")
  const slovak = require("../public/slovak.json");
    var language = slovak;

    if(getSettings=="english"){
        language = english;
    }else if(getSettings=="slovak"){
        language = slovak;
    }else {console.log("sme v riciiiii")}   
  
    /*----basic-data-storages----*/
  const data = require("../public/data.json");
  const [showingQuote, setShowingQuote] = useState({autor:language.home.author, text:language.home.text});


  /*----all-functions----------*/
  const getRandomInt = (max) => {
    return Math.floor(Math.random() * Math.floor(max));
  }
  
  const getQuoteHandller = () => {
      setShowingQuote(data.slovakQuotes[getRandomInt(data.slovakQuotes.length)]);
  }

  const settingsHandller = () => {
    navigation.navigate('Settings', setSettings);
  }

  const setSettings = (userChoice) =>{
    AsyncStorage.setItem('userChoice', userChoice);
  }

  const getSettings = async () => {
    try {
        let userChoice = await AsyncStorage.getItem('userChoice');
    }catch(error){
        alert(error);
    }
  }

  /*----Some-Life-cycle--------*/
  
  /*------render-section------*/
  return (
    <View style={homeStyle.container}>
      <View style={homeStyle.parentOfContent}>
        <Text style={homeStyle.heading}>Daily Quotes</Text>
        <View style={homeStyle.content}>
            <Quotation quote={showingQuote} language={language} style={homeStyle.quoteComponent}/>
            
            <View style={homeStyle.buttonSection} >
              <TouchableOpacity onPress={()=>getQuoteHandller()}>
                 <Text style={homeStyle.quoteButton}>{language.home.button}</Text>
              </TouchableOpacity>
              <TouchableOpacity style={homeStyle.settingsBtn} onPress={()=>{settingsHandller()}}>
                <Image source={require("../assets/settingsIcon50px.png")} />
              </TouchableOpacity>
            </View>

        </View>
      </View>
    </View>
  );
}

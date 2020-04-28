import React,{ useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, AsyncStorage } from 'react-native';
import Quotation from '../components/quotation';
import { homeStyle } from '../style/homeStyle';

export default function DailyQuotes({ navigation }) {

    /*-----reading-settings------*/
  const english = require("../public/english.json")
  const slovak = require("../public/slovak.json");
  const [userChoice, setUserChoice] = useState("slovak");  
    var language = slovak;
  

    if(userChoice=="english"){
        language = english;
    }else if(userChoice=="slovak"){
        language = slovak;
    }else {console.log("Failed to load language")}   
  
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
    navigation.navigate('Settings');
  }

  const getSettings = async () => {
    try {
        let userChoice = await AsyncStorage.getItem('userChoice');
        setUserChoice(userChoice);

    }catch(error){
        alert(error);
    }
  }

  /*----------hooks------------*/
    useEffect(()=>{
      getSettings();
      console.log("useEffect has been propped "+userChoice);
    });
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

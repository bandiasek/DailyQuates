import React,{ useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, AsyncStorage } from 'react-native';
import Quotation from '../components/quotation';
import { homeStyle } from '../style/homeStyle';

export default function DailyQuotes({ navigation }) {

    /*-----reading-settings------*/
  const english = require("../public/english.json")
  const slovak = require("../public/slovak.json");
  const [userChoice, setUserChoice] = useState("slovak");  
    var languageOfApp = slovak;
  

    if(userChoice=="english"){
        languageOfApp = english;
    }else if(userChoice=="slovak"){
        languageOfApp = slovak;
    }else {console.log("Failed to load language")}   
  
    /*----basic-data-storages----*/
  const [showingQuote, setShowingQuote] = useState({autor:languageOfApp.home.author, text:languageOfApp.home.text});


  /*----all-functions----------*/
  const getRandomInt = (max) => {
    return Math.floor(Math.random() * Math.floor(max));
  }
  
  const getQuoteHandller = () => {
    if(userChoice=="english"){
      setShowingQuote(languageOfApp.quotes[getRandomInt(languageOfApp.quotes.length)]);

  }else if(userChoice=="slovak"){
      setShowingQuote(languageOfApp.quotes[getRandomInt(languageOfApp.quotes.length)]);

  }else {console.log("Failed to load quote")}   
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
        <Text style={homeStyle.heading}>
            Daily Quotes
          </Text>
        <View style={homeStyle.content}>
            <Quotation 
                quote={showingQuote} 
                language={languageOfApp} 
                style={homeStyle.quoteComponent}
              />
            
            <View style={homeStyle.buttonSection} >
              <TouchableOpacity 
                onPress={()=>getQuoteHandller()}
                >
                 <Text style={homeStyle.quoteButton}>
                      {languageOfApp.home.button}
                   </Text>
              </TouchableOpacity>
              <TouchableOpacity 
                  style={homeStyle.settingsBtn} 
                  onPress={()=>{settingsHandller()}}
                >
                <Image source={require("../assets/settingsIcon50px.png")} />
              </TouchableOpacity>
            </View>
        </View>
      </View>
    </View>
  );
}

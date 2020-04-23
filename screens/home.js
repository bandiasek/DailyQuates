import React,{ useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Button, Image } from 'react-native';
import Quotation from '../components/quotation';
import { homeStyle } from '../style/homeStyle';

export default function Home({ navigation }) {
  /*----basic-data-storages----*/
  
  /*-----reading-settings------*/
  const settingsData = require("../public/settings.json");
  const english = require("../public/english.json")
  const slovak = require("../public/slovak.json");
    var language = {};

    if(settingsData.language=="english"){
        language = english;
    }else if(settingsData.language=="slovak"){
        language = slovak;
    }else {console.log("sme v riciiiii")}   

  
 
  /*---end-of-reading-settings--*/
  
  const [showingQuote, setShowingQuote] = useState({autor:language.home.author, text:language.home.text});
  const data = require("../public/data.json");

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
  /*----Some-Life-cycle--------*/
  

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

import React,{ useState, useEffect } from 'react';
import { Text, View, TouchableOpacity, Image} from 'react-native';
import Quotation from '../components/quotation';
import { homeStyle } from '../style/homeStyle';

export default function DailyQuotes({ navigation }) {

    /*----basic-data-storages----*/
    const defaultLanguage = require("../public/default.json");
    const [languageOfApp, setLanguageOfApp] = useState(defaultLanguage);
    const [showingQuote, setShowingQuote] = useState({
      autor:navigation.getParam('author'), 
      text:navigation.getParam('text')
    });

  /*----all-functions----------*/
  const getRandomInt = (max) => {
    return Math.floor(Math.random() * Math.floor(max));
  }
  
  const getQuoteHandller = () => {
    try{ 
      setShowingQuote(languageOfApp.quotes[getRandomInt(languageOfApp.quotes.length)]);

    }catch(error){

      alert(error);
    }
  } 

  const settingsHandller = () => {
    navigation.navigate('Settings');
  }

  const languageCheck = (userChoice) => {
      console.log('checking language in homeScreen/dailyQuotes>> '+userChoice);
      
      if(userChoice=="english"){
         
        var english = require("../public/english.json");
        setLanguageOfApp(english);
      
      }else if(userChoice=="slovak"){
        
        var slovak = require("../public/slovak.json");
        setLanguageOfApp(slovak);
      
      }else {console.log("Failed to load language ")} 
  }

  /*----------hooks------------*/
    useEffect(()=>{
      languageCheck(navigation.getParam('userChoice'));
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

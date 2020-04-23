import React,{ useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Button, Image } from 'react-native';
import Quotation from '../components/quotation';
import { homeStyle } from '../style/homeStyle';

export default function Home({ navigation }) {
  /*----basic-data-storages----*/
  const [showingQuote, setShowingQuote] = useState({autor:"Vaši vývojári", text:"Pre získanie citátu použi tlačidlo..."});
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

  return (
    <View style={homeStyle.container}>
      <View style={homeStyle.parentOfContent}>
        <Text style={homeStyle.heading}>Daily Quotes</Text>
        <View style={homeStyle.content}>
            <Quotation quote={showingQuote} style={homeStyle.quoteComponent}/>
            
            <View style={homeStyle.buttonSection} >
              <TouchableOpacity onPress={()=>getQuoteHandller()}>
                <Text style={homeStyle.quoteButton}>Ziskaj citát</Text>
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

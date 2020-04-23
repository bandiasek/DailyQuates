import React,{ useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Button, Image } from 'react-native';
import Quotation from '../components/quotation';

export default function Home() {
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

  return (
    <View style={styles.container}>
      <View style={styles.parentOfContent}>
        <Text style={styles.heading}>Daily Quotes</Text>
        <View style={styles.content}>
            <Quotation quote={showingQuote} style={styles.quoteComponent}/>
            
            <View style={styles.buttonSection} >
              <TouchableOpacity onPress={()=>getQuoteHandller()}>
                <Text style={styles.quoteButton}>Ziskaj citát</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.settingsBtn} >
                <Image source={require("../assets/settingsIcon50px.png")} />
              </TouchableOpacity>
            </View>

        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignContent: 'center'
  },
  
  parentOfContent: {
    paddingTop:"20%",
  },
  
  heading: {
    textAlign: "center",
    fontSize: 50
  },
  
  content: {
    padding: '5%',
    height: '100%'
  },
  
  buttonSection: {
    flex: 1,
    justifyContent:"space-between",
    alignItems: 'center'
  },
  
  settingsBtn: {
    marginTop: 30,
    backgroundColor:'grey',
    borderRadius: 10,
  
  },

  quoteButton: {
    padding: 20,
    backgroundColor:'grey',
    borderRadius: 10,
    overflow:'hidden'
    
  }

});

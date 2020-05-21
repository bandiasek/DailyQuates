import React,{ useState, useEffect } from 'react';
import { Text, View, TouchableOpacity, Image, AsyncStorage,} from 'react-native';
import Quotation from '../components/quotation';
import { homeStyle } from '../style/homeStyle';

export default function DailyQuotes({ navigation }) {

    /*----basic-data-storages----*/
    const [data, setData] = useState(
      {
            "author": "...",
            "text": "...",
            "button": "..."
      });
    const [showingQuote, setShowingQuote] = useState({
      autor:data.author, 
      text:data.text
    });

  /*----all-functions----------*/
  const getRandomInt = (max) => {
    return Math.floor(Math.random() * Math.floor(max));
  }
  
  const getQuoteHandller = () => {
    try{ 
      setShowingQuote(data.quotes[getRandomInt(data.quotes.length)]);

    }catch(error){

      alert(error);
    }
  } 

  const settingsHandller = () => {
    navigation.navigate('Settings');
  }

  const getStorageData = async () =>{
    try {
      let dailyQuotesData = await AsyncStorage.getItem('dailyQuotesData');
      return dailyQuotesData;

  }catch(error){
      alert(error);
  }
  }

  const declarData = () => {
    let dailyQuotesData = getStorageData();
    if(dailyQuotesData!==null){
      setData(
        dailyQuotesData
      );
    }
  }

  /*----------hooks------------*/
    useEffect(()=>{
      declarData();  
      console.log('main useeffect');
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
                style={homeStyle.quoteComponent}
              />
            
            <View style={homeStyle.buttonSection} >
              <TouchableOpacity 
                onPress={()=>getQuoteHandller()}
                >
                 <Text style={homeStyle.quoteButton}>
                      {data.button}
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

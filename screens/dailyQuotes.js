import React,{ useState, useEffect } from 'react';
import { Text, View, TouchableOpacity, Image, AsyncStorage, Button, ImageBackground,} from 'react-native';
import { dailyQuotesStyle } from '../style/dailyQuotesStyle';
import * as Animatable from 'react-native-animatable';
import Feather from 'react-native-vector-icons/Feather';

import Quotation from '../components/quotation';
import DataNull from '../components/dataNull';
import Logo from '../components/logo';

export default function DailyQuotes({ navigation }) {

    /*----basic-data-storages----*/
    const [data, setData] = useState(null);
    const [showingQuote, setShowingQuote] = useState(null);

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

  const declareData = async() => {
    try{
      await AsyncStorage.getItem('userChoice')
        .then((userChoice)=>{
          if(userChoice!==null){

            if(userChoice==='slovak'){
              setShowingQuote((require('../public/dailyQuotesSlovak.json')).showingQuoteData);
              setData(require('../public/dailyQuotesSlovak.json'));
      
            }else{
              setShowingQuote((require('../public/dailyQuotesEnglish.json')).showingQuoteData);
              setData(require('../public/dailyQuotesEnglish.json'));

            }
          }else{
            console.log('userChoice is null');
          }
        }).done();
    
    }catch(error){
      alert(error);
    }   
  }

  
  /*----------hooks------------*/
    useEffect(()=>{
      console.log('UseEffect has been loaded >> dailyQuotes');
      declareData();
    
    },[]);

  /*------render-section------*/
if(data!==null){
  return (
    <View style={dailyQuotesStyle.container} >
        <ImageBackground 
          source={require('../assets/background.jpg')}
          style={dailyQuotesStyle.background}
        >

        <Animatable.View 
            style={dailyQuotesStyle.header}
            animation='bounceInDown'
          >
            <Logo />
        </Animatable.View>

        <View style={dailyQuotesStyle.body}>
            <Quotation quoteData={showingQuote} />
        </View>

        <Animatable.View 
          style={dailyQuotesStyle.footer}
          animation='bounceInUp'
        >
            
            <TouchableOpacity
              style={dailyQuotesStyle.leftBtn}
            >
                <Feather  
                  name='share'
                  size={30}
                  style={dailyQuotesStyle.icon}
                />
            </TouchableOpacity>

            <TouchableOpacity
              style={dailyQuotesStyle.midBtn}
              onPress={()=>{
                getQuoteHandller()
              }}
            >
                <Feather  
                  name='plus'
                  size={75}
                  style={dailyQuotesStyle.icon}
                />
            </TouchableOpacity>

            <TouchableOpacity
              style={dailyQuotesStyle.rightBtn}
              onPress={()=>{
                  navigation.navigate('Settings')
                }}
            >
                <Feather  
                    name='settings'
                    size={30}
                    style={dailyQuotesStyle.icon}
                  />
            </TouchableOpacity>

        </Animatable.View>

        </ImageBackground>
    </View>
    );
  }

  else{
    return(
        <DataNull />
      );
  }
}

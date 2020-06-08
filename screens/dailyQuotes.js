import React,{ useState, useEffect, useContext } from 'react';
import { Text, View, TouchableOpacity, Image, AsyncStorage, Button, ImageBackground, ActivityIndicator} from 'react-native';
import { dailyQuotesStyle } from '../style/dailyQuotesStyle';
import * as Animatable from 'react-native-animatable';
import Feather from 'react-native-vector-icons/Feather';

import {FuncContext} from '../components/funcContext';
import Quotation from '../components/quotation';
import DataNull from '../components/dataNull';
import Logo from '../components/logo';

export default function DailyQuotes({ navigation }) {

    /*----basic-data-storages----*/
    const [showingQuote, setShowingQuote] = useState(null);
    const {syntax} = useContext(FuncContext);

  /*----all-functions----------*/
  const getRandomInt = (max) => {
    return Math.floor(Math.random() * Math.floor(max));
  }
  
  const getQuoteHandller = () => {
    try{ 
      setShowingQuote(syntax.dailyQuotes.quotes[getRandomInt(syntax.dailyQuotes.quotes.length)]);

    }catch(error){

      alert(error);
    }
  } 


  const handelFirstStart = () => {
    setShowingQuote({
      author : syntax.dailyQuotes.author,
      text: syntax.dailyQuotes.text
    });
  } 

  
  /*----------hooks------------*/
    useEffect(()=>{
      console.log('UseEffect has been loaded >> dailyQuotes');
      handelFirstStart();
    },[]);

  /*------render-section------*/
  if(showingQuote!==null){
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
    }else{
      return(
        <View style={{flex:1, justifyContent: 'center', alignItems: 'center'}}>
            <ActivityIndicator size='large' />
        </View>
      );
    }
  }

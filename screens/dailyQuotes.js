import React,{ useState, useEffect } from 'react';
import { Text, View, TouchableOpacity, Image, AsyncStorage,} from 'react-native';
import Quotation from '../components/quotation';
import { homeStyle } from '../style/homeStyle';

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

  const getStorageData = async () =>{
      try {
        let asyncUserChoice = await AsyncStorage.getItem('userChoice');
            return asyncUserChoice;
    }catch(error){
        alert(error);
    }
  }

  const declareData = async() => {
    try{
      let userChoice = await AsyncStorage.getItem('userChoice')
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
    <View style={homeStyle.container}>
      <View style={homeStyle.parentOfContent}>
        <Text style={homeStyle.heading}>
            Daily Quotes
          </Text>
        <View style={homeStyle.content}>
           
        <Quotation
            quoteData={showingQuote}
            renderData={data.renderQuoteData}
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

  else{
    return(
      <View style={
        {
          flex:1, justifyContent:"center", alignContent:"center",alignItems:"center"
        }
      }>
        <Text style={{fontSize:30}}>
            Data null
          </Text>
      </View>
    );
  }

  
}

/*

*/
import React, {useState, useEffect} from 'react';
import { Text, View, ImageBackground, AsyncStorage} from 'react-native';
import { quotationStyles } from '../style/quotationStyle.js';

export default function Quotation({quote}) {
   /*----basic-data-storages----*/
   const [data, setData] = useState(
       {
           "author":"...",
           "quote":"..."
       }
   );

  /*----all-functions----------*/
  const getStorageData = async () =>{
    try {
      let quoteData = await AsyncStorage.getItem('quoteData');
      return quoteData;

  }catch(error){
      alert(error);
  }
  }

  const declarData = () => {
    let quoteData = getStorageData();
    if(quoteData!==null){
      setData(
        quoteData
      );
    }
  }

  /*----------hooks------------*/
    useEffect(()=>{
      declarData();  
      console.log('quotation useeffect');
    });

    return(
        <View style={quotationStyles.container}>
                <ImageBackground style={quotationStyles.background} source={require("../assets/backgroundQuote.png")}/>
            <View style={quotationStyles.quote}>
        
                <Text style={{paddingLeft:'70%',fontSize: 20,fontWeight: 'bold',paddingBottom:10, paddingTop:30}}>
                    [{data.quote}]
                </Text>
                
                <Text style={quotationStyles.quoteText}>
                    {quote.text}
                </Text>
            </View>

            <View style={quotationStyles.lowerBar}>
                <View style={{alignItems:'center',paddingRight:25}}>
                    <Text style={quotationStyles.naming}>[datum]</Text>
                    <Text>.....</Text>
                </View>
                <View style={{alignItems:'center',paddingLeft:25}}>
                    <Text style={quotationStyles.naming}>[{data.author}]</Text>
                    
                    <Text >
                        {quote.author}
                    </Text>

                </View>
            </View>
        
        </View>
    );
}


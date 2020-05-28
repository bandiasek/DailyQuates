import React, {useState, useEffect} from 'react';
import { Text, View, ImageBackground, AsyncStorage} from 'react-native';
import { quotationStyles } from '../style/quotationStyle.js';

export default function Quotation({renderData, quoteData}) {

    return(
            <View style={quotationStyles.container}>
                    <ImageBackground style={quotationStyles.background} source={require("../assets/backgroundQuote.png")}/>
                <View style={quotationStyles.quote}>
            
                    <Text style={{paddingLeft:'70%',fontSize: 20,fontWeight: 'bold',paddingBottom:10, paddingTop:30}}>
                        [{renderData.namingQuote}]
                    </Text>
                    
                    <Text style={quotationStyles.quoteText}>
                        {quoteData.text}
                    </Text>
                </View>
    
                <View style={quotationStyles.lowerBar}>
                    <View style={{alignItems:'center',paddingRight:25}}>
                        <Text style={quotationStyles.naming}>[datum]</Text>
                        <Text>.....</Text>
                    </View>
                    <View style={{alignItems:'center',paddingLeft:25}}>
                        
                        <Text style={quotationStyles.naming}>
                            [{renderData.namingAuthor}]
                        </Text>
                        
                        <Text>
                            {quoteData.autor}
                        </Text>
    
                    </View>
                </View>
            
            </View>
        );
}


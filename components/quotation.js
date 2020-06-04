import React from 'react';
import { Text, View, Image} from 'react-native';
import { quotationStyles } from '../style/quotationStyle.js';
import Entypo from 'react-native-vector-icons/Entypo';
import * as Font from 'expo-font'
import * as Animatable from 'react-native-animatable';

export default function Quotation({ quoteData}) {

    return(
            <View style={quotationStyles.container} >

                <Animatable.View 
                    style={quotationStyles.header}
                    animation='bounceInLeft'
                >
                    <View style={quotationStyles.imgView}>
                        <Image 
                            source={require('../assets/heartYellow.png')}
                            style={quotationStyles.image}
                        />
                        <Entypo 
                            name='quote'
                            size={40}
                            style={quotationStyles.quoteIcon}
                        />   
                    </View>
                </Animatable.View>

                <Animatable.View 
                    style={quotationStyles.body}
                    animation='bounceIn'
                >
                    <Text style={quotationStyles.text}>
                        {quoteData.text}
                    </Text>
                </Animatable.View>

                <Animatable.View 
                    style={quotationStyles.footer}
                    animation='bounceInRight'
                >
                    <View style={quotationStyles.imgView}>
                        <Image 
                            source={require('../assets/heartYellow.png')}
                            style={quotationStyles.image}
                        />
                        <Entypo 
                            name='quote'
                            size={40}
                            style={quotationStyles.quoteIcon}
                            
                        />
                    </View>    
                </Animatable.View>

                <Animatable.Text 
                    style={quotationStyles.autorText}
                    animation='bounceInRight'
                >
                    {quoteData.author}
                </Animatable.Text>

            </View>
        );
}


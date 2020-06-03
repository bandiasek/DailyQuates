import React from 'react';
import { Text, View, Image} from 'react-native';
import { quotationStyles } from '../style/quotationStyle.js';
import * as Font from 'expo-font'
import * as Animatable from 'react-native-animatable';

export default function Quotation({ quoteData}) {

    return(
            <View style={quotationStyles.container} >

                <View style={quotationStyles.header}>
                    <View style={quotationStyles.imgView}>
                        <Image 
                            source={require('../assets/heartYellow.png')}
                            style={quotationStyles.image}
                        />
                    </View>
                </View>

                <View style={quotationStyles.body}>
                    <Text>
                        {/*quoteData.text*/}
                        TEXT CITATU
                    </Text>
                </View>

                <View style={quotationStyles.footer}>
                    <View style={quotationStyles.imgView}>
                        <Image 
                            source={require('../assets/heartYellow.png')}
                            style={quotationStyles.image}
                        />
                    </View>    
                </View>

                <Text style={quotationStyles.autorText}>
                    {/*quoteData.author*/}
                    Author
                </Text>

            </View>
        );
}


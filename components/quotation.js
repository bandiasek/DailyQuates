import React from 'react';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';

export default function Quotation({quote}) {
    return(
        <View style={styles.container}>
            <ImageBackground style={styles.background} source={require("../assets/backgroundQuote.png")}/>
            <View style={styles.quote}>
                <Text style={{paddingLeft:'70%',fontSize: 20,fontWeight: 'bold',paddingBottom:10}}>[citát]</Text>
                <Text style={styles.quoteText}>{quote.text}</Text>
            </View>

            <View style={styles.lowerBar}>
                <View style={{alignItems:'center',paddingRight:25}}>
                    <Text style={styles.naming}>[Dátum]</Text>
                    <Text>.....</Text>
                </View>
                <View style={{alignItems:'center',paddingLeft:25}}>
                    <Text style={styles.naming}>[Autor]</Text>
                    <Text >{quote.autor}</Text>
                </View>
            </View>
        
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 3,
        alignItems: 'center',
    },
    
    quote: {
        padding: 50,
        position: 'absolute',
    },

    naming: {
        fontSize: 20,
        fontWeight: 'bold',
        paddingBottom:10
    },
    
    quoteText: {
        fontSize: 27,
        textAlign: "center"
    },

    lowerBar: {
        flexDirection: 'row',
        position: 'absolute',
        bottom: 70
    },

    background: {
        width: '100%',
        height: '100%',
        position: 'absolute',
        zIndex: 5000

    }
});
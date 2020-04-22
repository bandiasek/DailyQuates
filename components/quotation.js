import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function Quotation({quote}) {
    return(
        <View style={styles.container}>
            <View style={styles.quote}>
                <Text style={styles.naming}>[citát]</Text>
                <Text style={styles.quoteText}>{quote.text}</Text>
            </View>

            <View style={styles.lowerBar}>
                <View style={styles.placeUnder}>
                    <Text style={styles.naming}>[Dátum]</Text>
                    <Text>.....</Text>
                </View>
                <View style={styles.placeUnder}>
                    <Text style={styles.naming}>[Autor]</Text>
                    <Text >{quote.autor}</Text>
                </View>
            </View>
        
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '80%',
        alignItems: 'center',
        backgroundColor: 'green',
        justifyContent: 'space-around'
    },

    quote: {
        padding: 25
    },

    naming: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    
    quoteText: {
        fontSize: 27
    },

    lowerBar: {
        flexDirection: 'row',
        justifyContent: "space-between"

    },

    placeUnder: {
        alignItems: 'center'

    },

});
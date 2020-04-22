import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function Quotation({quote}) {
    return(
        <View>
            <Text>{quote.autor}</Text>
            <Text>{quote.text}</Text>
        </View>
    );
}
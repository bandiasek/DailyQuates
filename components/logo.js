import React,{ useEffect, useState } from 'react';
import {Text, Image, StyleSheet, View} from 'react-native';
import * as Font from 'expo-font'

export default function Logo (){
    const [state,setState] = useState(false);

    const loadFont = async() => {
        await Font.loadAsync({
            LemonTuesday: require('../assets/fonts/LemonTuesday.otf')
        });
        setState(true);
    }

    useEffect(()=>{
        loadFont();
    });

    if(state){
        return(
            <View>
                <Text style={styles.text}>DailyQuotes</Text>
                <Image
                    source={require('../assets/logo_background.png')}
                    style={styles.logoImg}
                />
            </View>
        );
    }else{
        return(
            <View>
                <Text>Loading</Text>
            </View>
        );
    }  
}

const styles = StyleSheet.create({
    container: {
        position:'relative'
    },
    text:{
        fontSize:45,
        fontWeight:'bold',
        padding:30,
        fontFamily:'LemonTuesday',
        zIndex:5
    },
    logoImg:{
        zIndex:2,
        position:'absolute',
        width:260,
        height:180,
        top:-20,
        right:10

    }
});
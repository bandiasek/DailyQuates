import { StyleSheet } from 'react-native';

export const dailyQuotesStyle = StyleSheet.create({
    
    container: {
        flex: 1,
        backgroundColor: '#ECECEC',
        alignContent: 'center',
      },

    header: {
        flex: 3,
        padding: 10,
        justifyContent: 'center',
        alignItems: 'center',
      },

    body:{
        flex: 6,
        padding: 10
      },

    footer:{
        flex: 2,
        padding:10,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center'
      },

    leftBtn: {
        backgroundColor: 'white'
    },

    midBtn: {
        backgroundColor: 'white',
       
    },

    rightBtn: {
        backgroundColor: 'white'
    },

    icon: {
    
    },

    background: {
        flex: 1,
        resizeMode:'cover',
        justifyContent: 'center'
        
      }, 
});
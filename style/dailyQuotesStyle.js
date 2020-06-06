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
        justifyContent: 'center',
        alignItems: 'center'
      },

    leftBtn: {
        backgroundColor: 'white',
        paddingVertical: 5,
        paddingHorizontal: 40,
        borderTopLeftRadius: 25,
        borderBottomLeftRadius: 25,
        marginRight: -4
    },

    midBtn: {
        backgroundColor: 'white',
        borderRadius: 55,
        padding: 5,
        zIndex: 50
       
    },

    rightBtn: {
        backgroundColor: 'white',
        paddingVertical: 5,
        paddingHorizontal: 40,
        borderTopRightRadius: 25,
        borderBottomRightRadius: 25,
        marginLeft: -4
    },

    icon: {
      color: '#46505c'
    },

    background: {
        flex: 1,
        resizeMode:'cover',
        justifyContent: 'center'
        
      }, 
});
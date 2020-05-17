import { StyleSheet } from 'react-native';

export const authStyle = StyleSheet.create({
    
    mainContainer:{
        
    },

    wrapper: {
        flex:1,
        justifyContent:'center',
        alignContent:'center',
        alignItems:'center',
    },
    heading: {
        fontSize:45,
        textAlign:'center',
        paddingBottom:10
    },
    
    textInput: {
        backgroundColor:'#DEDEDE',
        fontSize:30,
        textAlign:'center',
        padding: 15,
        marginBottom: 8,
        borderRadius:10
    },
    loginBtn: {
        backgroundColor: '#0099ff',
        padding:5,
        borderRadius:10,
        marginTop: 10
    },
    loginBtnText: {
        textAlign:'center',
        fontSize:20
    }

});
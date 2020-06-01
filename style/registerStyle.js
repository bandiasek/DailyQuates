import { StyleSheet } from 'react-native';

export const registerStyle = StyleSheet.create({

    wrapper: {
        flex:1,
        justifyContent:'center',
        alignContent:'center',
        alignItems:'center',
    },
    
    container: {
        flex: 1,
        backgroundColor: '#ECECEC',
        paddingTop:20
    },

    header: {
        flex: 2,
        justifyContent:'center',
        alignItems:'center',
        
    },
    footer: {
       flex: 5,
       backgroundColor:'#FDCE41',
       paddingVertical: 50,
       paddingHorizontal: 30,
       borderTopRightRadius:60,
       borderTopLeftRadius:60
    },
    heading:{
        textAlign:'center', 
        fontSize:50,
        marginBottom:40,
        color: '#272523'
    },
    text:{
        fontSize:25
    },
    inputSection:{
        backgroundColor:'#ECECEC',
        flexDirection:'row',
        alignItems:'center',
        borderRadius:15,
        marginBottom: 20,
        overflow:'hidden'
    },
    textInput:{
        padding:10,
        fontSize:20,
        flex: 8
    },
    icon:{
        flex: 1,
        paddingLeft: 10,
        paddingTop: 10,
        paddingBottom: 10
    },
    btnSection:{
        paddingTop:10,
        alignItems:'center'
    },
    signInOpacity:{
        backgroundColor:'#272523',
        marginBottom:15,
        borderRadius:20,
        width:'60%'
    },
    signInText:{
        textAlign:'center',
        fontSize:30,
        padding:10,
        color: '#ECECEC'
    },
    signUpOpacity:{
        marginTop:80,
        position:'relative',
        borderBottomColor: '#272523',
        borderBottomWidth: 2
    },
    signUpText:{
        textAlign:'center',
        fontSize:25,
        color: '#272523'
    },


});
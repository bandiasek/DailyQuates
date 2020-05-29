import { StyleSheet } from 'react-native';

export const authStyle = StyleSheet.create({

    wrapper: {
        flex:1,
        justifyContent:'center',
        alignContent:'center',
        alignItems:'center',
    },
    
    container: {
        flex: 1,
        backgroundColor: '#E9EBEE'
    },

    header: {
        flex: 2,
        backgroundColor:'blue',
        justifyContent:'center',
        alignItems:'center'
    },
    footer: {
        flex: 5,
       backgroundColor:'blue',
       paddingVertical: 50,
       paddingHorizontal: 30
    }

    

});
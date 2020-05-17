import { StyleSheet } from 'react-native';

export const firstStartStyle = StyleSheet.create({
    
    mainContainer: {
        width: '100%',
        height: '100%',
        flex: 1
      },
      
    buttonSection: {
        flex: 1,
        alignItems:'center',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
    },
    
    text: {
        padding: 20,
        fontSize: 20,
        backgroundColor: '#DEDEDE',
        borderRadius: 12,
        overflow: 'hidden',
        textAlign: 'center'
    }
    

});
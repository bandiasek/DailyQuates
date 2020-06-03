import { StyleSheet } from 'react-native';

export const quotationStyles = StyleSheet.create({
    
    container: {
        flex: 1,
        alignContent: 'center',
        paddingHorizontal: 40
      },

    header: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-start',
        position:'relative',
        borderBottomWidth: 3
      },

    body:{
        flex: 10,
        justifyContent:'center',
        alignContent: 'center',
        alignItems: 'center'
      },

      text: {
        textAlign: 'center',
        fontSize: 25,
        color:'#272523'
      },

    footer:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-start',
        borderBottomWidth: 3,
        position:'relative',
      },
      
    image: {
        zIndex: 10,
        resizeMode: 'contain',
        aspectRatio: 1.2,
      },
      
    imgView: {
        position: 'absolute',
        top: -10
    },

    autorText: {
        textAlign: 'right',
        fontSize: 16,
        padding: 5,
        color: '#272523'
    }
});
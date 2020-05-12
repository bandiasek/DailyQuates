import { StyleSheet } from 'react-native';

export const homeStyle = StyleSheet.create({
    
    container: {
        flex: 1,
        backgroundColor: 'white',
        alignContent: 'center'
      },
      
      parentOfContent: {
        paddingTop:'5%'
      },
      
      heading: {
        textAlign: "center",
        fontSize: 50,
        marginTop: 25
      },
      
      content: {
        padding: '5%',
        height: '100%'
      },
      
      buttonSection: {
        flex: 1,
        justifyContent:"space-between",
        alignItems: 'center'
      },
      
      settingsBtn: {
        backgroundColor:'grey',
        borderRadius: 10,
        position: 'absolute',
        top: '40%'
      
      },
    
      quoteButton: {
        padding: 10,
        fontSize:20,
        fontWeight: 'bold',
        backgroundColor:'grey',
        borderRadius: 10,
        overflow:'hidden'
        
      }
    
});
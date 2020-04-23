import { StyleSheet } from 'react-native';

export const settingsStyle = StyleSheet.create({
    
    container: {
        flex: 1,
        alignContent: 'center',
      },
      
      parentOfContent: {
        paddingTop:'5%',
      },
      
      header: {
        textAlign: "center",
        fontSize: 30,
        color: 'black',
      },
      
      content: {
        padding: '5%',
        height: '100%'
      },
      
      buttonSection: {
        flex: 1,
        justifyContent:"space-between",
        alignItems: 'center',
        flexDirection: 'row',

      },
      
      button:{
        width: '40%',
        height: 40
      }
    
    
});
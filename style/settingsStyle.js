import { StyleSheet } from 'react-native';

export const settingsStyle = StyleSheet.create({
    
    container: {
        flex: 1,
      },
    
    background: {
        flex: 1,
        justifyContent: 'center',
        resizeMode: 'contain'
      },  

    header: {
        flex: 1,
        backgroundColor:  '#FDCE41',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        borderBottomLeftRadius: 30,
        borderBottomRightRadius: 30 
      },
    heading: {
        textAlign:'center',
        fontSize: 30,
        fontWeight: 'bold',
        color: 'white',
        paddingTop: 30
      },
    
    body: {
        flex: 5,
      },

    section: {
        alignItems: 'center',
        padding: 30
      },
    
    sectionText: {
        fontSize: 25,
        fontWeight: 'bold'
      },

    sectionBtn: {
        flexDirection: 'row',
        paddingTop: 10
      },

    sectionBtnText: {
        color: '#46505c',
        fontSize: 20,
        paddingLeft: 10
      },  

    icon: {
        color: '#46505c'
      },
    
    footer: {
        flex: 1,
        flexDirection: 'row',
        width:'100%'
      },
      
    backBtn: {
        backgroundColor: '#FDCE41',
        flexDirection: 'row',
        paddingVertical: 10,
        paddingRight: 30,
        paddingLeft: 80,
        borderBottomRightRadius: 15,
        borderTopRightRadius: 15,
      },

    textBtn: {
        fontSize: 20,
        padding: 5,
        color: 'white'
      } 

});
import { StyleSheet } from 'react-native';

export const quotationStyles = StyleSheet.create({
    container: {
        flex: 3,
        alignItems: 'center',
    },
    
    quote: {
        padding: 50,
        position: 'absolute',
    },

    naming: {
        fontSize: 20,
        fontWeight: 'bold',
        paddingBottom:10
    },
    
    quoteText: {
        fontSize: 27,
        textAlign: "center"
    },

    lowerBar: {
        flexDirection: 'row',
        position: 'absolute',
        bottom: 70
    },

    background: {
        width: '100%',
        height: '100%',
        position: 'absolute',
        zIndex: 5000

    }
});
import React,{ useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Button, Image } from 'react-native';
import Quotation from './components/quotation';

export default function App() {
  /*----basic-data-storages----*/
  const [showingQuote, setShowingQuote] = useState({autor:"Vaši vývojári", text:"Pre získanie citátu použi tlačidlo..."});
  
  /*----all-functions----------*/
  const getRandomInt = (max) => {
    return Math.floor(Math.random() * Math.floor(max));
  }
  
  const getQuoteHandller = () => {
      console.log("pressed")
  }

  return (
    <View style={styles.container}>
      <View /*this is another container wich is not full width large*/ >
        {/*there will go name of the app, similiar to tittle*/}
        <View /*This is going to be container for quotation and buttons*/>
            <Quotation quote={showingQuote}/>
            
            <View /*this is button section */ >
              <Button 
                title='Ziskaj citát'
                onPress={()=>getQuoteHandller()}
              />
              <TouchableOpacity>
                <Image source={require("./assets/settingsIcon128px.png")}/>
              </TouchableOpacity>
            </View>

        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

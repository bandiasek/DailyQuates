import React,{ useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Button, Image } from 'react-native';

export default function App() {
  /*----basic-data-storages----*/
  const [showingQuote, setShowingQuote] = useState({autor:"Vaši vývojári", text:"Pre získanie citátu použi tlačidlo..."});
  
  /*----all-functions----------*/


  return (
    <View style={styles.container}>
      <View /*this is another container wich is not full width large*/ >
        {/*there will go name of the app, similiar to tittle*/}
        <View /*This is going to be container for quotation and buttons*/>
            {/*there is going to be component quotation*/}
            <View /*this is button section with opacities*/ >
              <Button 
                title='Ziskaj citát'
              />
              <TouchableOpacity>
                <Image source={require()} /*there should go setting icon*/ />
                <Text /*temporary*/ >Nastavenia</Text>
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

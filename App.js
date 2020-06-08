import React,{ useState, useEffect, useMemo } from 'react';
import HomeStack from './routes/homeStack';
import AuthStack from './routes/authStack';
import LanguageSettings from './screens/languageSetting';
import { ActivityIndicator, AsyncStorage, View } from 'react-native';
import {FuncContext} from './components/funcContext';
import dailyQuotesEnglish from './public/dailyQuotesEnglish.json';
import dailyQuotesSlovak from './public/dailyQuotesSlovak.json';

export default function App() {
/*----all-data---------------*/
const [userToken, setUserToken] = useState(null);
const [isLoading, setIsLoading] = useState(true);
const [userChoice, setUserChoice] = useState(null);
const [syntax, setSyntax] = useState(null);

/*----use-memo---------------*/
const funcContext = useMemo(()=>({
  
  signIn: (email, password) => {
      setIsLoading(true);
      console.log('starting login method');
        fetch(
          'http://dailyquotes.project-samson.com/api/login',
            {
              method: 'POST',
              headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                  email: email,
                  password: password
                    })
                  })
                          
                  .then((response)=>response.json())
                  .then((res) => {
                  console.log(res.state == 1 ? 'succesfuly login' : 'login failed');
                    if(res.state){
                      AsyncStorage.setItem('token', res.success.token);
                      setUserToken(res.success.token);
                      }else{
                        alert('Login failed');
                      }
                    })
                    .catch((error)=>{
                      alert(error);
                    })
                    .done();
      setIsLoading(false);
  },

  signOut: async () => {
      setIsLoading(true);
      setUserToken(null);
      try {
        await AsyncStorage.removeItem('token');
      }
      catch(exception) {
          alert(exception);
        }
      setIsLoading(false);
  },
  signUp: (name, email, password, confirmPassword) => {
      setIsLoading(true);
      console.log('starting registration method');
        fetch(
            'http://dailyquotes.project-samson.com/api/register',
            {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    name: name,
                    email: email,
                    password: password,
                    c_password: confirmPassword,
                })
            })
            .then((response)=>response.json())
            .then((res) => {
                console.log(res.state == 1 ? 'succesfuly registered' : 'registration failed');
                if(res.state){
                  setUserToken(res.success.token);  
                  AsyncStorage.setItem('token', res.success.token);
                }else{
                    alert('Registration failed');
                }
            })
            .catch((error)=>{
                alert(error);
            })
            .done();
      setIsLoading(false);
  },

  setChoice: async (text) => {
      setIsLoading(true);
      setUserChoice(text);
      AsyncStorage.setItem('userChoice', text);
      setSyntax(
        text === 'english' ? dailyQuotesEnglish
          : dailyQuotesSlovak
        );
      setIsLoading(false);
  },

  remChoice: async () => {
    setIsLoading(true);
    setUserChoice(null);
      try {
        await AsyncStorage.removeItem('userChoice');
      }
      catch(exception) {
          alert(exception);
        };
     setIsLoading(false);   
  },

}));

/*----functions---------------*/
const firstStartChoice = async () =>{
  try{
    await AsyncStorage.getItem('userChoice')
      .then((userChoice)=>{
        if(userChoice!==null){
          setSyntax(
            userChoice === 'english' ? dailyQuotesEnglish
              : dailyQuotesSlovak
            );
          setUserChoice(userChoice);  
        }else{
          console.log('userChoice is null');
        }
      }).done();
  
  }catch(error){
    alert(error);
  }   
}

const firstStartToken = async () =>{
  try{
    await AsyncStorage.getItem('token')
      .then((token)=>{
        if(token!==null){
          setUserToken(token);  
        }else{
          console.log('token is null');
        }
      }).done();
  
  }catch(error){
    alert(error);
  }   
}

/*----use-effects------------*/
useEffect(()=>{
    firstStartChoice();
    firstStartToken();

    setTimeout(()=>{
      setIsLoading(false);
    },2000);

},[]);

/*----app-setuping------------*/
    if( isLoading ){
        
        return(
          <View style={{flex:1, justifyContent: 'center', alignItems: 'center'}}>
            <ActivityIndicator size='large' />
          </View>
        );
    }

    if( userChoice === null ){
          
          return(
            <FuncContext.Provider value={funcContext}>
                <LanguageSettings />
            </FuncContext.Provider>
          );
    }

    if( userToken === null ){
              
              return(
                
                <FuncContext.Provider value={funcContext, syntax}>
                  <AuthStack />
                </FuncContext.Provider>
              
              );
    }
    return(
      <FuncContext.Provider value={funcContext, syntax}>
        <HomeStack />
      </FuncContext.Provider>
    );

            

          

      
    
}

import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import DailyQuotes from '../screens/dailyQuotes';
import Settings from '../screens/settings';
import LanguageSetting from '../screens/languageSetting';
import Auth from '../screens/auth';

const screens = {
    Auth: {
        screen: Auth,
        navigationOptions: {
            title: 'Auth',
            headerShown: false 
        }
    },
    
    LanguageSetting: {
        screen: LanguageSetting,
        navigationOptions: {
            title: 'Language Setting',
            headerShown: false 
        }
    },
    
    DailyQuotes: {
        screen: DailyQuotes,
        navigationOptions: {
            title: 'Daily Quotes',
            headerShown: false  
        }
    },

    Settings: {
        screen: Settings,
        navigationOptions: {
            title: 'Daily Quotes',
            headerShown: false  
        }
    }
};


const HomeStack = createStackNavigator(screens);

export default createAppContainer(HomeStack);
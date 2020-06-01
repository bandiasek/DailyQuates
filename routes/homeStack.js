import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import DailyQuotes from '../screens/dailyQuotes';
import Settings from '../screens/settings';
import LanguageSetting from '../screens/languageSetting';
import Auth from '../screens/auth';
import Register from '../screens/register';

const screens = { 
    LanguageSetting: {
        screen: LanguageSetting,
        navigationOptions: {
            title: 'Language Setting',
            headerShown: false,
            gesturesEnabled: false,
        }
    },

    Auth: {
        screen: Auth,
        navigationOptions: {
            title: 'Auth',
            headerShown: false,
            gesturesEnabled: false,
        }
    },

    Register: {
        screen: Register,
        navigationOptions: {
            title: 'Register',
            headerShown: false,
        }
    },
    
    DailyQuotes: {
        screen: DailyQuotes,
        navigationOptions: {
            title: 'Daily Quotes',
            headerShown: false,
            gesturesEnabled: false, 
        }
    },

    Settings: {
        screen: Settings,
        navigationOptions: {
            title: 'Settings',
            headerShown: false  
        }
    }
};


const HomeStack = createStackNavigator(screens);

export default createAppContainer(HomeStack);
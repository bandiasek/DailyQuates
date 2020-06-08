import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import DailyQuotes from '../screens/dailyQuotes';
import Settings from '../screens/settings';

const screens = { 
    
    DailyQuotes: {
        screen: DailyQuotes,
        navigationOptions: {
            title: 'Daily Quotes',
            headerShown: false,
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
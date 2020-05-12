import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import DailyQuotes from '../screens/dailyQuotes';
import Settings from '../screens/settings';
import FirstStart from '../screens/firstStart';

const screens = {
    FirstStart: {
        screen: FirstStart,
        navigationOptions: {
            title: 'First Start',
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
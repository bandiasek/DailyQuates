import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import DailyQuotes from '../screens/dailyQuotes';
import Settings from '../screens/settings';
import FirstStart from '../screens/firstStart';

const screens = {
    FirstStart: {
        screen: FirstStart
    },
    
    DailyQuotes: {
        screen: DailyQuotes
    },

    Settings: {
        screen: Settings
    }
};

const HomeStack = createStackNavigator(screens);

export default createAppContainer(HomeStack);
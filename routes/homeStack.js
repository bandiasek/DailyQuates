import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import DailyQuotes from '../screens/dailyQuotes';
import Settings from '../screens/settings';

const screens = {
    DailyQuotes: {
        screen: DailyQuotes
    },

    Settings: {
        screen: Settings
    }
};

const HomeStack = createStackNavigator(screens);

export default createAppContainer(HomeStack);
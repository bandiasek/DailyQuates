import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import Home from '../screens/home';
import Settings from '../screens/settings';

const screens = {
    Home: {
        screen: Home
    },

    Settings: {
        screen: Settings
    }
};

const HomeStack = createStackNavigator(screens);

export default createAppContainer(HomeStack);
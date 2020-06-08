import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import Auth from '../screens/auth';
import Register from '../screens/register';

const screens = { 

    Auth: {
        screen: Auth,
        navigationOptions: {
            title: 'Auth',
            headerShown: false,
        }
    },

    Register: {
        screen: Register,
        navigationOptions: {
            title: 'Register',
            headerShown: false,
        }
    }
    
};


const AuthStack = createStackNavigator(screens);

export default createAppContainer(AuthStack);
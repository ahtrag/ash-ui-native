import TestScreen from './src/screens/Test';
import {createAppContainer, createStackNavigator} from 'react-navigation';

const Route = createStackNavigator(
  {
    Test: {
      screen: TestScreen,
    },
  },
  {
    initialRouteName: 'Test',
    defaultNavigationOptions: {
      header: null,
    },
  },
);

export default createAppContainer(Route);

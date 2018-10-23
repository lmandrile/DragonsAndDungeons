import { MainMenuScreen } from './Screens/MainMenuScreen.js';
import { ClientStatEnterScreen } from './Screens/ClientStatEnterScreen.js';
import { ClientServerSelectScreen } from './Screens/ClientServerSelectScreen.js';
import {ServerEnterPortScreen} from './Screens/ServerEnterPortScreen.js';


import React from 'react';
import { createStackNavigator } from 'react-navigation';

const RootStack = createStackNavigator({
  mainMenuScreen: {
    screen: MainMenuScreen
  },
  clientServerSelectScreen: {
    screen: ClientServerSelectScreen
  },
  clientStatEnterScreen: {
    screen: ClientStatEnterScreen
  },
  serverEnterPortScreen: {
    screen: ServerEnterPortScreen
  }
});

export default class App extends React.Component {
  render() {
    return <RootStack />;
  }
}
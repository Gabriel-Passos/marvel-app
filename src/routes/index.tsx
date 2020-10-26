import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from '../pages/Home';
import HeroDetails from '../pages/HeroDetails';

const AppStack = createStackNavigator();

const routes: React.FC = () => {
  return (
    <NavigationContainer>
      <AppStack.Navigator
        headerMode="none"
        screenOptions={{
          cardStyle: {
            backgroundColor: '#fff'
          }
        }}
      >
        <AppStack.Screen name="Home" component={Home} />
        <AppStack.Screen name="HeroDetails" component={HeroDetails} />
      </AppStack.Navigator>
    </NavigationContainer>
  );
}

export default routes;
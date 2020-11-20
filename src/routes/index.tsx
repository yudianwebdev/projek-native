import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {Input, Home} from '../pages';

const Stack = createStackNavigator();
const Routes = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} />
    </Stack.Navigator>
  );
};

export default Routes;

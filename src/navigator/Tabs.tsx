import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Tab1Screen } from '../screens/Tab1Screen';
import { Tab2Screen } from '../screens/Tab2Screen';
import { Tab3Screen } from '../screens/Tab3Screen';
import { StackNavigator } from './StackNavigator';
import { colors } from '../theme/appTheme';

const Tab = createBottomTabNavigator();

export const Tabs = () => {
  return (
    <Tab.Navigator
    sceneContainerStyle = {{
      backgroundColor: 'white',
    }} 
    screenOptions= {{
        tabBarActiveTintColor: colors.primary,
        tabBarStyle: {
          borderTopColor: colors.primary,
          borderTopWidth: 0,
          elevation:0
        }
      }}
    >
      <Tab.Screen name="Tab1" options={{title: 'Tab1'}} component={Tab1Screen} />
      <Tab.Screen name="Tab2" options={{title: 'Tab2'}} component={Tab2Screen} />
      <Tab.Screen name="StackNavigator" options={{title: 'Stack'}} component={StackNavigator} />
    </Tab.Navigator>
  );
}
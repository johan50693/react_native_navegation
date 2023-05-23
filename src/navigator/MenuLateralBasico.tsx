import * as React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { StackNavigator } from './StackNavigator';
import { SettingsScreen } from '../screens/SettingsScreeen';
import { useWindowDimensions } from 'react-native';

const Drawer = createDrawerNavigator();

export const MenuLateralBasico = () =>  {

  const { width} = useWindowDimensions();

  return (
    <Drawer.Navigator
      screenOptions={{
        // drawerType: width >= 200 ? 'permanent' : 'front',
        // headerShown: false 
      }}
    >
      <Drawer.Screen name="StackNavigator" options={{ title: 'Home'}} component={StackNavigator} />
      <Drawer.Screen name="SettingsScreen" options={{ title: 'Settings'}} component={SettingsScreen} />
    </Drawer.Navigator>
  );
}
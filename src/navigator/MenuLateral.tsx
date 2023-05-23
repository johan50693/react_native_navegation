import * as React from 'react';
import { DrawerContentComponentProps, DrawerContentScrollView, createDrawerNavigator } from '@react-navigation/drawer';
import { StackNavigator } from './StackNavigator';
import { SettingsScreen } from '../screens/SettingsScreeen';
import { Image, Text, View, useWindowDimensions } from 'react-native';
import { styles } from '../theme/appTheme';

const Drawer = createDrawerNavigator();

export const MenuLateral = () =>  {

  return (
    <Drawer.Navigator
      drawerContent={(props) => <MenuInterno {...props} />}
    >
      <Drawer.Screen name="StackNavigator"  component={StackNavigator} />
      <Drawer.Screen name="SettingsScreen"  component={SettingsScreen} />
    </Drawer.Navigator>
  );
}

const MenuInterno = ( props : DrawerContentComponentProps) => {
  
  return (
    <DrawerContentScrollView>
      <View style= {styles.avatarContainer}>
        <Image 
          source={{
            uri: 'https://alumni.engineering.utoronto.ca/files/2022/05/Avatar-Placeholder-400x400-1.jpg'
          }}
          style={styles.avatar}
        />
      </View>
    </DrawerContentScrollView>
  )
}
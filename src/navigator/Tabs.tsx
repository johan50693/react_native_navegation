import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { Tab1Screen } from '../screens/Tab1Screen';
import { StackNavigator } from './StackNavigator';
import { colors } from '../theme/appTheme';
import { Text, Platform } from 'react-native';
import { TopTabNavigator } from './TopTapNavigator';
import Icon from 'react-native-vector-icons/Ionicons';

export const Tabs = () => {

  return Platform.OS === 'ios'
          ? <TabsIOS/>
          : <TabsAndroid/>
}


export const BottonTabAndroid = createMaterialBottomTabNavigator();

const TabsAndroid = () => {
  return (
    <BottonTabAndroid.Navigator
      barStyle={{ backgroundColor: colors.primary }}
      screenOptions= {({route}) => ({
        tabBarActiveTintColor: colors.primary,
        tabBarStyle: {
          borderTopColor: colors.primary,
          borderTopWidth: 0,
          elevation:0
        },
        tabBarLabelStyle: {
          fontSize: 15
        },
        tabBarIcon: ({color,focused}) => {
          // console.log(route);

          let iconName: string = '';

          switch (route.name) {
            case 'Tab1':
              
              iconName = "logo-ionic";
              break;
            
            case 'Tab2':
              iconName = "tablet-landscape-outline";
              break;

            case 'StackNavigator':
              iconName = "document-outline";
              break;
          
          }
          return <Icon name={iconName} size={20} color='white' />;
        }
      })}
    >
      <BottonTabAndroid.Screen name="Tab1" options={{title: 'Tab1'}} component={Tab1Screen} />
      <BottonTabAndroid.Screen name="Tab2" options={{title: 'Tab2'}} component={TopTabNavigator} />
      <BottonTabAndroid.Screen name="StackNavigator" options={{title: 'Stack'}} component={StackNavigator} />
    </BottonTabAndroid.Navigator>
  );
}


export const BottonTabIOS = createBottomTabNavigator();

export const TabsIOS = () => {
  return (
    <BottonTabIOS.Navigator
    sceneContainerStyle = {{
      backgroundColor: 'white',
    }} 
    screenOptions= {({route}) => ({
        tabBarActiveTintColor: colors.primary,
        tabBarStyle: {
          borderTopColor: colors.primary,
          borderTopWidth: 0,
          elevation:0
        },
        tabBarLabelStyle: {
          fontSize: 15
        },
        tabBarIcon: ({color,focused,size}) => {
          // console.log(route);

          let iconName: String = '';

          switch (route.name) {
            case 'Tab1':
              
              iconName = "logo-ionic";
              break;
            
            case 'Tab2':
              iconName = "tablet-landscape-outline";
              break;

            case 'StackNavigator':
              iconName = "document-outline";
              break;
          
          }
          return <Icon name={iconName} size={30} color='white' />;
        }
      })}
      
    >
      {/* <Tab.Screen name="Tab1" options={{title: 'Tab1', tabBarIcon: (props) => <Text style={{color: props.color}} >Text1</Text>}} component={Tab1Screen} /> */}
      <BottonTabIOS.Screen name="Tab1" options={{title: 'Tab1'}} component={Tab1Screen} />
      <BottonTabIOS.Screen name="Tab2" options={{title: 'Tab2'}} component={TopTabNavigator} />
      <BottonTabIOS.Screen name="StackNavigator" options={{title: 'Stack'}} component={StackNavigator} />
    </BottonTabIOS.Navigator>
  );
}
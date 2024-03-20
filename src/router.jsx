import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import ChatScreen from './pages/ChatScreen';
import Splash from './pages/Splash';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Detail from './pages/Detail';
import BasicCalendar from './pages/BasicCalendar';
import Home from './pages/Home';
import Setting from './pages/Setting';
import Notice from './pages/Notice';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const MainTab = () => {
  return (
    <Tab.Navigator screenOptions={{headerShown: false}}>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Chat" component={ChatScreen} />
      <Tab.Screen name="BasicCalendar" component={BasicCalendar} />
      <Tab.Screen name="Setting" component={Setting} />
    </Tab.Navigator>
  );
};
export default () => {
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false, gestureEnabled: false}}>
      <Stack.Screen name="Splash" component={Splash} />
      <Stack.Screen name="MainTab" component={MainTab} />
      <Stack.Screen name="Detail" component={Detail} />
      <Stack.Screen name="Notice" component={Notice} />
    </Stack.Navigator>
  );
};

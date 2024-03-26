import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {HomeScreen} from './libs/views/home';
import {DashboardScreen} from './libs/views/dashboard';
import {NotificationScreen} from './libs/views/notifications';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {logScreenView} from './libs/utils/analytics';

const Tab = createBottomTabNavigator();

function App(): JSX.Element {
  return (
    <NavigationContainer>
      <Tab.Navigator initialRouteName="Home">
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            title: 'Home',
            tabBarLabel: 'Home',
            // eslint-disable-next-line react/no-unstable-nested-components
            tabBarIcon: () => (
              <Ionicons
                name="home-outline"
                size={24}
                // eslint-disable-next-line react-native/no-inline-styles
                style={{backgroundColor: 'transparent'}}
              />
            ),
          }}
          listeners={() => ({
            tabPress: async () => {
              await logScreenView('Home');
            },
          })}
        />
        <Tab.Screen
          name="Dashboard"
          component={DashboardScreen}
          options={{
            title: 'Dashboard',
            tabBarLabel: 'Dashboard',
            // eslint-disable-next-line react/no-unstable-nested-components
            tabBarIcon: () => (
              <Ionicons
                name="clipboard-outline"
                size={24}
                // eslint-disable-next-line react-native/no-inline-styles
                style={{backgroundColor: 'transparent'}}
              />
            ),
          }}
          listeners={() => ({
            tabPress: async () => {
              await logScreenView('Dashboard');
            },
          })}
        />
        <Tab.Screen
          name="Notifications"
          component={NotificationScreen}
          options={{
            title: 'Notifications',
            tabBarLabel: 'Notifications',
            // eslint-disable-next-line react/no-unstable-nested-components
            tabBarIcon: () => (
              <Ionicons
                name="notifications-outline"
                size={24}
                // eslint-disable-next-line react-native/no-inline-styles
                style={{backgroundColor: 'transparent'}}
              />
            ),
          }}
          listeners={() => ({
            tabPress: async () => {
              await logScreenView('Notifications');
            },
          })}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default App;

// /Users/damilolaadisa/Documents/paynflex/app/bottom-navigation.tsx
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';

import Profile from '../profile'; 
import Onboarding from '../onboarding'; 
import Home from '../home'; 
import Transactions from '../transactions';
import Business from '../business';

const Tab = createBottomTabNavigator();

const BottomNavigation = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color, size }) => {
            // Assign a default value to iconName
            let iconName: keyof typeof Ionicons.glyphMap = 'help-circle-outline';

            if (route.name === 'Home') {
              iconName = 'home';  
            } else if (route.name === 'Transactions') {
              iconName = 'folder-open'; 
            } else if (route.name === 'Business') {
              iconName = 'briefcase-outline'; // Updated to match route name
            } else if (route.name === 'Profile') {
              iconName = 'person-circle-outline'; 
            }

            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: '#0F40D3',
          tabBarInactiveTintColor: 'gray',
          headerShown: false, 
        })}
      >
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Transactions" component={Transactions} />
        <Tab.Screen name="Business" component={Business} />
        <Tab.Screen name="Profile" component={Profile} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default BottomNavigation;

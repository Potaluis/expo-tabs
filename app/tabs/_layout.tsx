import React from 'react';
import { Tabs } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

const TabsLayout = () => {
  return (
    <Tabs screenOptions={{ tabBarActiveTintColor: '#ff4242' }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'LOGIN',
          tabBarIcon: ({ color, size }) => <Ionicons  size={28} name="home-outline" color={color} />,
        }}
      />
      <Tabs.Screen
        name="productos/index"
        options={{
          title:'productos',
          tabBarIcon: ({ color }) => <Ionicons size={28} name="film-outline" color={color} />,
        }}
      />
      <Tabs.Screen
        name="configuracion/index"
        options={{
          title: 'Configuracion',
          tabBarIcon: ({ color }) => <Ionicons size={28} name="construct-outline" color={color} />,
        }}
      />
    </Tabs>
  )
}

export default TabsLayout

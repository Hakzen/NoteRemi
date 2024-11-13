// app/_layout.jsx
import React from 'react';
import { Tabs } from 'expo-router';

export default function MainLayout() {
  return (
    <Tabs>
      <Tabs.Screen name="(auth)" options={{ headerShown: false }} />
      <Tabs.Screen name="(tab)" options={{ headerShown: false }} />
    </Tabs>
  );
}

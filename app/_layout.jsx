// app/_layout.jsx

import { Redirect, Stack } from 'expo-router';
import { useState, useEffect } from 'react';

export default function Layout() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    // Placeholder logic for authentication status
    // Replace this with your actual authentication check
    const checkAuthStatus = async () => {
      const userIsLoggedIn = false; // Replace with actual logic
      setIsAuthenticated(userIsLoggedIn);
    };

    checkAuthStatus();
  }, []);

  if (!isAuthenticated) {
    return <Redirect href="/auth/login" />;
  }

  return (
    <Stack screenOptions={{ headerShown: false }}>
      {/* This will render any nested routes (like /tab/notes) when the user is authenticated */}
    </Stack>
  );
}

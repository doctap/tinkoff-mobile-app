import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { AuthProvider } from './src/providers';
import { Navigation } from './src/navigation';

const App = () => {
  return (
    <AuthProvider>
      <Navigation />
    </AuthProvider>
  );
};

export default App;
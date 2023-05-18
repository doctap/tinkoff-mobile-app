import { StyleSheet, Text, View, ViewStyle } from 'react-native';
import React from 'react';

interface IPaddingContainer {
  style?: ViewStyle
  children: React.ReactNode
}

export const PaddingContainer = (prop: IPaddingContainer) => {
  return (
    <View style={{padding: 10, ...prop.style}}>
      {prop.children}
    </View>
  );
};

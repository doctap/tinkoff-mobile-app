import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { styleWrapper } from '../../styles/styles';

interface ILayout {
  children: React.ReactNode
  isScrollView?: boolean
}
export const Layout = (prop: ILayout) => {
  return (
    <View
      style={styles.wrap}
    >
      {prop.isScrollView ?? false
        ? <ScrollView>{prop.children}</ScrollView>
        : prop.children}
    </View>
  );
};

const styles = StyleSheet.create(styleWrapper);
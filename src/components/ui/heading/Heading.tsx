import React, { FC } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { ColorGrey800 } from '../../../themes';
import { PaddingContainer } from '..';

export const Heading: FC<{ text: string }> = ({ text }) => {
  return (
    <PaddingContainer>
      <Text>{text}</Text>
    </PaddingContainer>
  );
};

const styles = StyleSheet.create({
  heading: {
    color: ColorGrey800,
    fontSize: 25
  }
});

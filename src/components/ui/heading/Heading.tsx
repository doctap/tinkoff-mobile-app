import React, { FC } from 'react';
import { Text, StyleSheet } from 'react-native';
import { ColorGrey800 } from '../../../themes';
import { PaddingContainer } from '../';

interface IHeading {
  text: string
  justify?: JustifyContentType
}

export type JustifyContentType = 'flex-start' | 'center' | 'flex-end';

export const Heading = (prop: IHeading) => {
  return (
    <PaddingContainer style={{
      flex: 0,
      flexDirection: 'row',
      justifyContent: prop.justify
    }}>
      <Text style={styles.heading}>{prop.text}</Text>
    </PaddingContainer>
  );
};

const styles = StyleSheet.create({
  heading: {
    color: ColorGrey800,
    fontSize: 25,
    fontWeight: '600'
  }
});

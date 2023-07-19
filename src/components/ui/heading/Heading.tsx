import React, { FC } from 'react';
import { Text, StyleSheet } from 'react-native';
import { Grey800 } from '../../../themes';
import { PaddingContainer } from '../';
import { JustifyPositionType } from '../../../styles';

interface IHeading {
  text: string
  justify?: JustifyPositionType
}

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
    color: Grey800,
    fontSize: 25,
    fontWeight: '600'
  }
});

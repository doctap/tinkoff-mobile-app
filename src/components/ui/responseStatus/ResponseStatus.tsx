import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { IMargin } from '../../../styles/styleTypes';

interface IResponseStatus {
  message: string
}

export const ResponseStatus = (prop: IResponseStatus & IMargin) => {
  const { margin, marginBottom = 10, marginLeft, marginRight, marginTop } = prop;

  return (
    <View style={{
      marginTop,
      marginRight,
      marginBottom,
      margin,
      ...styles.wrapper
    }}>
      <Text style={styles.text}>{prop.message}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    padding: 10,
    backgroundColor: '#4ad26e',
    borderRadius: 10,
  },
  text: {
    color: '#ffffff'
  },
});

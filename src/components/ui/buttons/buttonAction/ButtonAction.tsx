import React from 'react';
import { TouchableHighlight, Text, StyleSheet } from 'react-native';

interface IButtonAction {
  onPress: () => void
  name: string
  colors: readonly [string, string]
}

export const ButtonAction = (prop: IButtonAction) => {
  return (
    <TouchableHighlight
      style={{
        backgroundColor: prop.colors[0],
        ...styles.button
      }}
      underlayColor={prop.colors[1]}
      onPress={prop.onPress}
    >
      <Text style={styles.name}>
        {prop.name}
      </Text>
    </TouchableHighlight>
  );
};

const styles = StyleSheet.create({
  button: {
    color: 'grey',
    borderRadius: 10,
    padding: 10,
  },
  name: {
    textAlign: 'center'
  }
});

import React from 'react';
import { TouchableHighlight, Text, StyleSheet } from 'react-native';
import { IMargin } from '../../../../styles/styleTypes';

interface IButtonAction {
  onPress: () => void
  name: string
  colors: readonly [string, string]
}

export const ButtonAction = (prop: IButtonAction  & IMargin) => {
  const {marginTop, marginRight, marginBottom = 10, marginLeft, margin} = prop;

  return (
    <TouchableHighlight
      style={{
        marginTop,
        marginRight,
        marginBottom,
        marginLeft,
        margin,
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

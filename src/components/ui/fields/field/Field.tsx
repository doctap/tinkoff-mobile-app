import React from 'react';
import { TextInput, StyleSheet } from 'react-native';
import { IMargin } from '../../../../styles/styleTypes';

interface IField {
  value: string
  onChange: (value: string) => void
  placeholder: string
  isSecure?: boolean
}

export const Field = (prop: IField & IMargin) => {
  const {marginTop, marginRight, marginBottom = 20, marginLeft, margin} = prop;

  return (
    <TextInput
      placeholder={prop.placeholder}
      value={prop.value}
      onChangeText={prop.onChange}
      secureTextEntry={prop.isSecure}
      autoCapitalize='none'
      style={{
        marginTop,
        marginRight,
        marginBottom,
        marginLeft,
        margin,
        ...styles.input
      }}
    />
  );
};

const styles = StyleSheet.create({
  input: {
    padding: 5,
    paddingLeft: 15,
    backgroundColor: '#d7e7ed',
    borderRadius: 10,
    width: '100%'
  }
});

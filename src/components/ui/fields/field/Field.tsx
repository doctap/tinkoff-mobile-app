import React from 'react';
import { TextInput, StyleSheet } from 'react-native';

interface IField {
  value: string
  onChange: (value: string) => void
  placeholder: string
  isSecure?: boolean
}

export const Field = (prop: IField) => {
  return (
    <TextInput
      placeholder={prop.placeholder}
      value={prop.value}
      onChangeText={prop.onChange}
      secureTextEntry={prop.isSecure}
      autoCapitalize='none'
      style={styles.input}
    />
  );
};

const styles = StyleSheet.create({
  input: {
    padding: 5,
    backgroundColor: '#d7e7ed',
    borderRadius: 10,
    width: '100%'
  }
});

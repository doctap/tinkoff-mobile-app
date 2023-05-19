import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { AvatarSize } from '../../../types';
import { ColorGrey300, ColorGrey800 } from '../../../themes';

interface IAvatar {
  name: string
  size: AvatarSize
}

export const Avatar = (prop: IAvatar) => {
  const isLarge = prop.size === 'large';

  return (
    <View style={{ ...style.capsule, ...(isLarge ? style._large : style._small) }}>
      <Text style={{
        fontSize: isLarge ? 30 : 25,
        color: 'white',
        fontWeight: '700'
      }}>
        {prop.name.slice(0, 1).toUpperCase()}
      </Text>
    </View>
  );
};

const style = StyleSheet.create({
  capsule: {
    borderRadius: 50,
    backgroundColor: ColorGrey300,
    flex: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
  _large: {
    height: 70,
    width: 70
  },
  _small: {
    height: 50,
    width: 50,
  },
})

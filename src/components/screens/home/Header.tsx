import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React from 'react';
import { Avatar, PaddingContainer, Spinner } from '../..';
import { useNavigation } from '@react-navigation/native';
import { Entypo } from '@expo/vector-icons';
import { ColorGrey800 } from '../../../themes';
import { useProfile } from '../../../hooks';

export const Header = () => {
  const { name, isLoading } = useProfile();
  const { navigate } = useNavigation();

  return isLoading
  ? <Spinner />
  : (
    <PaddingContainer style={styles.container}>
      <Avatar name={name} size='small' />
      <TouchableOpacity
        onPress={() => navigate('Profile')}
        style={styles.redirect}
      >
        <Text style={styles.userName}>{name}</Text>
        <Entypo name='chevron-small-right' size={28} style={styles.chevron} />
      </TouchableOpacity>
    </PaddingContainer>
  );
};

const styles = StyleSheet.create({
  redirect: {
    flex: 0,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  chevron: {
    color: ColorGrey800
  },
  container: {
    flex: 0,
    flexDirection: 'row',
    alignItems: 'center'
  },
  userName: {
    color: ColorGrey800,
    fontSize: 22,
    fontWeight: '600',
    marginLeft: 10
  },
});
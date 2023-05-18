import React from 'react';
import { Text, View } from 'react-native';
import { useProfile } from '../../../hooks';
import { Heading, Layout } from '../..';

export const Profile = () => {
  const { isLoading: isProfileLoading, name, setName } = useProfile();

  return (
    <Layout>
      <Heading text='Profile' />
    </Layout>
  )
}

import React from 'react';
import { useAuth, useProfile, useProfileUpdate } from '../../../hooks';
import {
  ButtonAction,
  Field,
  Heading,
  Layout,
  PaddingContainer,
  ResponseStatus,
  Spinner
} from '../..';
import { GreyActionButton, YellowActionButton } from '../../../themes';

export const Profile = () => {
  const { logout } = useAuth();
  const { isLoading: isProfileLoading, name, setName, profile } = useProfile();
  const { isLoading, isSuccess, updateProfileName } = useProfileUpdate(name, profile.docId);

  return (
    <Layout>
      <Heading text='Profile' justify='center' />
      <PaddingContainer>
        {isSuccess && <ResponseStatus message='Successful update' />}
        {(isProfileLoading || isLoading)
          ? <Spinner />
          : <>
            <Field onChange={setName} placeholder={name} value={name} />
            <ButtonAction onPress={updateProfileName} name='Update profile' colors={YellowActionButton} />
            <ButtonAction onPress={logout} name='Logout' colors={GreyActionButton} />
          </>}
      </PaddingContainer>
    </Layout>
  )
}

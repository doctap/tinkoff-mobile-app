import React, { useState } from 'react';
import { Alert } from 'react-native';
import { useAuth } from '../';
import { doc, updateDoc } from 'firebase/firestore';
import { db } from '../../firebase';

export const useProfileUpdate = (actualName: string, docId: string) => {
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const { user } = useAuth()

  const updateProfileName = async () => {
    setIsLoading(true);

    if (user === null) return;

    try {
      const docRef = doc(db, 'users', docId);

      await updateDoc(docRef, {
        displayName: actualName,
      });

      setIsSuccess(true);
      setTimeout(() => setIsLoading(false), 3000);

    } catch (error: any) {
      Alert.alert('Updating error:', error.message.toString());
    }
  }

  return {
    isLoading,
    isSuccess,
    updateProfileName,
  };
}
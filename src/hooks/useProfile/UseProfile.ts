import React, { useEffect, useState, useMemo } from 'react';
import { useAuth } from '../useAuth/UseAuth';
import { collection, limit, onSnapshot, query, where } from 'firebase/firestore';
import { db } from '../../firebase';

interface IProfile {
  _id: string
  displayName: string
  docId: string
}

export const useProfile = () => {
  const { user } = useAuth();

  const [isLoading, setIsLoading] = useState(true);
  const [profile, setProfile] = useState({} as IProfile)
  const [name, setName] = useState('');

  useEffect(() => onSnapshot(query(collection(db, 'users'),
    where('_id', '==', user?.uid), limit(1)), snapshot => {
      const profile = snapshot.docs.map(d => ({
        ...(d.data() as Omit<IProfile, 'docId'>),
        docId: d.id
      }))[0];

      setProfile(profile);
      setName(profile.displayName);
      setIsLoading(false);
    }
  ), [])

  const value = useMemo(() => ({
    name, profile, isLoading, setName
  }), [name, profile, isLoading, setName]);

  return value;
};
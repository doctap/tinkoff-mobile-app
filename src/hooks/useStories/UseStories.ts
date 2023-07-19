import React, { useEffect, useState } from 'react';
import { IStory } from '../../types';
import { collection, onSnapshot, query } from 'firebase/firestore';
import { db } from '../../firebase';

export const useStories = () => {
  const [stories, setStories] = useState<IStory[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => onSnapshot(query(collection(db, 'stories')),
    snapshot => {
      setStories(snapshot.docs.map(d => ({
        _id: d.id,
        ...d.data()
      }) as IStory));

      setIsLoading(false);
    }), []);


  return { stories, isLoading };
};

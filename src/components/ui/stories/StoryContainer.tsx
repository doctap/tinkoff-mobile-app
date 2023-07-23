import React, { useState } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { StoryContainer as SC } from 'react-native-story-view';
import { IStoryType } from '../../../types';

interface IStoryContainer {
  stories: IStoryType[]
}

export const StoryContainer = (prop: IStoryContainer) => {
  const [isStoryViewVisible, setIsStoryViewShow] = useState(true);

  return (
    <SC
      visible={isStoryViewVisible}
      enableProgress
      maxVideoDuration={10}
      stories={prop.stories}
      onComplete={() => setIsStoryViewShow(false)}
      containerStyle={styles.sc}
    />
  );
};

const styles = StyleSheet.create({
  sc: {
    width: '100%',
    height: '100%'
  }
});

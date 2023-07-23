import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { useStories } from '../../../hooks';
import { Spinner } from '../index';
import { StoryItem } from './StoryItem';
import { SafeAreaView } from 'react-native-safe-area-context';

export const Stories = () => {
  const { isLoading, stories } = useStories();

  return (
    <SafeAreaView style={styles.storyContainer}>
      {isLoading
        ? <Spinner />
        : (
          <ScrollView
            style={styles.stories}
            horizontal
            showsHorizontalScrollIndicator={false}
          >
            {stories.map(s => <StoryItem marginRight={15} key={s._id} story={s} />)}
          </ScrollView>
        )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  storyContainer: {
    flex: 1,
  },
  stories: {
    marginHorizontal: 10,
  }
});

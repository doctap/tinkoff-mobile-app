import React from 'react';
import { Pressable, ImageBackground, Text, View, StyleSheet } from 'react-native';
import { IStory } from '../../../types';
import { Blue300 } from '../../../themes';

export interface IStoryItem {
  story: IStory
  marginRight: number
}

export const StoryItem = (prop: IStoryItem) => {
  return (
    <Pressable style={{
      marginRight: prop.marginRight
    }}
      onPress={() => { }}
    >
      <View style={styles.story}>
        <ImageBackground
          source={{ uri: prop.story.images[0] }}
          resizeMode='cover'
          style={styles.image}
          imageStyle={styles.imageStyle}
        >
          <Text style={styles.text}>
            {prop.story.heading}
          </Text>
        </ImageBackground>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  story: {
    width: 80,
    height: 80,
    borderRadius: 5,
    borderColor: Blue300,
    marginLeft: 4,
    borderStyle: 'solid',
    padding: 2,
    borderWidth: 1,
  },
  image: {
    width: '100%',
    height: '100%'
  },
  imageStyle: {
    borderRadius: 4
  },
  text: {
    fontSize: 13,
    margin: 8,
    color: 'white'
  }
});

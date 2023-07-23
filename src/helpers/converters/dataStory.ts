import { IStory, IStoryType } from '../../types';
import { StoryType } from 'react-native-story-view';

export const storyConverter = (urls: string[]): IStoryType[] => urls.map((url, i) => ({ id: i, url }));
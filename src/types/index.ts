export type AvatarSize = 'small' | 'large';

export interface IStory {
  _id: string
  heading: string
  images: string[]
}

export interface IStoryType {
  id: number
  url: string
}

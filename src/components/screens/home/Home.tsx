import React from 'react'
import { Text, View } from 'react-native'
import { Header } from './Header'
import { Layout, Stories, StoryContainer } from '../..'
import { useStories } from '../../../hooks'
import { storyConverter } from '../../../helpers'

export const Home = () => {
  const { isLoading, stories } = useStories();

  return (
    <Layout>
      <Header />
      <Stories />
      {isLoading ? null : <StoryContainer stories={storyConverter(stories[0].images)} />}
      <Text>Home</Text>
    </Layout>
  )
}

import React from 'react'
import { Text, View } from 'react-native'
import { Header } from './Header'
import { Layout, Stories } from '../..'

export const Home = () => {
  return (
    <Layout>
      <Header />
      <Stories />
      <Text>Home</Text>
    </Layout>
  )
}

import { View } from 'react-native'
import React from 'react'
import Header from '../Layout/Header'
import FavoritesList from './FavoritesList'

const ContactScreen = () => {
  return (
    <View style={{flex: 1}}>
      <Header />
      <FavoritesList />
    </View>
  )
}

export default ContactScreen
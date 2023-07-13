import { View, Text } from 'react-native'
import React from 'react'
import ChatView from './ChatView'
import Header from '../Layout/Header'

const ContactScreen = () => {
  return (
    <View style={{flex: 1}}>
      <Header />
      <ChatView />
    </View>
  )
}

export default ContactScreen
import { View } from 'react-native'
import React from 'react'
import Header from '../Layout/Header'
import GroupsList from './GroupsList'

const GroupsScreen = () => {
  return (
    <View style={{flex: 1}}>
      <Header />
      <GroupsList />
    </View>
  )
}

export default GroupsScreen
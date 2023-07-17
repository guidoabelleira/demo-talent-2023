import { FlatList, StyleSheet, View } from 'react-native'
import React, { useState, useRef } from 'react'
import VideoArtistList from './VideoArtistList'
import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs'
import {WINDOW_HEIGHT} from '../utils/utils';
import Header from './Layout/Header'

const CarouselArtist = ({ route }) => {
  const { params } = route;
  const flatListRef = useRef(null);
  const [activeVideoIndex, setActiveVideoIndex] = useState(0)
  const bottomTabHeight = useBottomTabBarHeight()
  return (
    <View style={styles.container}>
      <Header />
      {
        params && (
          <FlatList 
        ref={flatListRef}
        data={params}
        pagingEnabled
        renderItem={({item, index}) => 
          <VideoArtistList 
            data={item} 
            isActive={activeVideoIndex === index} 
            currentIndex={index}
            isItemFavorite={true}
          />
          }
        onScroll={e => {
          const index = Math.round(e.nativeEvent.contentOffset.y / (WINDOW_HEIGHT - bottomTabHeight))
          setActiveVideoIndex(index);
        }}
        
      />
        )
      }
      
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
      flex: 1
    }
  })

export default CarouselArtist
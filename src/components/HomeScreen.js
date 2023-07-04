import { FlatList, StyleSheet, View, PanResponder } from 'react-native'
import React, { useState, useRef } from 'react'
import VideoItem from './VideoItem'

import dataArtistasProvider from '../utils/dataArtistas'
import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs'

import {WINDOW_HEIGHT} from '../utils/utils';

export default function HomeScreen() {
  const flatListRef = useRef(null);
  const [activeVideoIndex, setActiveVideoIndex] = useState(0)

  const bottomTabHeight = useBottomTabBarHeight()

  const onButtonPressCancel = (nextIndex) => {
    const indexes = dataArtistasProvider.length
    if (nextIndex >= 0 && nextIndex < dataArtistasProvider.length) {
      flatListRef.current.scrollToIndex({ index: nextIndex, animated: true });
    } else {
      console.log('No hay más elementos');
    }
  }

  const panResponder = React.useRef(
    PanResponder.create({
      onPanResponderEnd: (e, gestureState) => {
        if (gestureState.dx < -50) {
          // Calcular el siguiente índice en la FlatList
          const nextIndex = currentIndex + 1;
  
          // Llamar a la función de manejo de eventos
          onButtonPressCancel(nextIndex);
        }
      },
    })
  ).current;

  return (
    <View style={styles.container}>
      
    <FlatList 
      ref={flatListRef}
      data={dataArtistasProvider}
      {...panResponder.panHandlers}
      pagingEnabled
      renderItem={({item, index}) => 
        <VideoItem 
          data={item} 
          isActive={activeVideoIndex === index} 
          onButtonPressCancel={onButtonPressCancel}
          currentIndex={index}
        />
        }
      onScroll={e => {
        const index = Math.round(e.nativeEvent.contentOffset.y / (WINDOW_HEIGHT - bottomTabHeight))
        setActiveVideoIndex(index);
      }}
      
    />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})
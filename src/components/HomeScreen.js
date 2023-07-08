import { FlatList, StyleSheet, View, PanResponder } from 'react-native'
import React, { useState, useRef } from 'react'
import VideoItem from './VideoItem'

import dataArtistasProvider from '../utils/dataArtistas'
import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs'

import {WINDOW_HEIGHT} from '../utils/utils';
import { VirtualizedList } from 'react-native'

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

  const renderItem = ({ item, index }) => (
    <VideoItem
      data={item}
      isActive={activeVideoIndex === index}
      onButtonPressCancel={onButtonPressCancel}
      currentIndex={index}
      isItemFavorite={false}
    />
  );

  const keyExtractor = (item, index) => String(index);

  const handleScrollEnd = (event) => {
    const { contentOffset, layoutMeasurement } = event.nativeEvent;
    const index = Math.round(contentOffset.y / (WINDOW_HEIGHT - bottomTabHeight));
    flatListRef.current.scrollToIndex({ animated: true, index });
  };

  return (
    <View style={styles.container}>
      
    <VirtualizedList 
      initialNumToRender={4}
      ref={flatListRef}
      data={dataArtistasProvider}
      renderItem={renderItem}
      keyExtractor={keyExtractor}
      getItem={(data, index) => data[index]}
      getItemCount={(data) => data.length}
      onScroll={e => {
        const index = Math.round(e.nativeEvent.contentOffset.y / (WINDOW_HEIGHT - bottomTabHeight))
        setActiveVideoIndex(index);
      }}
      onMomentumScrollEnd={handleScrollEnd}
      snapToInterval={WINDOW_HEIGHT - bottomTabHeight}
    />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})
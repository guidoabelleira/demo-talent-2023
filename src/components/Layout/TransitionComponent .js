import React, { useEffect, useRef } from 'react';
import { Animated, Dimensions, StyleSheet, View } from 'react-native';

const TransitionComponent = ({ onTransitionComplete }) => {
  const slideAnimation = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    const slideIn = Animated.timing(slideAnimation, {
      toValue: 1,
      duration: 300,
      useNativeDriver: true,
    });

    slideIn.start(() => {
      // La animación ha finalizado
    //   onTransitionComplete();
    });

    return () => {
      slideAnimation.setValue(0);
    };
  }, [slideAnimation]);

  const slideInterpolation = slideAnimation.interpolate({
    inputRange: [0, 1],
    outputRange: [Dimensions.get('window').width, 0],
  });

  const slideStyles = { transform: [{ translateX: slideInterpolation }] };

  return (
    <Animated.View style={[styles.container, slideStyles]}>
      {/* Contenido del componente de transición */}
      <View style={styles.contentContainer}>
        {/* Agrega aquí el contenido de tu componente de transición */}
      </View>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
    backgroundColor: 'white',
  },
  contentContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default TransitionComponent;
import { StyleSheet, Image } from 'react-native'
import React from 'react'
import { Swipeable, RectButton } from 'react-native-gesture-handler'
import { Asset } from 'expo-asset';
import VideoItem from './VideoItem'
const cardBackground = Asset.fromModule(require("../../utils/splash.png"))

function Swipes({users, currentIndex, handleLike, handlePass, swipesRef, isFocused}) {
    
    const renderLeftActions = () => {
        return (
            <RectButton >
                <VideoItem data={users[currentIndex + 1]} currentIndex={currentIndex} isFocused={isFocused}/>
            </RectButton>
        )
    }

    const renderRightActions = () => {
        return (
            <RectButton style={styles.container}>
                {/* <VideoItem data={users[currentIndex + 1]} /> */}
                {/* <Image source={cardBackground} style={styles.cardBackgroundImage} resizeMode='cover'/> */}
            </RectButton>
        )
    }

    return (
        <Swipeable
            ref={swipesRef}
            friction={2}
            leftThreshold={40}
            rightThreshold={40}
            renderLeftActions={renderRightActions}
            renderRightActions={renderLeftActions}
            onSwipeableLeftOpen={() => {
                handleLike()
                }
            }
            onSwipeableRightOpen={() => {
                    
                    handlePass()
                }
            }
        >
            <VideoItem data={users[currentIndex]} currentIndex={currentIndex} isFocused={isFocused}/>
        </Swipeable>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "black"
    },
    cardBackgroundImage: {
        width: "100%",
        height: "100%",
      },
})

export default React.forwardRef((props, ref) => <Swipes swipesRef={ref} {...props}></Swipes>)
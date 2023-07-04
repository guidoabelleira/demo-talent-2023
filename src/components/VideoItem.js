import { View, Text, StyleSheet, StatusBar } from 'react-native'
import React, { useRef, useEffect, useState } from 'react'
import { Video, ResizeMode } from 'expo-av';
import { Ionicons, Entypo, FontAwesome5, AntDesign } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native';
import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs';
import { useNavigation } from '@react-navigation/native';

import { PanGestureHandler } from 'react-native-gesture-handler';
import Animated, { useAnimatedGestureHandler } from 'react-native-reanimated';

import {WINDOW_HEIGHT, WINDOW_WIDTH} from '../utils/utils';
import IconButton from './IconButton';


export default function VideoItem({data, isActive, currentIndex, onButtonPressCancel}) {
    const videoRef = useRef(null);
    const navigation = useNavigation();
    const [status, setStatus] = useState({});
    const [isMuted, setIsMuted] = useState(false);
    const toggleMute = () => {
        setIsMuted((prevMuted) => !prevMuted);
    };

    const handlePressAcept = () => {
        console.log('Button pressed');
        navigation.navigate('Artista');
    };

    const handlePressCancel = () => {
        const nextIndex = currentIndex + 1;
        onButtonPressCancel(nextIndex);
    };

    useEffect(() => {
        const playVideo = async () => {
            if (videoRef.current && isActive) {
                await videoRef.current.playAsync();
            } else {
                await videoRef.current.pauseAsync();
            }
        };
    
        playVideo();
        console.log(isActive)
    }, [isActive]);

    const bottomTabHeight = useBottomTabBarHeight();

    return (
        <View style={[styles.container, {height: WINDOW_HEIGHT - bottomTabHeight }]}>
            <StatusBar barStyle={'light-content'} />
            <TouchableOpacity style={styles.videoContainer} onPress={toggleMute} activeOpacity={0.7}>
            <Video 
                ref={videoRef}
                source={{
                    uri: data.mediaLinks[1].link
                }} 
                style={styles.video} 
                resizeMode={ResizeMode.COVER} 
                isLooping
                onPlaybackStatusUpdate={status => setStatus(() => status)}
                isMuted={isMuted}
            />
            </TouchableOpacity>
            <View style={styles.bottomSection}>
                <View style={styles.bottomTopSection}>
                    <IconButton 
                        onPress={handlePressCancel}
                        icon={<AntDesign name="close" size={48} color="red" />}
                    />
                    <IconButton 
                        onPress={handlePressAcept}
                        icon={<AntDesign name="check" size={48} color="green" />}
                    />
                </View>
                <View style={styles.bottomBottomSection}>
                    <Text style={styles.name}>{data.name}</Text>
                    <Text style={styles.location}>{data.location}</Text>
                    <Text style={styles.age}>{data.age}</Text>
                </View>
                
            </View>
            <View style={styles.verticalBar}>
                <View style={styles.verticalBarItem}>
                    <Ionicons name="logo-instagram" size={32} color="white" />
                    <Text style={styles.verticalBarText}>{data.views.instagram}</Text>
                </View>
                <View style={styles.verticalBarItem}>
                    <FontAwesome5 name="tiktok" size={32} color="white" />
                    <Text style={styles.verticalBarText}>{data.views.tiktok}</Text>
                </View>
                <View style={styles.verticalBarItem}>
                    <Entypo name="spotify" size={32} color="white" />
                    <Text style={styles.verticalBarText}>{data.views.spotify}</Text>
                </View>
                <View style={styles.verticalBarItem}>
                    <Entypo name="youtube" size={32} color="white" />
                    <Text style={styles.verticalBarText}>{data.views.youtube}</Text>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: WINDOW_WIDTH
    },
    videoContainer: {
        flex: 1,
    },
    video: {
        position: 'absolute',
        width: "100%",
        height: "100%"
    },
    bottomSection: {
        position: "absolute",
        bottom: 0,
        flexDirection: "column",
        width: "100%",
        height: 110,
        paddingHorizontal: 12,
        paddingBottom: 16
    },
    bottomBottomSection: {
        flex: 2,
        flexDirection: "row",
        alignItems: "center"
    },
    bottomTopSection: {
        flex: 4,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "flex-start",
        paddingHorizontal: 48
    },
    name: {
        fontSize: 18,
        color: "white",
        fontWeight: "bold",
        marginRight: 10
    },
    location: {
        fontSize: 12,
        color: "white",
        fontWeight: "bold",
        marginRight: 10
    },
    age: {
        fontSize: 12,
        color: "white",
    },
    verticalBar: {
        position: "absolute",
        left: 12,
        top: 150
    },
    verticalBarItem: {
        marginBottom: 24,
        alignItems: "center"
    },
    verticalBarText: {
        color: "white",
        marginTop: 4
    }
})
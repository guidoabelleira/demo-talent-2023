import { View, Text, StyleSheet, StatusBar, Button, Pressable } from 'react-native'
import React, { useRef, useEffect, useState } from 'react'
import { Video, ResizeMode } from 'expo-av';
import { Ionicons, Entypo, FontAwesome5, MaterialIcons, EvilIcons, Octicons, MaterialCommunityIcons } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native';
import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs';
import { useNavigation } from '@react-navigation/native';

import { PanGestureHandler } from 'react-native-gesture-handler';
import Animated, { useAnimatedGestureHandler } from 'react-native-reanimated';

import {WINDOW_HEIGHT, WINDOW_WIDTH} from '../utils/utils';
import IconButton from './IconButton';
import { Image } from 'react-native';
import ModalShare from './ModalShare';

const VideoArtistList = ({data, isActive, currentIndex, onButtonPressCancel}) => {
    const videoRef = useRef(null);
    const navigation = useNavigation();
    const [isOpenShareModal, setIsOpenShareModal] = useState(false)
    const [status, setStatus] = useState({});
    const [isMuted, setIsMuted] = useState(false);
    const toggleMute = () => {
        setIsMuted((prevMuted) => !prevMuted);
    };

    const onPressContact = async () => {
        await videoRef.current.pauseAsync()
        navigation.replace('Profile', data);
    };

    const onPressMenu = async () => {
        await videoRef.current.pauseAsync()
        navigation.replace('Home');
    }

    useEffect(() => {
        const playVideo = async () => {
            if (videoRef.current && isActive) {
                await videoRef.current.playAsync();
            } else {
                await videoRef.current.pauseAsync();
            }
        };
    
        playVideo();
    }, [isActive]);

    const bottomTabHeight = useBottomTabBarHeight();
  return (
    <>
        <View style={[styles.container, {height: WINDOW_HEIGHT - bottomTabHeight }]}>
            <StatusBar barStyle={'light-content'} />
            <TouchableOpacity style={styles.videoContainer} onPress={toggleMute} activeOpacity={0.7}>
            <Video 
                ref={videoRef}
                source={{
                    uri: data.mediaLinks[0].link
                }} 
                style={styles.video} 
                resizeMode={ResizeMode.COVER} 
                isLooping
                onPlaybackStatusUpdate={status => setStatus(() => status)}
                isMuted={isMuted}
                shouldPlay={false}
            />
            </TouchableOpacity>
            <View style={styles.bottomSection}>
                <View style={styles.bottomBottomSection}>
                    <View style={styles.containerName}>
                        <Text style={styles.name}>{data.name}</Text>
                        <MaterialIcons name="favorite" size={28} color="red" />
                    </View>
                    <Text style={styles.location}>{data.location}</Text>
                    <Text style={styles.age}>{data.age}</Text>
                </View>
                <View style={styles.bottomTopSection}>
                    <TouchableOpacity style={styles.buttonContact} onPress={() => onPressContact()}>
                        <Text style={styles.buttonContactText}>Contactar</Text>
                    </TouchableOpacity >
                    <TouchableOpacity onPress={() => setIsOpenShareModal(true)}>
                        <MaterialCommunityIcons name="share" size={36} color="#FFFFFF" />
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.verticalBar}>
                <View style={styles.verticalBarItem}>
                    <Ionicons name="logo-instagram" size={28} color="white" />
                    <Text style={styles.verticalBarText}>{data.views.instagram}</Text>
                </View>
                <View style={styles.verticalBarItem}>
                    <FontAwesome5 name="tiktok" size={28} color="white" />
                    <Text style={styles.verticalBarText}>{data.views.tiktok}</Text>
                </View>
                <View style={styles.verticalBarItem}>
                    <Entypo name="spotify" size={28} color="white" />
                    <Text style={styles.verticalBarText}>{data.views.spotify}</Text>
                </View>
                <View style={styles.verticalBarItem}>
                    <Entypo name="youtube" size={28} color="white" />
                    <Text style={styles.verticalBarText}>{data.views.youtube}</Text>
                </View>
            </View>
            <View style={styles.topBar}>
                <View style={styles.containerTopBar}>
                    <View style={styles.topBarItem}> 
                        <TouchableOpacity>
                            <Image source={require('../utils/vector.png')} />
                        </TouchableOpacity>
                    </View>
                    <View style={styles.topBarItem}> 
                        <Octicons name="dot-fill" size={24} color="#F6F8B5" />
                        <Text style={styles.topBarItemText}>New artist</Text>
                        <Octicons name="dot-fill" size={24} color="#F6F8B5" />
                    </View>
                    <View style={styles.topBarItemRounded}> 
                        <TouchableOpacity onPress={() => onPressMenu()}>
                            <Ionicons name="ios-menu" size={28} color="#FFFFFF" />
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
           
        </View>
        <ModalShare isOpen={isOpenShareModal} onClose={() => setIsOpenShareModal(false)}/>
        </>

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
        height: "100%", 
        backgroundColor: "black"
    },
    bottomSection: {
        position: "absolute",
        bottom: 0,
        flexDirection: "row",
        width: "100%",
        height: 75,
        paddingHorizontal: 12,
        paddingTop: 4,
        paddingBottom: 12,
        backgroundColor: 'rgba(0, 0, 0, 0.1)',
        borderRadius: 8,
    },
    bottomBottomSection: {
        flex: 4,
        flexDirection: "column",
        alignItems: "baseline"
    },
    bottomTopSection: {
        flex: 4,
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center"
    },
    buttonContact: {
        borderRadius: 10,
        borderWidth: 2,
        padding: 8,
        borderColor: "#89B7FC",
        marginRight: 4
    },
    buttonContactText: {
        fontSize: 16,
        fontWeight: "bold",
        color: "#89B7FC"
    },
    containerName: {
        flexDirection: "row"
    },  
    name: {
        fontSize: 22,
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
    topBar: {
        position: "absolute",
        top: 15,
        width: "100%",
    },
    containerTopBar: {
        flexDirection: "row",
        justifyContent: "space-between",
        paddingHorizontal: 18
    },
    topBarItemRounded: {
        alignItems: "center",
        justifyContent: "center",
        borderWidth: 1,
        borderColor: "#FADE4F",
        borderRadius: 50,
        padding: 4
    },
    topBarItem: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
    },
    topBarItemText: {
        color: "#FFFFFF",
        paddingHorizontal: 12,
        fontSize: 20
    },
    verticalBar: {
        position: "absolute",
        left: 12,
        top: 150
    },
    verticalBarItem: {
        marginBottom: 24,
        alignItems: "center",
        borderRadius: 50,
        width: 59,
        height: 60,
        borderWidth: 1,
        borderColor: "#FADE4F",
        padding: 8
    },
    verticalBarText: {
        color: "white",
        marginTop: 1,
        fontSize: 10
    }
})

export default VideoArtistList
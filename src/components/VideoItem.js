import { View, Text, StyleSheet, StatusBar } from 'react-native'
import React, { useRef, useEffect, useState } from 'react'
import { Video, ResizeMode } from 'expo-av';
import { Ionicons, Entypo, FontAwesome5, Octicons } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native';
import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs';
import { useNavigation } from '@react-navigation/native';

import {WINDOW_HEIGHT, WINDOW_WIDTH} from '../utils/utils';
import IconButton from './IconButton';
import { Image } from 'react-native';


export default function VideoItem({data, isActive, currentIndex, onButtonPressCancel}) {
    const videoRef = useRef(null);
    const navigation = useNavigation();
    const [status, setStatus] = useState({});
    const [isMuted, setIsMuted] = useState(false);
    const toggleMute = () => {
        setIsMuted((prevMuted) => !prevMuted);
    };

    const handlePressAcept = async () => {
        let reformData = [
            {
                idArtista: data.idArtista,
                name: data.name,
                location: data.location,
                age: data.age,
                phone: data.phone,
                email: data.email,
                image: data.image,
                views: {
                    instagram: data.views.instagram,
                    tiktok: data.views.tiktok,
                    youtube: data.views.youtube,
                    spotify: data.views.spotify
                },
                mediaLinks: [
                    data.mediaLinks[1]
                ],
            },
            {
                idArtista: data.idArtista,
                name: data.name,
                location: data.location,
                age: data.age,
                phone: data.phone,
                email: data.email,
                image: data.image,
                views: {
                    instagram: data.instagram,
                    tiktok: data.tiktok,
                    youtube: data.youtube,
                    spotify: data.spotify
                },
                mediaLinks: [
                    data.mediaLinks[0]
                ],
            }
        ]
        await videoRef.current.pauseAsync()
        navigation.replace('Artista', reformData);
    };

    const handlePressCancel = () => {
        const nextIndex = currentIndex + 1;
        onButtonPressCancel(nextIndex);
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
        <View style={[styles.container, {height: WINDOW_HEIGHT - bottomTabHeight }]}>
            <StatusBar barStyle={'light-content'}/>
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
                shouldCorrectPitch={false}
            />
            </TouchableOpacity>
            <View style={styles.bottomSection}>
                <View style={styles.bottomTopSection}>
                    <IconButton 
                        onPress={handlePressCancel}
                        icon={<Image source={require('../utils/X.png')} />}
                    />
                    <IconButton 
                        onPress={handlePressAcept}
                        icon={<Image source={require('../utils/pngwing.png')} />}
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
                        <Text style={styles.topBarItemText}>Home</Text>
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
        flexDirection: "column",
        width: "100%",
        height: 110,
        paddingHorizontal: 12,
        paddingBottom: 16
    },
    bottomBottomSection: {
        flex: 2,
        flexDirection: "row",
        alignItems: "baseline",
    },
    bottomTopSection: {
        flex: 4,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "flex-start",
        paddingHorizontal: 48,
        marginBottom: 8
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
})
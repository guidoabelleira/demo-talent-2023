import { View, Text, StyleSheet, StatusBar } from 'react-native'
import React, { useRef, useEffect, useState } from 'react'
import { Video, ResizeMode } from 'expo-av';
import { Ionicons, Entypo, FontAwesome5 } from '@expo/vector-icons';
import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs';

import Flag from 'react-native-flags';

import {WINDOW_HEIGHT, WINDOW_WIDTH, convertirAK} from '../../utils/utils';
import { Image } from 'react-native';


export default function VideoItem({data, currentIndex}) {
    const videoRefInitial = useRef(null);
    const [status, setStatus] = useState({});
    const [isMuted, setIsMuted] = useState(false);
    
    // const toggleMute = () => {
    //     console.log("mute")
    //     setIsMuted(!isMuted);
    //     videoRef.current.setStatusAsync({ isMuted })
    // };

    const playVideo = async () => {
        // console.log(currentIndex)
        if(currentIndex == 0) {
            await videoRefInitial.current.playAsync();
        }
        if (videoRefInitial.current && (currentIndex + 1) === data.idArtista) {
            await videoRefInitial.current.playAsync();
        } else {
            await videoRefInitial.current.pauseAsync();
        }
    };

    useEffect(() => {
        playVideo();
    }, [currentIndex]);

    const bottomTabHeight = useBottomTabBarHeight();

    return data && (
        <View style={[styles.container, {height: WINDOW_HEIGHT - bottomTabHeight }]}>
            <StatusBar barStyle={'default'} />
            <View style={styles.videoContainer}>
            <Video 
                ref={videoRefInitial}
                source={{
                    uri: data.assetsLinks[0].link
                }} 
                rate={1.0}
                volume={1.0}
                style={styles.video} 
                resizeMode={ResizeMode.COVER} 
                isLooping
                onPlaybackStatusUpdate={status => setStatus(() => status)}
                isMuted={isMuted}
                shouldPlay={false}
                shouldCorrectPitch={false}
            />
            </View>
            <View style={styles.bottomSection}>
                <View style={styles.bottomBottomSection}>
                    <Image source={{uri: data.image}} style={styles.profileImage} />
                    <View style={styles.containerInfo}>
                        <Text style={styles.name}>{data.name}</Text>
                        <Text style={styles.age}>{data.age}</Text>
                    </View>
                    <View style={styles.containerFlag}>
                        <Flag
                            code={data.isoFlag}
                            size={24}
                        />
                    </View>
                </View>
            </View>
            <View style={styles.verticalBar}>
                <View style={styles.verticalBarItem}>
                    <Ionicons name="logo-instagram" size={14} color="white" />
                    <Text style={styles.verticalBarText}>{convertirAK(data.views.instagram)}</Text>
                </View>
                <View style={styles.verticalBarItem}>
                    <FontAwesome5 name="tiktok" size={14} color="white" />
                    <Text style={styles.verticalBarText}>{convertirAK(data.views.tiktok)}</Text>
                </View>
                <View style={styles.verticalBarItem}>
                    <Entypo name="spotify" size={14} color="white" />
                    <Text style={styles.verticalBarText}>{convertirAK(data.views.spotify)}</Text>
                </View>
                <View style={styles.verticalBarItem}>
                    <Entypo name="youtube" size={14} color="white" />
                    <Text style={styles.verticalBarText}>{convertirAK(data.views.youtube)}</Text>
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
        flexDirection: "row",
        width: "100%",
        height: 65,
        paddingHorizontal: 12,
        paddingBottom: 16,
        backgroundColor: 'rgba(0, 0, 0, 0.05)',
        borderRadius: 8,
        paddingVertical: 8
    },
    bottomBottomSection: {
        flex: 4,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "flex-start"
    },
    bottomTopSection: {
        flex: 2,
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "center",
        marginBottom: 4
    },
    profileImage: {
        width: 40,
        height: 40,
        borderRadius: 100,
        borderWidth: 1,
        borderColor: "#FADE4F"
    },
    containerFlag: {
        alignSelf: "stretch",
        padding: 2,
        marginHorizontal: 4
    },
    containerInfo: {
        marginHorizontal: 6
    },
    name: {
        fontSize: 16,
        color: "white",
        fontWeight: "bold"
    },
    age: {
        fontSize: 12,
        color: "white"
    },
    buttonContact: {
        borderBottomEndRadius: 10,
        borderTopEndRadius: 10,
        borderBottomStartRadius: 10,
        borderTopStartRadius: 10,
        borderWidth: 1,
        paddingHorizontal: 6,
        paddingVertical: 2,
        borderColor: "white",
        marginLeft: 14
    },
    buttonContactText: {
        fontSize: 16,
        fontWeight: 600,
        color: "white"
    },
    verticalBar: {
        position: "absolute",
        left: 12,
        top: 280
    },
    verticalBarItem: {
        marginBottom: 24,
        alignItems: "center",
        borderRadius: 50,
        width: 40,
        height: 40,
        borderWidth: 1,
        borderColor: "#FADE4F",
        padding: 8
    },
    verticalBarText: {
        color: "white",
        marginTop: 1,
        fontSize: 8
    },
})
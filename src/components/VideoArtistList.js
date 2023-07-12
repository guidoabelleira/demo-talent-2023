import { View, Text, StyleSheet, StatusBar, TouchableHighlight, Alert, ToastAndroid, Platform } from 'react-native'
import React, { useRef, useEffect, useState } from 'react'
import { Video, ResizeMode } from 'expo-av';
import { Ionicons, Entypo, FontAwesome5, MaterialIcons } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native';
import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs';
import { useNavigation } from '@react-navigation/native';
import Flag from 'react-native-flags';
import {WINDOW_HEIGHT, WINDOW_WIDTH, convertirAK} from '../utils/utils';
import { Image } from 'react-native';

const VideoArtistList = ({data, isActive, currentIndex}) => {
    const videoRef = useRef(null);
    const navigation = useNavigation();
    
    const [status, setStatus] = useState({});
    const [isMuted, setIsMuted] = useState(false);
    
    const [favoriteStatus, setFavoriteStatus] = useState(false)
    // const toggleMute = () => {
    //     setIsMuted((prevMuted) => !prevMuted);
    // };

    const onPressContact = async () => {
        await videoRef.current.pauseAsync()
        navigation.replace('Profile', data);
    };

    const onPressFavorite = () => {
        setFavoriteStatus(!favoriteStatus)
        // if(favoriteStatus) {
        //     alert(`${data.name} se agrego a favoritos`)
        // }
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
            <StatusBar barStyle={'default'} />
            <View style={styles.videoContainer} >
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
            </View>
            <TouchableOpacity style={styles.bottomSection} onPress={onPressContact}>
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
                    <View style={styles.containerFav}>
                        <TouchableOpacity  onPress={() => onPressFavorite()}>
                            {
                                favoriteStatus ? (
                                    <MaterialIcons name="favorite" size={32} color="red" />
                                ) : (
                                    <MaterialIcons name="favorite-border" size={32} color="white" />
                                )
                            }
                        </TouchableOpacity>
                    </View>
                    
                </View>
            </TouchableOpacity>
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
        backgroundColor: 'rgba(0, 0, 0, 0.05)',
        borderRadius: 8,
    },
    bottomBottomSection: {
        flex: 4,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "flex-start"
    },
    bottomTopSection: {
        flex: 4,
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center"
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
        paddingTop: 8,
        marginHorizontal: 4
    },
    containerInfo: {
        marginHorizontal: 6
    },
    containerFav: {
        flex: 1,
        justifyContent: "center",
        alignItems: "flex-end",
        paddingRight: 10
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
    buttonContact: {
        borderBottomEndRadius: 10,
        borderTopEndRadius: 10,
        borderBottomStartRadius: 10,
        borderTopStartRadius: 10,
        borderWidth: 1,
        paddingHorizontal: 6,
        paddingVertical: 2,
        borderColor: "white",
        marginLeft: 12
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

export default VideoArtistList
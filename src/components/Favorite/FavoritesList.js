import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  Image,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { extractRandomArtists } from "../../utils/hooks";
import dataArtistas from "../../utils/dataArtistas";
import { LinearGradient } from "expo-linear-gradient";
import { CommonActions, useNavigation } from '@react-navigation/native';

const FavoritesList = () => {
  const [favorites, setFavorites] = useState([]);
  const navigation = useNavigation();

  const onPressChat = (artist) => {
    console.log(artist)
    navigation.dispatch(
      CommonActions.reset({
        index: 0,
        routes: [
          {
            name: "Contact",
            params: {
              userId: artist.idArtista,
              username: artist.name,
              image: artist.image,
            },
          },
        ],
      })
    );
  };

  const handlePressAcept = (item) => {
    let reformData = [
        {
            idArtista: item.idArtista,
            name: item.name,
            location: item.location,
            age: item.age,
            phone: item.phone,
            email: item.email,
            image: item.image,
            isoFlag: item.isoFlag,
            views: {
                instagram: item.views.instagram,
                tiktok: item.views.tiktok,
                youtube: item.views.youtube,
                spotify: item.views.spotify
            },
            mediaLinks: [
                item.mediaLinks[1]
            ],
            assetsLinks: [
              item.assetsLinks[1]
          ],
        },
        {
            idArtista: item.idArtista,
            name: item.name,
            location: item.location,
            age: item.age,
            phone: item.phone,
            email: item.email,
            image: item.image,
            isoFlag: item.isoFlag,
            views: {
                instagram: item.instagram,
                tiktok: item.tiktok,
                youtube: item.youtube,
                spotify: item.spotify
            },
            mediaLinks: [
              item.mediaLinks[0]
            ],
            assetsLinks: [
              item.assetsLinks[0]
            ],
        }
    ]
    navigation.navigate('Home', { screen: 'Artista',  params: reformData})
};

  const renderFavoriteItem = ({ item }) => (
    <TouchableOpacity
      style={styles.favoriteItem}
      
    >
      <View style={styles.itemContainer}>
        <TouchableOpacity
        onPress={() => handlePressAcept(item)}
        >
          <Image source={{ uri: item.image }} style={styles.profileImage} />
        </TouchableOpacity>
        
        <View style={styles.textContainer}>
          <Text style={styles.favoriteItemText}>{item.name}a</Text>
          <Text style={styles.favoriteItemText}>{item.location}</Text>
        </View>
        <TouchableOpacity style={styles.messageIconContainer} onPress={() => onPressChat(item)}>
          <Ionicons
            name="chatbubble-ellipses-outline"
            size={24}
            color="black"
          />
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );

  useEffect(() => {
    const randomArtists = extractRandomArtists(dataArtistas);
    setFavorites(randomArtists);
  }, []);

  return (
    <LinearGradient
      style={{ flex: 1 }}
      colors={["rgba(166, 166, 166, 1)", "rgba(166, 166, 166, 0)"]}
      start={[0.5, 0]}
      end={[1, 1]}
    >
      <View style={styles.container}>
        <Text style={styles.title}>Favorites</Text>
        {favorites.length > 0 ? (
          <FlatList
            data={favorites}
            renderItem={renderFavoriteItem}
            keyExtractor={(item) => item.idArtista.toString()}
          />
        ) : (
          <Text style={styles.emptyText}>No tienes artistas favoritos</Text>
        )}
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 26,
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 24,
  },
  favoriteItem: {
    marginBottom: 8,
    flexDirection: "row",
  },
  itemContainer: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#e5e5e5",
    borderRadius: 8,
    padding: 12,
  },
  profileImage: {
    width: 64,
    height: 64,
    borderRadius: 32,
  },
  textContainer: {
    flex: 1,
    marginLeft: 12,
    justifyContent: "center",
  },
  favoriteItemText: {
    fontSize: 16,
  },
  messageIconContainer: {
    marginLeft: 12,
  },
  emptyText: {
    fontSize: 16,
    fontStyle: "italic",
  },
});

export default FavoritesList;

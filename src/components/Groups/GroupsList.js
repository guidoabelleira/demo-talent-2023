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
import { CommonActions, useNavigation } from "@react-navigation/native";

const GroupsList = () => {
  const [favorites, setFavorites] = useState([]);
  const navigation = useNavigation();

  const onPressChat = (artist) => {
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
          spotify: item.views.spotify,
        },
        mediaLinks: [item.mediaLinks[1]],
        assetsLinks: [item.assetsLinks[1]],
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
          spotify: item.spotify,
        },
        mediaLinks: [item.mediaLinks[0]],
        assetsLinks: [item.assetsLinks[0]],
      },
    ];
    navigation.navigate("Home", { screen: "Artista", params: reformData });
  };

  const reformDataArtistFromGroups = [
    {
      id: 1,
      images: [
        require("../../utils/Fotos/Foto13.jpg"),
        require("../../utils/Fotos/Foto6.jpg"),
      ],
    },
    {
      id: 2,
      images: [
        require("../../utils/Fotos/Foto1.jpg"),
        require("../../utils/Fotos/Foto3.jpg"),
        require("../../utils/Fotos/Foto11.jpg"),
      ],
    },
    {
      id: 3,
      images: [
        require("../../utils/Fotos/Foto4.jpg"),
        require("../../utils/Fotos/Foto7.jpg"),
      ],
    },
  ];
  const renderFavoriteItem = ({ item }) => (
    <TouchableOpacity style={styles.favoriteItem}>
      <View style={styles.itemContainer}>
        <TouchableOpacity
          onPress={() => console.log("Press")}
          style={{ display: "flex", flexDirection: "row" }}
        >
          {item.images.map((e, i) => (
            <Image source={e} style={styles.profileImage} key={i} />
          ))}
          {/* <Image source={{ uri: item.image }} style={styles.profileImage} />
          <Image source={{ uri: item.image }} style={styles.profileImage} /> */}
        </TouchableOpacity>

        <View style={styles.textContainer}>
          <Text style={styles.favoriteItemText}>Group {item.id}</Text>
          {/* <Text style={styles.favoriteItemText}>{item.location}</Text> */}
        </View>
        {/* <TouchableOpacity style={styles.messageIconContainer} onPress={() => console.log("Press")}>
          <Ionicons
            name="chatbubble-ellipses-outline"
            size={24}
            color="black"
          />
        </TouchableOpacity> */}
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
        <Text style={styles.title}>Groups</Text>
        {reformDataArtistFromGroups.length > 0 ? (
          <FlatList
            data={reformDataArtistFromGroups}
            renderItem={renderFavoriteItem}
            keyExtractor={(item) => item.id.toString()}
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
    marginRight: 4,
  },
  textContainer: {
    flex: 1,
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-end",
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

export default GroupsList;

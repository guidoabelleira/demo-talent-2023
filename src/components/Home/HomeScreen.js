import { StyleSheet, View, Alert } from 'react-native';
import { useEffect, useRef, useState } from 'react';
import Header from '../Layout/Header'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import { useNavigation } from '@react-navigation/native';
import dataArtistasProvider from '../../utils/dataArtistas'
import Swipe from './Swipe';

export default function HomeScreen() {
  const navigation = useNavigation();
  const [users, setUsers] = useState([])
  const [currentIndex, setCurrentIndex] = useState(0)

  const swipeRef = useRef(null)

  async function fetchUsers () {
    try {
      setUsers(dataArtistasProvider)
    } catch (err) {
      Alert.alert("Error getUsers", "", [{text: "Retry", onPress: () => fetchUsers()}])
    }
  }

  useEffect(() => {
    fetchUsers()
  }, [])

  const handlePressAcept = async () => {
    let reformData = [
        {
            idArtista: users[currentIndex].idArtista,
            name: users[currentIndex].name,
            location: users[currentIndex].location,
            age: users[currentIndex].age,
            phone: users[currentIndex].phone,
            email: users[currentIndex].email,
            image: users[currentIndex].image,
            isoFlag: users[currentIndex].isoFlag,
            views: {
                instagram: users[currentIndex].views.instagram,
                tiktok: users[currentIndex].views.tiktok,
                youtube: users[currentIndex].views.youtube,
                spotify: users[currentIndex].views.spotify
            },
            mediaLinks: [
                users[currentIndex].mediaLinks[1]
            ],
            assetsLinks: [
              users[currentIndex].assetsLinks[1]
          ],
        },
        {
            idArtista: users[currentIndex].idArtista,
            name: users[currentIndex].name,
            location: users[currentIndex].location,
            age: users[currentIndex].age,
            phone: users[currentIndex].phone,
            email: users[currentIndex].email,
            image: users[currentIndex].image,
            isoFlag: users[currentIndex].isoFlag,
            views: {
                instagram: users[currentIndex].instagram,
                tiktok: users[currentIndex].tiktok,
                youtube: users[currentIndex].youtube,
                spotify: users[currentIndex].spotify
            },
            mediaLinks: [
              users[currentIndex].mediaLinks[0]
            ],
            assetsLinks: [
              users[currentIndex].assetsLinks[0]
            ],
        }
    ]
    navigation.replace('Artista', reformData);
};

  function nextUser() {
    const nextIndex = users.length - 2 === currentIndex ? 0 : currentIndex + 1
    setCurrentIndex(nextIndex)
  }

  function handleLike() {
    handlePressAcept()
  }

  function handlePass() {
    nextUser()
  }
 
  return (
    <GestureHandlerRootView style={styles.container}>
    <Header />
    {
      users && (
      <View style={styles.swipes}>
        {
          users?.length > 1 && users?.map((u, i) => (
            currentIndex === i && 
              <Swipe 
                key={i} 
                ref={swipeRef}
                users={users} 
                currentIndex={currentIndex} 
                handleLike={handleLike} 
                handlePass={handlePass} 
              />
            ))
        }
      </View>
      )
    }
    
  </GestureHandlerRootView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative',
  },
})
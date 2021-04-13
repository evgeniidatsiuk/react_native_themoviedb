import React, {useState} from 'react';
import {Image, SafeAreaView, ScrollView, Text, TouchableOpacity, View,} from 'react-native';
import {AntDesign, MaterialCommunityIcons} from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import useGetFilmDetails from '../../hooks/useGetFilmDetails';
import useFonts from '../../hooks/useFonts';
import useGenres from '../../hooks/useGenres';
import Actor from '../../components/actor';
import Trailer from '../../components/trailer';
import {styles} from './style'
import {DB_NAME} from "../../constants/env";

const {container, wrapper, title, text, desc, item, image} = styles;

export default function FilmDetails({ route }) {
  const { id } = route.params;
  const { loaded } = useFonts();
  const [details, credits, videos] = useGetFilmDetails(id);
  const [favorite, setFavorite] = useState(false);

  if (!loaded) {
    return null;
  }

  const getFavorites = async () => {
    let favorites = JSON.parse(await AsyncStorage.getItem(DB_NAME));
    const sourse = favorites.find((e) => e.id === id);
    if (sourse) {
      setFavorite(true);
    } else {
      setFavorite(false);
    }
  };

  getFavorites();

  const storeData = async (film) => {
    try {
      let favorites = JSON.parse(await AsyncStorage.getItem(DB_NAME));

      if (favorites) {
        const sourse = favorites.find((e) => e.id === film.id);
        if (sourse) {
          favorites = favorites.filter((e) => e.id !== film.id);
        } else {
          favorites.push(film);
        }
      } else {
        favorites = [film];
      }

      await AsyncStorage.setItem(DB_NAME, JSON.stringify(favorites));
      getFavorites();
    } catch (e) {
      console.log(e);
    }
  };

  const ids = [];
  details.genres ? details.genres.map((genre) => ids.push(genre.id)) : null;
  const genres = useGenres(ids);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <View style={container}>
          <Image
            source={{
              uri: `https://image.tmdb.org/t/p/original${details.backdrop_path}`,
              method: 'POST',
              cache: 'only-if-cached'
            }}
            style={image}
          />
          <View style={wrapper}>
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
              }}
            >
              <Text style={title}>{details.title}</Text>
              <TouchableOpacity onPress={() => storeData(details)}>
                <AntDesign
                  name={favorite ? 'star' : 'staro'}
                  size={24}
                  color={'#4150bd'}
                />
              </TouchableOpacity>
            </View>
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
              }}
            >
              <Text style={desc}>Overview</Text>
              <Text
                style={{
                  color: '#181a20',
                  fontSize: 20,
                  textAlign: 'right',
                  fontFamily: 'Poppins-Regular',
                }}
              >
                <MaterialCommunityIcons
                  name="star"
                  color={'yellow'}
                  size={20}
                />
                {details.vote_average}
              </Text>
            </View>
            <Text style={text}>{details.overview}</Text>
            <View
              style={{
                borderWidth: 1,
                color: '#181a20',
                marginVertical: 10,
              }}
            />
            <View style={item}>
              <Text style={desc}>Released:</Text>
              <Text style={text}>{details.release_date}</Text>
            </View>
            <View style={item}>
              <Text style={desc}>Genre:</Text>
              <Text style={{ ...text, maxWidth: '70%' }}>{genres}</Text>
            </View>
            <Text style={desc}>Actors</Text>
            <ScrollView directionalLockEnabled={false} horizontal={true}>
              <View style={{ display: 'flex', flexDirection: 'row' }}>
                {credits.cast
                  ? credits.cast.map((actor) => (
                      <Actor actor={actor} key={actor.id} />
                    ))
                  : null}
              </View>
            </ScrollView>
            <Text style={desc}>Trailers</Text>
            {videos
              ? videos.map((video) => (
                  <Trailer video={video} key={video.id} />
                ))
              : null}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

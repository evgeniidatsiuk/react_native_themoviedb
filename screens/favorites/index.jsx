import React, {useEffect, useRef, useState} from 'react';
import {FlatList, Pressable, Text, View} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Film from '../../components/film'
import {AntDesign} from '@expo/vector-icons';
import {styles} from './style'

const {container, text, trending, button} = styles;

export default function Favorites({navigation}) {
  const {navigate} = navigation
  const [films, setFilms] = useState([]);
  const flatListRef = useRef();

  const getData = async () => {
    try {
      const value = await AsyncStorage.getItem('@Favorites');
      if (value !== null) {
        setFilms(JSON.parse(value));
      }
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(
    () =>
      navigation.addListener('focus', () => {
        getData();
      }),
    [navigation]
  );

  return (
    <>
    <View style={container}>
      <Text style={text}>TheMovieDB</Text>
      <FlatList
          ref={flatListRef}
          data={films}
          ListHeaderComponent={() => <Text style={trending}>Favorites List</Text>}
          renderItem={({item}) => (
              <Film film={item} navigate={navigate} component='FavoriteDetails'/>
          )}
          keyExtractor={(item) => item.id.toString()}
      />
      <Pressable
          style={button}
          onPress={() => flatListRef.current.scrollToOffset({offset: 0})}
      >
        <AntDesign name="up" size={20} color="white"/>
      </Pressable>
    </View>
  </>
  );
}

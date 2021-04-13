import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import {MaterialCommunityIcons} from '@expo/vector-icons';
import useGenres from '../../hooks/useGenres';
import useFonts from '../../hooks/useFonts';
import {styles} from './style'

const {container, rating, textContainer, genresStyle, image, text} = styles;

export default function Index({film, navigate, component}) {
  useFonts();

  let genres

  if (film.genres) {
    const ids = [];
    film.genres ? film.genres.map((genre) => ids.push(genre.id)) : null;
    genres = useGenres(ids);
  } else {
    genres = useGenres(film.genre_ids)
  }

  return (
    <TouchableOpacity
      onPress={() => navigate(component, { id: film.id, name: film.title })}
      style={container}
    >
      <Image
        source={{
          uri: `https://image.tmdb.org/t/p/w500${film.poster_path}`,
          method: 'POST',
          cache: 'only-if-cached',
        }}
        style={image}
      />
      <View style={textContainer}>
        <Text style={text}>{film.title}</Text>
        <Text style={genresStyle}>{genres}</Text>
        <Text style={rating}>
          <MaterialCommunityIcons name="star" color={'yellow'} size={20} />
          {film.vote_average}
        </Text>
      </View>
    </TouchableOpacity>
  );
}

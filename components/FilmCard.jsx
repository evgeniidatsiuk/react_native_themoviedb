import React from 'react';
import { View, Image, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import useGenres from '../hooks/useGenres';
import useFonts from '../hooks/useFonts';

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    height: 200,
    width: '100%',
    paddingTop: 12,
    paddingBottom: 12,
  },
  text: {
    fontSize: 20,
    color: '#181a20',
    fontFamily: 'Poppins-Bold',
  },
  background: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    height: 200,
    borderRadius: 36,
  },
  rating: {
    color: '#181a20',
    fontSize: 20,
    textAlign: 'right',
    fontFamily: 'Poppins-Regular',
  },
  textContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    paddingHorizontal: 12,
    width: '70%',
  },
  genresStyle: {
    fontSize: 14,
    color: '#181a20',
    fontFamily: 'Poppins-Regular',
  },
  image: {
    width: '30%',
    height: '100%',
    borderRadius: 16,
  },
});

const { container, rating, textContainer, genresStyle, image, text } = styles;

export default function FilmCard({ film, navigate, component }) {
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

import React, {useRef, useState} from 'react';
import useSearchFilms from '../../hooks/useSearchFilms';
import Film from '../../components/film';
import {FlatList, Pressable, Text, TextInput, View,} from 'react-native';
import useFonts from '../../hooks/useFonts';
import {AntDesign} from '@expo/vector-icons';
import {styles} from './style'


const {container, text, trending, button, foundContainer, foundText} = styles;

export default function Search({navigation}) {
    const {loaded} = useFonts();
    const [search, setSearch] = useState('');
    const [films, fetchMore] = useSearchFilms(search);
    const flatListRef = useRef();
    const {navigate} = navigation

    if (!loaded) {
        return null;
    }

  return (
    <View style={container}>
      <Text style={text}>Baskino</Text>
      <TextInput
        style={trending}
        placeholder="Search..."
        placeholderTextColor="black"
        value={search}
        onChangeText={(text) => setSearch(text)}
      />
      {films.length !== 0 ? (
        <FlatList
            ref={flatListRef}
            data={films}
            renderItem={({item}) => <Film film={item} navigate={navigate} component='SearchDetail'/>}
            keyExtractor={(item) => item.id.toString()}
            onEndReachedThreshold={0.9}
            onEndReached={fetchMore}
        />
      ) : (
        <View style={foundContainer}>
          <AntDesign name="search1" size={120} color={'#5d5f64'} />
          <Text style={foundText}>Nothing Found...</Text>
        </View>
      )}
        <Pressable style={button} onPress={() => flatListRef.current.scrollToOffset({offset: 0})}>
            <AntDesign name="up" size={20} color="white"/>
        </Pressable>
    </View>
  );
}

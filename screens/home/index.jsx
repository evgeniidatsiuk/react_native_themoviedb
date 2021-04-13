import React, {useRef} from 'react';
import {AntDesign} from '@expo/vector-icons';
import useGetFilmList from '../../hooks/useGetFilmList';
import Film from '../../components/film';
import useFonts from '../../hooks/useFonts';
import {FlatList, Pressable, Text, View,} from 'react-native';
import {styles} from './style'

const {container, text, trending, button} = styles;

export default function Home({navigation}) {
  const {loaded} = useFonts();
  const [films, fetchMore] = useGetFilmList();
  const flatListRef = useRef();
  const {navigate} = navigation;

  if (!loaded) {
    return null;
  }

  return (
      <>
        <View style={container}>
          <Text style={text}>Baskino</Text>
          <FlatList
              ref={flatListRef}
              data={films}
              ListHeaderComponent={() => <Text style={trending}>Trending now</Text>}
              renderItem={({item}) => (
                  <Film film={item} navigate={navigate} component='FilmDetail'/>
              )}
              keyExtractor={(item) => item.id.toString()}
              onEndReachedThreshold={0.9}
              onEndReached={fetchMore}
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

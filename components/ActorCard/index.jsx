import React from 'react';
import {Image, Linking, Text, TouchableOpacity, View} from 'react-native';
import noActor from '../../assets/no-actor-photo.jpeg';

export default function ActorCard({ actor }) {
  const source =
    actor.profile_path === null
      ? noActor
      : {
            uri: `https://image.tmdb.org/t/p/original${actor.profile_path}`,
            method: 'POST',
            cache: 'only-if-cached',
        };

  return (
      <View
          style={{
              display: 'flex',
              flexDirection: 'column',
              margin: 10,
          }}
      >
          <TouchableOpacity
              onPress={() => {
                  Linking.openURL(`https://google.com/search?q=${actor.name}`);
              }}
          >
              <Image
                  source={source}
                  style={{width: 100, height: 100, borderRadius: 50}}
              />

              <Text
                  style={{
                      display: 'flex',
                      color: '#181a20',
                      fontSize: 18,
                      maxWidth: 100,
                      textAlign: 'center',
                  }}
              >
                  {actor.name}
              </Text>
          </TouchableOpacity>
    </View>
  );
}

import React from 'react';
import {Linking, Text, TouchableOpacity} from 'react-native';
import {AntDesign} from '@expo/vector-icons';
import {styles} from './style'

const { button, text } = styles;

export default function Trailer({video}) {
  return (
    <TouchableOpacity
      style={button}
      onPress={() => {
        Linking.openURL(`https://youtu.be/${video.key}`);
      }}
    >
      <AntDesign name="youtube" size={24} color="white" />
      <Text
        style={text}
      >
        {video.name}
      </Text>
    </TouchableOpacity>
  );
}

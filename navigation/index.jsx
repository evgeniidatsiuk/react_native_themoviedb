import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import FilmDetails from '../screens/filmDetails';
import Search from '../screens/search';
import Home from '../screens/home';
import Favorites from '../screens/favorites';
import useFonts from '../hooks/useFonts';

const Stack = createStackNavigator();

function HomeScreenNav() {
  const { loaded } = useFonts();

  if (!loaded) {
    return null;
  }

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="FilmDetail"
        component={FilmDetails}
        options={({ route }) => ({
            headerStyle: {backgroundColor: '#fff'},
            headerTintColor: '#181a20',
            title: route.params.name,
            headerTitleStyle: {
                fontFamily: 'Poppins-Bold',
            },
            headerBackTitleVisible: false,
        })}
      />
    </Stack.Navigator>
  );
}

export { HomeScreenNav };

function SearchScreenNav() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Search"
        component={Search}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="SearchDetail"
        component={FilmDetails}
        options={({ route }) => ({
            headerStyle: {backgroundColor: '#fff'},
            headerTintColor: '#181a20',
            title: route.params.name,
            headerTitleStyle: {
                fontFamily: 'Poppins-Bold',
            },
            headerBackTitleVisible: false,
        })}
      />
    </Stack.Navigator>
  );
}

export { SearchScreenNav };

function FavoritesScreenNav() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Favorites"
        component={Favorites}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="FavoriteDetails"
        component={FilmDetails}
        options={({ route }) => ({
          headerStyle: { backgroundColor: '#181a20' },
          headerTintColor: '#fff',
          title: route.params.name,
          headerTitleStyle: {
            fontFamily: 'Poppins-Bold',
          },
          headerBackTitleVisible: false,
        })}
      />
    </Stack.Navigator>
  );
}

export { FavoritesScreenNav };

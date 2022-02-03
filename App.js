/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { AuthProvider } from './src/hooks/AuthContext';
import { SearchProvider } from './src/hooks/SearchContext';
import SearchScreen from './src/screens/Search';
import Swiper from 'react-native-swiper';
import FavoritesScreen from './src/screens/Favorites';
import FriendsScreen from './src/screens/Friends';

const App = () => {

  return (
    <AuthProvider>
      <SearchProvider>
        <Swiper loop={ false }>
          <FavoritesScreen />
          <SearchScreen />
          <FriendsScreen />
        </Swiper>
      </SearchProvider>
    </AuthProvider>
  );
};

export default App;

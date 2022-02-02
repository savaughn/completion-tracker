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

const App = () => {

  return (
    <AuthProvider>
      <SearchProvider>
        <SearchScreen />
      </SearchProvider>
    </AuthProvider>
  );
};

export default App;

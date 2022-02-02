/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import Home from './src/Home';
import { AuthProvider } from './src/hooks/AuthContext';
import { SearchProvider } from './src/hooks/SearchContext';

const App = () => {

  return (
    <AuthProvider>
      <SearchProvider>
        <Home />
      </SearchProvider>
    </AuthProvider>
  );
};

export default App;

import React, { useContext } from 'react';
import { Searchbar } from 'react-native-paper';
import { SearchContext } from '../hooks/SearchContext';

const Search = () => {
    const { clearResults, searchGames } = useContext(SearchContext);

    return (
        <Searchbar 
            placeholder='Search'
            onSubmitEditing={({nativeEvent: { text }}) => {
                clearResults();
                searchGames(text);
            }}
            style={{
                height: 44,
                width: '95%',
                backgroundColor: 'lightgray',
                marginVertical: 10,
                borderRadius: 5,
                borderWidth: 1,
                borderColor: 'black',
                elevation: 5,
                position: 'absolute'
            }}
        />
    )
};

export default Search;
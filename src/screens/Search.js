import React, { useContext } from 'react';
import {FlatList, Text, View } from 'react-native';
import Card from '../components/Card';
import { SearchContext } from '../hooks/SearchContext';
import Search from '../components/Search';

const renderCard = ({item}, index) => {
    return (
        <Card item={ item } keyValue={ `${ item.id }_${ index }`} />
    );
};

const EmptyList = () => {
    return (
        <View style={{ 
            flex: 1, 
            justifyContent: 'center', 
            alignItems: 'center', 
            width: '90%', 
            paddingVertical: 20,
            marginTop: '50%'
        }}>
            <Text style={{ fontSize: 22, fontWeight: '700', textAlign:'center', color: 'darkgray' }}>
                Search for a game or series with the above search bar!
            </Text>
        </View>
    );
};

const SearchScreen = () => {
    const { searchResult, isSearching } = useContext(SearchContext);

    return (
        <View style={{ flex: 1, alignItems: 'center', backgroundColor: 'gray' }}>
            { !isSearching && 
                <View style={{ flex: 1, width: '90%'}}>
                    <FlatList 
                        data={ searchResult }
                        renderItem={ renderCard }
                        keyExtractor={(item) => item.id}
                        style={{ flex: 10, width: '100%'}}
                        numColumns={ 2 }
                        contentContainerStyle={{ paddingVertical: '20%' }}
                        ListEmptyComponent={ <EmptyList /> }
                        showsVerticalScrollIndicator={ false }
                    />
                </View>
            }
            <Search />
        </View>
    );
};

export default SearchScreen;
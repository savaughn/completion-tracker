import React from 'react';
import { FlatList, Text, View } from 'react-native';
import Card from './Card';

const CardRow = ({ 
    title = 'CardRowTitle',
    items = [],
}) => {
    return (
        <>
            <Text>{ title }</Text>
            <FlatList 
                data={ items }
                renderItem={ ({ item }) => <Card item={ item } /> }
                horizontal
            />
        </>
    );
};

export default CardRow;
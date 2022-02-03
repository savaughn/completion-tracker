import React from 'react';
import { Image, StyleSheet, TouchableOpacity, View } from 'react-native';

const Card = ({ item, keyValue }) => {
    const { coverUrl } = item;
    return (
        <View 
            key={ keyValue }
            style={ styles.cardContainer }
        >
            <TouchableOpacity onPress={() => { console.log(item)}}>
            { coverUrl && <Image source={{ uri: coverUrl }} 
            style={{ height: '100%' }} resizeMode='stretch'/> }
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    cardContainer: {
        borderWidth: 2,
        borderColor: 'black',
        borderRadius: 7,
        elevation: 3,
        height: 200,
        marginVertical: 5,
        marginHorizontal: 5,
        width: 175,
        backgroundColor: 'dimgray',
        overflow: 'hidden'
    }
})

export default Card;
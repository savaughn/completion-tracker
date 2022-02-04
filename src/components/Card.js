import React from 'react';
import { Image, StyleSheet, TouchableOpacity, View, useWindowDimensions } from 'react-native';

const Card = ({ item, keyValue }) => {
    const { coverUrl } = item;
    const { width } = useWindowDimensions();
    const cardImageAspectRatio = 200 / 150;
    const screenToCardWidthRatio = 0.417;
    const imageWidth = screenToCardWidthRatio * width;
    return (
        <View 
            key={ keyValue }
            style={ [styles.cardContainer, {
                width: imageWidth,
                height: cardImageAspectRatio * imageWidth
            }] }
        >
            <TouchableOpacity onPress={() => { console.log(item)}}>
                { 
                    coverUrl && 
                    <Image 
                        source={{ uri: coverUrl }} 
                        style={{ height: '100%' }} 
                        resizeMode='stretch'
                    /> 
                }
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
        marginVertical: '1%',
        marginHorizontal: 5,
        backgroundColor: 'dimgray',
        overflow: 'hidden'
    }
})

export default Card;
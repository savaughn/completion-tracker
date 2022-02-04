import React from 'react';
import { View } from 'react-native';

export const BADGES = {
    Playstation() { return <View style={{ backgroundColor: 'blue', height: 20, width: 20, borderRadius: 5, borderColor: 'black', marginHorizontal: 2}} />},
    Xbox() { return <View style={{ backgroundColor: 'green', height: 20, width: 20, borderRadius: 5, borderColor: 'black', marginHorizontal: 2}} />},
    Nintendo() { return <View style={{ backgroundColor: 'red', height: 20, width: 20, borderRadius: 5, borderColor: 'black', marginHorizontal: 2}} /> },
    PC() { return <View style={{ backgroundColor: 'black', height: 20, width: 20, borderRadius: 5, borderColor: 'black', marginHorizontal: 2}} /> }
};
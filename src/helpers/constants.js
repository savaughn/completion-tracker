import React from 'react';
import { StyleSheet, View } from 'react-native';

export const BADGES = {
    Playstation() { return <View style={[styles.badge, { backgroundColor: 'blue' }]} key='playstation' />},
    Xbox() { return <View style={[styles.badge, { backgroundColor: 'green' }]} key='xbox' />},
    Nintendo() { return <View style={[styles.badge, { backgroundColor: 'red' }]} key='nintendo' /> },
    PC() { return <View style={[styles.badge, { backgroundColor: 'black' }]} key='PC' /> }
};

const styles = StyleSheet.create({
    badge: {
        height: 20, 
        width: 20, 
        borderRadius: 5, 
        borderColor: 'black', 
        marginHorizontal: 2
    }
});
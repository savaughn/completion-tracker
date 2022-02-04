import React from 'react';
import { FlatList, ScrollView, Text, View } from 'react-native';
import Card from '../components/Card';
import { BADGES } from '../helpers/constants';

const Header = () => {
    return (
        <View style={{ flex: 1 }}>
            <Text style={{ fontSize: 20, fontWeight: 'bold', color: 'black'}}>Friends</Text>
        </View>
    );
};

const friends = [{
        image: 'url',
        tag: 'Gamertag',
        platforms: [
            'Xbox',
            'Playstation'
        ],
    }, {
        image: 'url',
        tag: 'Gamertag',
        platforms: [
            'Nintendo',
            'PC',
            'Xbox',
            'Playstation'
        ],
    },{
        image: 'url',
        tag: 'Gamertag',
        platforms: [
            'Nintendo',
            'Playstation'
        ],
    },{
        image: 'url',
        tag: 'Gamertag',
        platforms: [
            'PC',
            'Playstation'
        ],
    },{
        image: 'url',
        tag: 'Gamertag',
        platforms: [
            'Nintendo',
        ],
    }
];

const renderItem = ({
    image,
    tag,
    count,
    platforms,
    notify,
    onPress,
    onSettingsPress
}) => {
    console.log({ tag })
    return (
        <View style={{ flex: 1 }}>
            <View style={{ flexDirection: 'row', alignItems: 'center', paddingVertical: 10}}>
                <View style={{ backgroundColor: 'black', height: 36, width: 36, borderRadius: 5}} />
                <View style={{ paddingHorizontal: 5}}>
                    <Text style={{ fontSize: 16, color: 'black'}}>{ tag }</Text>
                    <FlatList 
                        horizontal
                        data={ platforms }
                        renderItem={ ({ item: platform }) => {
                            console.log({badge: BADGES[platform]})
                            return BADGES[platform]();
                        } }
                    />
                </View>
            </View>
        </View>
    );
};

const FriendsScreen = () => {
    return (
        <View style={{ flex: 1, paddingVertical: 10, paddingHorizontal: 10, backgroundColor: 'gray' }}>
            <Header />
            <View style={{ flex: 10 }}>
                <FlatList 
                    data={ friends }
                    renderItem={ ({item}) => renderItem(item) }
                    keyExtractor={ (item, index) => `${ item.tag }_${ index }`}
                    style={{ flex: 1 }}
                    ItemSeparatorComponent={ () => {
                        return (
                            <View style={{ borderWidth: 1, borderColor: 'black', width: '100%', height: 1}} />
                        );
                    }}
                />
            </View>
        </View>
    );
};

export default FriendsScreen;
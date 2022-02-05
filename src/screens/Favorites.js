import React from 'react';
import { FlatList, ScrollView, Text, View } from 'react-native';
import Card from '../components/Card';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { BADGES } from '../helpers/constants';

const favorites = {
    current: [
        {"cover": 85062, "coverUrl": "https://images.igdb.com/igdb/image/upload/t_1080p/co1tmu.jpg", "id": 19560, "name": "God of War"},
        {"cover": 141243, "coverUrl": "https://images.igdb.com/igdb/image/upload/t_1080p/co30zf.jpg", "id": 1219, "name": "Kingdom Hearts"},
        {"cover": 124169, "coverUrl": "https://images.igdb.com/igdb/image/upload/t_1080p/co2nt5.jpg", "id": 142242, "name": "Spyro 2: Ripto's Rage! - Reignited Trilogy"}
    ],
    completed: [
        {"cover": 166697, "coverUrl": "https://images.igdb.com/igdb/image/upload/t_1080p/co3kmh.jpg", "id": 1576, "name": "Spyro the Dragon"}
    ],
    next: [
        {"cover": 81907, "coverUrl": "https://images.igdb.com/igdb/image/upload/t_1080p/co1r77.jpg", "id": 19565, "name": "Marvel's Spider-Man"}
    ],
    recommended: [],
    collection: [
        {"cover": 86234, "coverUrl": "https://images.igdb.com/igdb/image/upload/t_1080p/co1uje.jpg", "id": 1025, "name": "Zelda II: The Adventure of Link"}, {"cover": 86202, "coverUrl": "https://images.igdb.com/igdb/image/upload/t_1080p/co1uii.jpg", "id": 1022, "name": "TheLegend of Zelda"}, {"cover": 170637, "coverUrl": "https://images.igdb.com/igdb/image/upload/t_1080p/co3nnx.jpg", "id": 1029, "name": "The Legend of Zelda: Ocarina of Time"}, {"cover": 164200, "coverUrl": "https://images.igdb.com/igdb/image/upload/t_1080p/co3ip4.jpg", "id": 150080, "name": "BS The Legend of Zelda \"MottZilla Patch\""}, {"cover": 172535, "coverUrl": "https://images.igdb.com/igdb/image/upload/t_1080p/co3p4n.jpg", "id": 1034, "name": "The Legend of Zelda: Four Swords Adventures"}, {"cover": 136239, "coverUrl": "https://images.igdb.com/igdb/image/upload/t_1080p/co2x4f.jpg", "id": 45142, "name": "The Legend of Zelda: Ocarina of Time - Master Quest"}, {"cover": 133483, "coverUrl": "https://images.igdb.com/igdb/image/upload/t_1080p/co2uzv.jpg", "id": 38319, "name": "BS Zelda no Densetsu"}, {"cover": 152899, "coverUrl": "https://images.igdb.com/igdb/image/upload/t_1080p/co39z7.jpg", "id": 152362, "name": "Zelda"}, {"cover": 132049, "coverUrl": "https://images.igdb.com/igdb/image/upload/t_1080p/co2tw1.jpg", "id": 1041, "name": "The Legend of Zelda: Oracle of Ages"}, {"cover": 165201, "coverUrl": "https://images.igdb.com/igdb/image/upload/t_1080p/co3jgx.jpg", "id": 163216, "name": "The Legend of Zelda: Triforce of the Gods"}
    ]
}

const renderRow = ({items, label}) => {
    return (
        <View style={{ flex: 1}}>
            <Text style={{ fontSize: 16, fontWeight: 'bold', paddingLeft: 30 }}>{ label }</Text>
            <FlatList 
                data={ items }
                renderItem={ ({item}) => <Card item={ item} /> }
                horizontal
                nestedScrollEnabled
            />
        </View>
    );
};

const FavoritesScreen = () => {
    const square = 40;
    return (
        <>
            <View style={{ flexDirection: 'row', alignItems: 'center', backgroundColor: 'gray', paddingHorizontal: 10, justifyContent: 'space-between', paddingVertical: 10 }}>
                <View style={{ height: square, width: square, backgroundColor: 'black', borderRadius: 5, marginRight: 10 }} />
                <View style={{ flex: 6, justifyContent: 'flex-start' }}>
                    <Text style={{ flex: 1, fontSize: 18, fontWeight: 'bold', color: 'black' }}>{'Gamertag'.toUpperCase()}</Text>
                    <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center'}}>
                        { ['Xbox', 'Nintendo', 'Playstation', 'PC'].map(platform => BADGES[platform]())}
                    </View>
                </View>
                <Icon color='black' name='settings' size={ 26 }/>
            </View>
            <View style={{ flex: 15, backgroundColor: 'gray' }}>
            <ScrollView>
                { renderRow({ items: favorites.current, label: 'Currently Playing'}) }
                { renderRow({ items: favorites.next, label: 'Up Next'}) }
                { renderRow({ items: favorites.completed, label: 'Completed'}) }
                { renderRow({ items: favorites.collection, label: 'Collection'}) }
            </ScrollView>
            </View>
        </>
    );
};

export default FavoritesScreen;
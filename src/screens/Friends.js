import React from 'react';
import { FlatList, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import Card from '../components/Card';
import CardRow from '../components/CardRow';
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
        recommended: [
            {"cover": 86234, "coverUrl": "https://images.igdb.com/igdb/image/upload/t_1080p/co1uje.jpg", "id": 1025, "name": "Zelda II: The Adventure of Link"}, {"cover": 86202, "coverUrl": "https://images.igdb.com/igdb/image/upload/t_1080p/co1uii.jpg", "id": 1022, "name": "TheLegend of Zelda"}
        ],
        current: [
            {"cover": 166697, "coverUrl": "https://images.igdb.com/igdb/image/upload/t_1080p/co3kmh.jpg", "id": 1576, "name": "Spyro the Dragon"}
        ],
        recent: [
            {"cover": 81907, "coverUrl": "https://images.igdb.com/igdb/image/upload/t_1080p/co1r77.jpg", "id": 19565, "name": "Marvel's Spider-Man"}
        ]
    }, {
        image: 'url',
        tag: 'Gamertag',
        platforms: [
            'Nintendo',
            'PC',
            'Xbox',
            'Playstation'
        ],
        recommended: [
            {"cover": 86234, "coverUrl": "https://images.igdb.com/igdb/image/upload/t_1080p/co1uje.jpg", "id": 1025, "name": "Zelda II: The Adventure of Link"}, {"cover": 86202, "coverUrl": "https://images.igdb.com/igdb/image/upload/t_1080p/co1uii.jpg", "id": 1022, "name": "TheLegend of Zelda"}
        ],
        current: [
            {"cover": 166697, "coverUrl": "https://images.igdb.com/igdb/image/upload/t_1080p/co3kmh.jpg", "id": 1576, "name": "Spyro the Dragon"}
        ],
        recent: [
            {"cover": 81907, "coverUrl": "https://images.igdb.com/igdb/image/upload/t_1080p/co1r77.jpg", "id": 19565, "name": "Marvel's Spider-Man"}
        ]
    },{
        image: 'url',
        tag: 'Gamertag',
        platforms: [
            'Nintendo',
            'Playstation'
        ],
        recommended: [
            {"cover": 86234, "coverUrl": "https://images.igdb.com/igdb/image/upload/t_1080p/co1uje.jpg", "id": 1025, "name": "Zelda II: The Adventure of Link"}, {"cover": 86202, "coverUrl": "https://images.igdb.com/igdb/image/upload/t_1080p/co1uii.jpg", "id": 1022, "name": "TheLegend of Zelda"}
        ],
        current: [
            {"cover": 166697, "coverUrl": "https://images.igdb.com/igdb/image/upload/t_1080p/co3kmh.jpg", "id": 1576, "name": "Spyro the Dragon"}
        ],
        recent: [
            {"cover": 81907, "coverUrl": "https://images.igdb.com/igdb/image/upload/t_1080p/co1r77.jpg", "id": 19565, "name": "Marvel's Spider-Man"}
        ]
    },{
        image: 'url',
        tag: 'Gamertag',
        platforms: [
            'PC',
            'Playstation'
        ],
        recommended: [
            {"cover": 86234, "coverUrl": "https://images.igdb.com/igdb/image/upload/t_1080p/co1uje.jpg", "id": 1025, "name": "Zelda II: The Adventure of Link"}, {"cover": 86202, "coverUrl": "https://images.igdb.com/igdb/image/upload/t_1080p/co1uii.jpg", "id": 1022, "name": "TheLegend of Zelda"}
        ],
        current: [
            {"cover": 166697, "coverUrl": "https://images.igdb.com/igdb/image/upload/t_1080p/co3kmh.jpg", "id": 1576, "name": "Spyro the Dragon"}
        ],
        recent: [
            {"cover": 81907, "coverUrl": "https://images.igdb.com/igdb/image/upload/t_1080p/co1r77.jpg", "id": 19565, "name": "Marvel's Spider-Man"}
        ]
    },{
        image: 'url',
        tag: 'Gamertag',
        platforms: [
            'Nintendo',
        ],
        recommended: [
            {"cover": 86234, "coverUrl": "https://images.igdb.com/igdb/image/upload/t_1080p/co1uje.jpg", "id": 1025, "name": "Zelda II: The Adventure of Link"}, {"cover": 86202, "coverUrl": "https://images.igdb.com/igdb/image/upload/t_1080p/co1uii.jpg", "id": 1022, "name": "TheLegend of Zelda"}
        ],
        current: [
            {"cover": 166697, "coverUrl": "https://images.igdb.com/igdb/image/upload/t_1080p/co3kmh.jpg", "id": 1576, "name": "Spyro the Dragon"}
        ],
        recent: [
            {"cover": 81907, "coverUrl": "https://images.igdb.com/igdb/image/upload/t_1080p/co1r77.jpg", "id": 19565, "name": "Marvel's Spider-Man"}
        ]
    }
];

const renderItem = ({
    image,
    tag,
    count,
    platforms,
    notify,
    onPress, // open side modal with friend game art
    onSettingsPress
}) => {
    console.log({ tag })
    return (
        <View style={{ flex: 1 }}>
            <TouchableOpacity 
                style={{ flexDirection: 'row', alignItems: 'center', paddingVertical: 10}}
                // onPress={}  // display user's game data
            >
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
            </TouchableOpacity>
        </View>
    );
};

const Recommended = () => {
    const recommended = [
        {"cover": 85062, "coverUrl": "https://images.igdb.com/igdb/image/upload/t_1080p/co1tmu.jpg", "id": 19560, "name": "God of War"},
        {"cover": 141243, "coverUrl": "https://images.igdb.com/igdb/image/upload/t_1080p/co30zf.jpg", "id": 1219, "name": "Kingdom Hearts"},
        {"cover": 124169, "coverUrl": "https://images.igdb.com/igdb/image/upload/t_1080p/co2nt5.jpg", "id": 142242, "name": "Spyro 2: Ripto's Rage! - Reignited Trilogy"}
    ];
    return (
        <View>
            <Text>Recommended</Text>
            <FlatList 
                data={ recommended }
                renderItem={ ({ item }) => <Card item={ item } /> }
                horizontal
            />
        </View>
    );
};

const RecentlyAdded = () => {
    const recentlyAdded = [
        {"cover": 124169, "coverUrl": "https://images.igdb.com/igdb/image/upload/t_1080p/co2nt5.jpg", "id": 142242, "name": "Spyro 2: Ripto's Rage! - Reignited Trilogy"},
        {"cover": 85062, "coverUrl": "https://images.igdb.com/igdb/image/upload/t_1080p/co1tmu.jpg", "id": 19560, "name": "God of War"},
        {"cover": 141243, "coverUrl": "https://images.igdb.com/igdb/image/upload/t_1080p/co30zf.jpg", "id": 1219, "name": "Kingdom Hearts"},
    ];
    return (
        <CardRow
            title='Recently Added'
            items={ recentlyAdded }
        />
    );
};

const CurrentlyPlaying = () => {
    const currentlyPlaying = [
        {"cover": 141243, "coverUrl": "https://images.igdb.com/igdb/image/upload/t_1080p/co30zf.jpg", "id": 1219, "name": "Kingdom Hearts"},
        {"cover": 124169, "coverUrl": "https://images.igdb.com/igdb/image/upload/t_1080p/co2nt5.jpg", "id": 142242, "name": "Spyro 2: Ripto's Rage! - Reignited Trilogy"},
        {"cover": 85062, "coverUrl": "https://images.igdb.com/igdb/image/upload/t_1080p/co1tmu.jpg", "id": 19560, "name": "God of War"},
    ];
    return (
        <CardRow 
            title='Currently Playing'
            items={ currentlyPlaying }
        />
    );
};

const FriendsScreen = () => {
    return (
        <View style={{ flex: 1, paddingVertical: 10, paddingHorizontal: 10, backgroundColor: 'gray' }}>
            <Header />
            <View style={{ flex: 20, flexDirection: 'row' }}>
                <FlatList 
                    data={ [...friends, ...friends, ...friends] }
                    renderItem={ ({item}) => renderItem(item) }
                    keyExtractor={ (item, index) => `${ item.tag }_${ index }`}
                    style={{ flex: 1 }}
                    ItemSeparatorComponent={ () => {
                        return (
                            <View style={{ borderWidth: 1, borderColor: 'black', width: '80%', height: 1}} />
                        );
                    }}
                    showsVerticalScrollIndicator={ false }
                />
                <ScrollView style={{ flex: 10 }} showsVerticalScrollIndicator={ false }>
                    <Recommended />
                    <CurrentlyPlaying />
                    <RecentlyAdded />
                </ScrollView>
            </View>

        </View>
    );
};

export default FriendsScreen;
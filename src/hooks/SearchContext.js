import React, { createContext, useContext, useState } from 'react';
import { AuthContext } from './AuthContext';

export const SearchContext = createContext();
export const { Provider, Consumer } = SearchContext;
export const SearchProvider = ({
    children
}) => {
    const [ games, setGames ] = useState([]);
    const [ isSearching, setIsSearching ] = useState(false);
    const { accessToken, baseUrl, clientId } = useContext(AuthContext);

    const fetchCoverArt = async cover => {
        try {
          const response = await fetch(
            `https://api.igdb.com/v4/covers/${cover}?fields=url,height,width`, {
                method: 'GET',
                headers: {
                    'Accept': 'application/json',
                    'Client-ID': clientId,
                    'Authorization': `Bearer ${ accessToken }`,
                },
            }
        );
        const [{ url: imageUrl }] = await response.json();
        return `https://images.igdb.com/igdb/image/upload/t_1080p/${imageUrl?.slice(imageUrl?.length - 10)}`;  
        } catch (error) {
            console.log(error)
        }
        
    };

    const searchGames = async searchTerm => {
        if (searchTerm.length < 1) return null;
        const response = await fetch(`${ baseUrl }/games?search=${searchTerm}&fields=id,name,cover&limit=10`, {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Client-ID': clientId,
                'Authorization': `Bearer ${ accessToken }`,
            },
          }
        );
        const games = await response.json();
        const gamesData = await Promise.all(games.map(async game => {
            const { cover } = game;
            const coverUrl = await fetchCoverArt(cover);
            try{ 
            return {
                ...game,
                coverUrl
            };
        } catch (e) {
            console.log(e);
        }
        }));
        console.log({ gamesData });
        setGames(gamesData);
    };
    const clearResults = () => {
        setGames([]);
    };

    

    return (
        <Provider
            value={{
                searchGames,
                clearResults,
                searchResult: games,
                isSearching
            }}
        >
            { children }
        </Provider>
    );
};
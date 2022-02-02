import React, { createContext, useEffect, useState } from 'react';
import { client_secret, client_id } from '@env';

export const AuthContext = createContext();
export const { Provider, Consumer } = AuthContext;
export const AuthProvider = ({
    children
}) => {
    const [ accessToken, setAccessToken ] = useState();
    const fetchAccessToken = async () => {
        const url = 'https://id.twitch.tv/oauth2/token'
        const token = await fetch(
            `${url}?client_id=${ client_id }&client_secret=${ client_secret }&grant_type=client_credentials`, {
                method: 'POST',
            }
        );
        const tokenData = await token.json();
        const { access_token } = tokenData;
        // const access_token = 'sariknznycessyuk9cb4nunyal69gl';
        setAccessToken(access_token);
    };

    useEffect(() => {
        if(!accessToken) fetchAccessToken();
    }, []);

    return (
        <Provider
            value={{
                accessToken,
                clientId: client_id,
                baseUrl: 'https://api.igdb.com/v4'
            }}
        >
            { children }
        </Provider>
    );
};

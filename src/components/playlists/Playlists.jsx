import { React, useState, useEffect } from 'react';
import { getPlaylistsFromUser } from '../../services/playlist'
import { Loading } from '../loading/Loading';
import { AddCircle, AddCircleOutline } from '@mui/icons-material';

import * as Style from './Style'

export const Playlists = () => {
    const [playlists, setPlaylists] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        fetchPlaylists();
    }, []);

    const fetchPlaylists = async () => {
        try {
            const response = await getPlaylistsFromUser();
            setPlaylists(response.data.playlists);
            setLoading(false)
        } catch (error) {
            console.error("Erro ao buscar playlists:", error);
            setLoading(false)
        }
    };
    if (!loading) {
        return (
            <div>
                <h1>My Playlist</h1>
                <AddCircle/>
                <ul>
                    {Array.isArray(playlists) &&
                        playlists.map((playlist, index) => (
                            <Style.CardPlaylist key={playlist._id}>{index + 1} {playlist._name} </Style.CardPlaylist>
                        ))}
                </ul>
            </div>
        )
    } else {
        (
            <>
                <Loading />
            </>
        )
    }
}
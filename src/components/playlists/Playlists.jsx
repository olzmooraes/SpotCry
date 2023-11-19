import { React, useState, useEffect } from 'react';
import { getPlaylistsFromUser } from '../../services/playlist'
import { Loading } from '../loading/Loading';
import { AddCircle, AddCircleOutline } from '@mui/icons-material';
import { useNavigate } from "react-router-dom";
import { goToAddPlaylist } from '../../routes/Coordinator';
import logo from ""
import * as Style from './Style'

export const Playlists = () => {
    const [playlists, setPlaylists] = useState([]);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate()
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
    const addPlaylist = () => {
        goToAddPlaylist(navigate)
    }
    if (!loading) {
        return (
            <div>
                <h1>My Playlist</h1>
                <AddCircle onClick={addPlaylist} />
                <Style.CardPlaylist>
                    {Array.isArray(playlists) &&
                        playlists.map((playlist, index) => (
                            <Style.CardContainer key={playlist.id}>
                                <Style.CardImage src={logo} alt="logo" />
                                <Style.CardInfo>
                                    <Style.CardTitle>{playlist.name}</Style.CardTitle>
                                    <Style.CardDescription>{playlist.description}</Style.CardDescription>
                                </Style.CardInfo>
                            </Style.CardContainer>
                        ))}
                </Style.CardPlaylist>
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
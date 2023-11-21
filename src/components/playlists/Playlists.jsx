import { React, useState, useEffect } from 'react';
import { getPlaylistsFromUser } from '../../services/playlist'
import { Loading } from '../loading/Loading';
import { AddCircle, AddCircleOutline } from '@mui/icons-material';
import { useNavigate } from "react-router-dom";
import { goToAddPlaylist, goToSongsFromPlaylist } from '../../routes/Coordinator';
import logo from "../../assets/logoHeader.png";
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
        }
    };
    const addPlaylist = () => {
        goToAddPlaylist(navigate)
    }
    const goSongsFomPLaylist = () => {
        goToSongsFromPlaylist(navigate)
    }
    if (!loading) {
        return (
            <div>
                <Style.Title>Playlists <AddCircleOutline onClick={addPlaylist}/></Style.Title>
                <Style.CardPlaylist>
                    {Array.isArray(playlists) &&
                        playlists.map((playlist, index) => (
                            <Style.CardContainer onClick={goSongsFomPLaylist} key={playlist._id}>
                                <Style.CardImage src={logo} alt="logo" />
                                <Style.CardInfo>
                                    <Style.CardTitle>{playlist._name}</Style.CardTitle>
                                    <Style.CardDescription>{playlist._description}</Style.CardDescription>
                                </Style.CardInfo>
                            </Style.CardContainer>
                        ))}
                </Style.CardPlaylist>
            </div>
        )
    } else {
        return (
            <>
                <Style.Title>Playlists <AddCircleOutline onClick={addPlaylist}/></Style.Title>
                <Loading />
            </>
        )
    }
}
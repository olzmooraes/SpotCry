import { React, useState, useEffect } from 'react';
import { getPlaylistsFromUser } from '../../services/getPlaylist'
import { Loading } from '../loading/Loading';
import { AddCircle, AddCircleOutline } from '@mui/icons-material';
import { useNavigate } from "react-router-dom";
import { goToAddPlaylist, goToDetailPage } from '../../routes/Coordinator';
import logo from "../../assets/logoHeader.png";
import * as Style from './Style'
import { getTokenData } from '../../services/getTokenData';
import { useProtectedPage } from '../../hooks/useProtectedPage';
import { deletePlaylist } from '../../services/deletePlaylist';

export const Playlists = () => {
    const [playlists, setPlaylists] = useState([]);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate()

    useProtectedPage()

    useEffect(() => {
        getTokenData(localStorage.getItem('token'))
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
    if (!loading) {
        return (
            <Style.AllPlaylist>
                <Style.Title>Todas as Playlists <AddCircleOutline onClick={addPlaylist} /></Style.Title>
                <Style.CardPlaylist>
                    {Array.isArray(playlists) &&
                        playlists.map((playlist, index) => (
                            <Style.CardContainer onClick={() => { goToDetailPage(navigate, playlist._id) }} key={playlist._id}>
                                    <Style.CardImage src={logo} alt="imagemPlaylist" />
                                    <Style.CardInfo>
                                        <Style.CardTitle>{playlist._name}</Style.CardTitle>
                                        <Style.CardDescription>{playlist._description}</Style.CardDescription>
                                    </Style.CardInfo>
                            </Style.CardContainer>
                        ))}
                </Style.CardPlaylist>
            </Style.AllPlaylist>
        )
    } else {
        return (
            <>
                <Style.Title>Playlists <AddCircleOutline onClick={addPlaylist} /></Style.Title>
                <Loading />
            </>
        )
    }
}
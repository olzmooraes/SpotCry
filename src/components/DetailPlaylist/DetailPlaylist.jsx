import { useState, useEffect } from "react";
import * as Style from "./Style"
import { useNavigate } from "react-router-dom";
import { goToAddMusicByPlaylist, goToFeed } from "../../routes/Coordinator";
import { Loading } from "../loading/Loading";
import { AddCircle, AddCircleOutline } from '@mui/icons-material';
import { useParams } from "react-router-dom"
import { getMusicFromPlaylist } from "../../services/musicFromPlaylist";
import { getMusicsFromId } from "../../services/musicsFromId";
import { Stack, Container, Box, Paper, Grid } from "@mui/material";
import { getPlaylistById } from "../../services/playlistById";
import { AddMusicByPlaylist } from "../musics/AddMusicsByPlaylist";
import { addMusicForPLaylist } from "../../services/addMusicForPlaylist";
import { getMusicsFromUser } from "../../services/musics";
import styled from 'styled-components';
import logo from '../../assets/logoHeader.png';
import PlayCircleIcon from '@mui/icons-material/PlayCircle';

const MusicContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 2fr;
  align-items: center;
  justify-items: center;
  margin-bottom: 10px;
`;

const MusicImage = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
`;

const MusicInfo = styled.div`
  margin-left: 10px;
`;

const MusicName = styled.span`
  font-weight: bold;
`;

const MusicArtist = styled.span`
  font-size: 12px;
`;
export const DetailPlaylist = (props) => {
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate()
    const pathParams = useParams()
    const [idSongs, setSongs] = useState([])
    const [detailSongs, setDetailSongs] = useState([])
    const [musicsForAdd, setMusicsForAdd] = useState({})
    const [visible, setVisible] = useState(false)

    const fetchSongsFromPlaylist = async () => {
        try {
            setLoading(true)
            const musicsFromPlaylist = await getMusicFromPlaylist(pathParams.playlist);
            setSongs(musicsFromPlaylist.data.songs);
        } catch (e) {
            console.error("Erro ao buscar Musicas:", e);
        }
    }
    const fetchPlaylistId = async () => {
        try {
            const playlist = await getPlaylistById(pathParams.playlist)
        } catch (e) {

        }
    }
    const getMusicsForAdd = async () => {
        setLoading(true);
        const musics = await getMusicsFromUser()
        //const musicsFiltred = musics.data.songs.filter(elemento => elemento.id !== detailSongs.id)
        setMusicsForAdd(musics.data.songs)
        setLoading(false);
    }
    const getDetailMusic = async () => {
        try {
            setLoading(true);
            const songOld = []
            for (const id of idSongs) {
                songOld.push(getMusicsFromId(id))
            }
            const result = await Promise.all(songOld)
            const dataResult = result.map((res) => res.data.song)
            setDetailSongs(dataResult)
            setLoading(false)
        } catch (e) {
            console.error("Erro ao buscar Musicas:", e);
        }
    }
    const feed = () => {
        goToFeed(navigate)
    }
    const onConfirm = (music) => {
        addMusicForPLaylist(pathParams.playlist, music)
    }
    const onCancel = () => {
        setVisible(false)
    }
    const popup = () => {
        if (visible) {
            return (
                <>
                    <AddMusicByPlaylist musics={musicsForAdd} onConfirm={onConfirm} onCancel={onCancel}/>
                </>
            )
        }
    }

    useEffect(() => {
        fetchSongsFromPlaylist()
        getMusicsForAdd()
    }, [])

    useEffect(() => {
        getDetailMusic()
    }, [idSongs])

    useEffect(() => {
        popup()
    }, [visible]);

        if (!loading) {
            return (
                <>
                    <Style.BackButton onClick={feed}>Voltar</Style.BackButton>
                    <MusicContainer>
                        <MusicName> - </MusicName>
                        <MusicName>
                            Nome
                        </MusicName>
                        <MusicName>
                            Artista
                        </MusicName>
                    </MusicContainer>
                    {
                        detailSongs.map((elemento, index) => {
                            return (
                                <MusicContainer key={elemento.id + index}>
                                    <PlayCircleIcon />
                                    <MusicName>
                                        {elemento.title}
                                    </MusicName>
                                    <MusicArtist>
                                        {elemento.artist}
                                    </MusicArtist>
                                </MusicContainer>

                            )
                        })
                    }
                    <AddCircle onClick={() => { setVisible(true) }}></AddCircle>
                    {
                        popup()
                    }
                </>
            )
        } else {
            return (
                <>
                    <Style.BackButton onClick={feed}>Voltar</Style.BackButton>
                    <Loading />
                    <AddCircle onClick={() => { setVisible(true) }}></AddCircle>
                    {
                        popup()
                    }
                </>
            )
        }
    }
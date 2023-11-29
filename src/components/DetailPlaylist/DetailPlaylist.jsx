import { useState, useEffect } from "react";
import * as Style from "./Style"
import { useNavigate } from "react-router-dom";
import { goToAddMusicByPlaylist, goToFeed } from "../../routes/Coordinator";
import { Loading } from "../loading/Loading";
import { AddCircle, AddCircleOutline, Troubleshoot } from '@mui/icons-material';
import { useParams } from "react-router-dom"
import { getMusicFromPlaylist } from "../../services/musicFromPlaylist";
import { getMusicsFromId } from "../../services/musicsFromId";
import { getPlaylistById } from "../../services/getPlaylistById";
import { AddMusicByPlaylist } from "../musics/AddMusicsByPlaylist";
import { getMusicsFromUser } from "../../services/musics";
import logo from '../../assets/logoHeader.png';
import { useProtectedPage } from "../../hooks/useProtectedPage";
import { ThumbNail } from "../ThumbNail/ThumbNail";
import { getTokenData } from "../../services/getTokenData";

export const DetailPlaylist = () => {
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate()
    const pathParams = useParams()
    const [idSongs, setSongs] = useState([])
    const [detailSongs, setDetailSongs] = useState([])
    const [musicsForAdd, setMusicsForAdd] = useState({})
    const [visible, setVisible] = useState(false)
    const userId = getTokenData(localStorage.getItem("token")).id
    const [authenticated, setAuthenticated] = useState(false)

    useProtectedPage()

    const fetchSongsFromPlaylist = async () => {
        
        try {
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
        const musics = await getMusicsFromUser()
        setMusicsForAdd(musics.data.songs)
    }
    const getDetailMusic = async () => {
        try {
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
    const onCancel = () => {
        setVisible(false)
    }

    useEffect(() => {
        if(userId === pathParams.playlist._userId) { setAuthenticated(true)} else { setAuthenticated(false)}
        setLoading(true)
        fetchSongsFromPlaylist()
        getMusicsForAdd()
    }, [])

    useEffect(() => {
        setLoading(true)
        getDetailMusic()
    }, [idSongs])

    return (
        <>
            {
                useProtectedPage()
            }
            <Style.BackButton onClick={feed}>Voltar</Style.BackButton>
            <Style.Header>
                <Style.PlaylistImage src={logo} alt='logoPlaylist' />
                <Style.DivContent>
                    <Style.PlaylistName>Minha PLaylist</Style.PlaylistName>
                    <Style.ArtistSubtitle>artista</Style.ArtistSubtitle>
                </Style.DivContent>
            </Style.Header>
            <Style.Main>
                {authenticated && (<AddCircle onClick={() => { goToAddMusicByPlaylist(navigate, pathParams.playlist)}}></AddCircle>)}
                <AddCircle onClick={() => { goToAddMusicByPlaylist(navigate, pathParams.playlist)}}></AddCircle>
                {!loading &&
                    detailSongs.map((elemento, index) => {
                        return (
                            <Style.MusicContainer key={elemento.id + index}>
                                <ThumbNail url={elemento.url} name={elemento.titile} />
                                <Style.MusicName>
                                    {elemento.title}
                                </Style.MusicName>
                                <Style.MusicArtist>
                                    {elemento.artist}
                                </Style.MusicArtist>
                            </Style.MusicContainer>

                        )
                    }) || (
                        <Loading />
                    )
                }
            </Style.Main>
        </>
    )
}

import { useState, useEffect } from "react";
import * as Style from "./Style"
import { useNavigate } from "react-router-dom";
import { goToAddMusicByPlaylist, goToFeed } from "../../routes/Coordinator";
import { Loading } from "../loading/Loading";
import { AddCircle, AddCircleOutline, Troubleshoot } from '@mui/icons-material';
import { useParams } from "react-router-dom"
import { getMusicFromPlaylist } from "../../services/musicFromPlaylist";
import { getMusicsFromId } from "../../services/musicsFromId";
import { getPlaylistById } from "../../services/playlistById";
import { AddMusicByPlaylist } from "../musics/AddMusicsByPlaylist";
import { addMusicForPLaylist } from "../../services/addMusicForPlaylist";
import { getMusicsFromUser } from "../../services/musics";
import logo from '../../assets/logoHeader.png';
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import { useProtectedPage } from "../../hooks/useProtectedPage";

export const DetailPlaylist = () => {
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate()
    const pathParams = useParams()
    const [idSongs, setSongs] = useState([])
    const [detailSongs, setDetailSongs] = useState([])
    const [musicsForAdd, setMusicsForAdd] = useState({})
    const [visible, setVisible] = useState(false)

    useProtectedPage()

    const fetchSongsFromPlaylist = async () => {
        try {
            const musicsFromPlaylist = await getMusicFromPlaylist(pathParams.playlist);
            setSongs(musicsFromPlaylist.data.songs);
            setLoading(false)
        } catch (e) {
            console.error("Erro ao buscar Musicas:", e);
        }
    }
    const fetchPlaylistId = async () => {
        try {
            setLoading(true)
            const playlist = await getPlaylistById(pathParams.playlist)
            setLoading(false)
        } catch (e) {

        }
    }
    const getMusicsForAdd = async () => {
        const musics = await getMusicsFromUser()
        //const musicsFiltred = musics.data.songs.filter(elemento => elemento.id !== detailSongs.id)
        setMusicsForAdd(musics.data.songs)
        setLoading(false)
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
    const onConfirm = (music) => {
        addMusicForPLaylist(pathParams.playlist, music)
    }
    const onCancel = () => {
        setVisible(false)
    }

    useEffect(() => {
        setLoading(true)
        fetchSongsFromPlaylist()
        getMusicsForAdd()
    }, [])

    useEffect(() => {
        setLoading(true)
        getDetailMusic()
    }, [idSongs])

    useEffect(() => {
        popup()
    }, [visible]);

    const popup = () => {
        if (visible) {
            return (
                <>
                    <AddMusicByPlaylist musics={musicsForAdd} onConfirm={onConfirm} onCancel={onCancel} />
                </>
            )
        }
    }
    return (
        <>
            <Style.BackButton onClick={feed}>Voltar</Style.BackButton>
            <Style.Header>
                <Style.PlaylistImage src={logo} alt='logoPlaylist' />
                <Style.DivContent>
                    <Style.PlaylistName>Minha PLaylist</Style.PlaylistName>
                    <Style.ArtistSubtitle>artista</Style.ArtistSubtitle>
                </Style.DivContent>
            </Style.Header>
            <Style.MusicContainer>
                <Style.MusicName> - </Style.MusicName>
                <Style.MusicName>
                    Nome
                </Style.MusicName>
                <Style.MusicName>
                    Artista
                </Style.MusicName>
            </Style.MusicContainer>
            {!loading &&
                detailSongs.map((elemento, index) => {
                    return (
                        <Style.MusicContainer key={elemento.id + index}>
                            <PlayCircleIcon />
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
            <AddCircle onClick={() => { setVisible(true) }}></AddCircle>
            {
                popup()
            }
        </>
    )
}
    // } else {
    //     return (
    //         <>
    //             <Style.BackButton onClick={feed}>Voltar</Style.BackButton>
    //             <Loading />
    //             <AddCircle onClick={() => { setVisible(true) }}></AddCircle>
    //             {
    //                 popup()
    //             }
    //         </>
    //     )
    // }

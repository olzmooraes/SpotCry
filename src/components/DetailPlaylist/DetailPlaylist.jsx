import { useState, useEffect } from "react";
import * as Style from "./Style"
import { useNavigate } from "react-router-dom";
import { goBack, goToAddMusicByPlaylist, goToFeed } from "../../routes/Coordinator";
import { Loading } from "../loading/Loading";
import { AddCircle, AddCircleOutline, ConnectingAirportsOutlined, Troubleshoot } from '@mui/icons-material';
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
import HomeIcon from '@mui/icons-material/Home';
import EditNoteIcon from '@mui/icons-material/EditNote';
import RemoveIcon from '@mui/icons-material/RemoveCircle';
import { deleteTrackPlaylist } from "../../services/deleteTrackPlaylist";

export const DetailPlaylist = () => {
    const [loading, setLoading] = useState(true);
    const [loadingDetailPLaylist, setLoadingDetailPLaylist] = useState(true);
    const navigate = useNavigate()
    const pathParams = useParams()
    const [idSongs, setSongs] = useState([])
    const [detailSongs, setDetailSongs] = useState([])
    const [musicsForAdd, setMusicsForAdd] = useState({})
    const [userId, setUserId] = useState(getTokenData(localStorage.getItem("token")).id)
    const [authenticated, setAuthenticated] = useState(false)
    const [detailPlaylist, setDetailPlaylist] = useState()

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

            setLoadingDetailPLaylist(true)
            const playlist = await getPlaylistById(pathParams.playlist)
            setDetailPlaylist(playlist.data.playlist)
            setLoadingDetailPLaylist(false)
        } catch (e) {
            console.log("Erro ao buscar detalhes da playlist", e)
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

    const handleRemoveMusic = async (musicId) => {
        try {
            await deleteTrackPlaylist(pathParams.playlist, musicId);
            const updatedSongs = detailSongs.filter(song => song.id !== musicId);
            setDetailSongs(updatedSongs);
        } catch (error) {
            console.error("Erro ao remover a música:", error);
        }
    };

    const feed = (navigation) => {
        goToFeed(navigation)
    }
    useEffect(() => {
        fetchPlaylistId()
        setLoading(true)
        fetchSongsFromPlaylist()
        getMusicsForAdd()
    }, [])

    useEffect(() => {
        setLoading(true)
        if (idSongs) {
            getDetailMusic()
        }
    }, [idSongs])

    useEffect(() => {
        if (detailPlaylist != undefined) {
            if (userId == detailPlaylist._userId) {
                setAuthenticated(true)
            } else {
                setAuthenticated(false)
            }
        }
    }, [detailPlaylist])
    return (
        <>
            <Style.Header>
                <Style.Home onClick={() => feed(navigate)}>
                    <HomeIcon />
                </Style.Home>
                <Style.PlaylistImage src={logo} alt='logoPlaylist' />
                <Style.DivContent>
                    {
                        !loadingDetailPLaylist && (
                            <>
                                <Style.PlaylistName>{detailPlaylist._name}</Style.PlaylistName>
                                <Style.ArtistSubtitle>{detailPlaylist._description}</Style.ArtistSubtitle>
                            </>)
                        || (<Loading />)

                    }
                </Style.DivContent>
            </Style.Header>
            <Style.Main>
                {authenticated && (<AddCircle onClick={() => { goToAddMusicByPlaylist(navigate, pathParams.playlist) }}></AddCircle>)}
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
                                </Style.MusicArtist>{authenticated && (<RemoveIcon onClick={() => handleRemoveMusic(elemento.id)} />)}
                            </Style.MusicContainer>
                        )
                    }) || <Loading />
                }
            </Style.Main>
        </>
    )
}

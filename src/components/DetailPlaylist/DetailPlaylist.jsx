import { useState, useEffect } from "react";
import * as Style from "./Style"
import { useNavigate } from "react-router-dom";
import { goToAddMusic, goToFeed } from "../../routes/Coordinator";
import { Loading } from "../loading/Loading";
import { AddCircle, AddCircleOutline } from '@mui/icons-material';
import { useParams } from "react-router-dom"
import { getMusicFromPlaylist } from "../../services/musicFromPlaylist";
import { getMusicsFromId } from "../../services/musicsFromId";
import { Stack, Container, Box, Paper, Grid } from "@mui/material";
import { getPlaylistById } from "../../services/playlistById";

export const DetailPlaylist = (props) => {
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate()
    const pathParams = useParams()
    const [idSongs, setSongs] = useState([])
    const [detailSongs, setDetailSongs] = useState([])

    const fetchSongsFromPlaylist = async () => {
        try {
            setLoading(true)
            const musicsFromPlaylist = await getMusicFromPlaylist(pathParams.playlist);
            console.log(musicsFromPlaylist)
            setSongs(musicsFromPlaylist.data.songs);
        } catch (e) {
            console.error("Erro ao buscar Musicas:", e);
        }
    }
    const fetchPlaylistId = async () => {
        try {
            const playlist = await getPlaylistById(pathParams.playlist)
        }catch(e) {

        }
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
    const addmusic = () => {
        goToAddMusic(navigate)
    }
    useEffect(() => {
        fetchSongsFromPlaylist()
    }, [])
    useEffect(() => {
        getDetailMusic()
    }, [idSongs])

    if (!loading) {
        return (
            <>
                <Style.BackButton onClick={feed}>Voltar</Style.BackButton>
                {
                    detailSongs.map((elemento) => {
                        return (
                            <Container>
                                <Stack key={elemento.id} >
                                    <Grid item xs={6}>
                                        <div>{elemento.title}</div>
                                    </Grid>
                                    <Grid item xs={6}>
                                        <div>{elemento.artist}</div>
                                    </Grid>
                                </Stack>
                            </Container>
                        )
                    })
                }
            </>
        )
    } else {
        return (
            <>
                <Style.BackButton onClick={feed}>Voltar</Style.BackButton>
                <Loading />
            </>
        )
    }
}
import { useState, useEffect } from "react";
import * as Style from "./Style"
import { useNavigate } from "react-router-dom";
import { goToAddMusic, goToFeed } from "../../routes/Coordinator";
import { Loading } from "../loading/Loading";
import { AddCircle, AddCircleOutline } from '@mui/icons-material';
import { useParams } from "react-router-dom"
import { getMusicFromPlaylist } from "../../services/musicFromPlaylist";

export const SongsFromPLaylist = (props) => {
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate()
    const pathParams = useParams()
    const [songs, setSongs] = useState() 

    const fetchSongsFromPlaylist = async () => {
        try{
            const musicsFromPlaylist = await getMusicFromPlaylist(pathParams.playlist)
            setSongs(musicsFromPlaylist.data.songs)
            setLoading(false);
        }catch(e){
            console.error("Erro ao buscar playlists:", e);
            setLoading(false);
        }
    }
    const feed = ()=>{
        goToFeed(navigate)
    }
    const addmusic = () => {
        goToAddMusic(navigate)
    }
    return (
        <>
            <Style.BackButton onClick={feed}>Voltar</Style.BackButton>
            <Style.Container>
            <h1 onClick={addmusic}>{props.namePlaylist} <AddCircleOutline /></h1>
            <div>
                
            </div>
            </Style.Container>
        </>
    )
}
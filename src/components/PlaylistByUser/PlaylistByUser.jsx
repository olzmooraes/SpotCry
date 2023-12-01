import * as Style from "./Style";
import { useState, useEffect } from "react";
import { goBack, goToDetailPage } from "../../routes/Coordinator";
import { deletePlaylist } from "../../services/deletePlaylist"
import { useNavigate } from "react-router-dom";
import { getTokenData } from "../../services/getTokenData";
import Cookies from "js-cookie";
import logo from "../../assets/logoHeader.png";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import { getPlaylistByUser } from "../../services/getPlaylistByUser";
import { BackButton } from "../../constants/BackButton";
import {useProtectedPage} from "../../hooks/useProtectedPage"
import { Loading } from "../loading/Loading";

export const PlaylistByUser = () => {
    const [playlists, setPlaylists] = useState([])
    const navigate = useNavigate()
    const [loading, setLoading] = useState(true)

    useProtectedPage()

    const playlistByUser = async () => {
        const playlistsUser = await getPlaylistByUser()
        setPlaylists(playlistsUser.data.playlists)
        console.log(playlists)
        setLoading(false)
    }
    const playlistDeleted = (id) => {
        deletePlaylist(id)
        const newPlaylist = playlists.filter(playlist => playlist._id !== id);
        setPlaylists(newPlaylist)
    }
    useEffect(() => {
        setLoading(true)
        playlistByUser()
    }, [])
    return (
        <>
            <BackButton />
            <Style.UserPlaylist>
                {  !loading &&
                    playlists.map((playlist, index) => (
                        <div key={playlist._id}>
                            <DeleteForeverIcon onClick={() => { playlistDeleted(playlist._id) }} />
                            <Style.UserContainer onClick={() => { goToDetailPage(navigate, playlist._id) }} key={playlist._id}>
                                <Style.UserImage src={logo} alt="imagemPlaylist" />
                                <Style.UserInfo>
                                    <Style.UserTitle>{playlist._name}</Style.UserTitle>
                                    <Style.UserDescription>{playlist._description}</Style.UserDescription>
                                </Style.UserInfo>
                            </Style.UserContainer>
                        </div>
                    )) || <Loading/>
                }
            </Style.UserPlaylist>
        </>
    )
}

import { React, useState, useEffect } from "react";
import * as Style from "./Style"
import logo from "../../assets/logoHeader.png"
import { goBack, goToDetailPage } from "../../routes/Coordinator";
import { useNavigate } from "react-router-dom";
import styled from 'styled-components';
import { Loading } from "../loading/Loading";
import CloseIcon from '@mui/icons-material/Close';
import { useProtectedPage } from "../../hooks/useProtectedPage";



export const AddMusicByPlaylist = ({ musics, onConfirm, onCancel}) => {
    const navigate = useNavigate()
    const [selectedMusic, setSelectedMusic] = useState([])
    const [loading, setLoading] = useState(true)

    useProtectedPage()

    const verifyMusic = () => {
        setLoading(true)
        if(musics){
            setLoading(false)
        }
    }
    useEffect(()=>{
        verifyMusic()
    }, [])
    if(!loading){
        return (
            <Style.PopupContainer>
                    <Style.PopupContent className="music-list">
                        <Style.HeaderPopUp>
                        <Style.PopupTitle>Lista de músicas </Style.PopupTitle>
                        <CloseIcon onClick={onCancel}/>
                        </Style.HeaderPopUp>
                        <Style.PopupList>
                            {musics.map((song) => (
                                    <Style.PopupListItem key={song.id} onClick={() => setSelectedMusic(song.id)}>{song.title}</Style.PopupListItem>
                            ))}
                        </Style.PopupList>
                        <button onClick={() => {
                            onConfirm(selectedMusic)
                        }}>Confirmar</button>
                    </Style.PopupContent>
            </Style.PopupContainer>
        );
    }else{
        <Loading/>
    }
}
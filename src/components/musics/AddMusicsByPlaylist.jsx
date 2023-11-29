import { React, useState, useEffect } from "react";
import * as Style from "./Style"
import logo from "../../assets/logoHeader.png"
import { goBack, goToDetailPage } from "../../routes/Coordinator";
import { useNavigate } from "react-router-dom";
import styled from 'styled-components';
import { Loading } from "../loading/Loading";
import CloseIcon from '@mui/icons-material/Close';
import { useProtectedPage } from "../../hooks/useProtectedPage";
import { PopUpListItem } from "../popUpListItem/PopUpListItem";
import { addMusicForPLaylist } from "../../services/addMusicForPlaylist";
import { useParams } from "react-router-dom"
import { getMusicsFromUser } from "../../services/musics";


export const AddMusicByPlaylist = () => {
    const pathParams = useParams()
    const [selectedMusic, setSelectedMusic] = useState([])
    const [loading, setLoading] = useState(true)
    const [musicsForAdd, setMusicsForAdd] = useState({})

    useProtectedPage()
    const songSelected = (id) => {
        const idIsArray = selectedMusic.find( e => e === id );
        if(idIsArray){
            const newArray = selectedMusic.filter( e => e !== idIsArray );
            setSelectedMusic(newArray);
        }else{
            const newArray = [...selectedMusic, id];
            setSelectedMusic(newArray);
        }
    }
    const selected = (e)=>{
        if(e){
            return true
        }else{
            return false
        }
    }
    const onConfirm = async () => {
        try{
            const newMusicsFromPlaylist = []
            for (const id of selectedMusic) {
                newMusicsFromPlaylist.push(addMusicForPLaylist(pathParams.playlist, id))
            }
            const result = await Promise.all(newMusicsFromPlaylist)
            
        }catch(e){
            console.log("Erro ao adicionar musicas na playlist", e)
        }
       
    }





    const getMusicsForAdd = async () => {
        setLoading(true)
        const musics = await getMusicsFromUser()
        setMusicsForAdd(musics.data.songs)
        setLoading(false)
    }

    useEffect(()=>{
        getMusicsForAdd()
    }, [])
    if(!loading){
        return (
            <Style.PopupContainer>
                    <Style.PopupContent className="music-list">
                        <Style.HeaderPopUp>
                        <Style.PopupTitle>Lista de músicas </Style.PopupTitle>
                        <CloseIcon onClick={()=>{goBack()}}/>
                        </Style.HeaderPopUp>
                        <Style.PopupList>
                            {musicsForAdd.map((song) => (
                                <PopUpListItem key={song.id} id={song.id} title={song.title} event={songSelected} selected={selected}>teste</PopUpListItem>
                            ))}
                        </Style.PopupList>
                        <button onClick={() => {
                            onConfirm()
                        }}>Confirmar</button>
                    </Style.PopupContent>
            </Style.PopupContainer>
        );
    }else{
        <Loading/>
    }
}
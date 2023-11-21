import * as Style from "./Style";
import { useState, useEffect } from "react"
import logo from "../../assets/logoHeader.png"
import {goToFeed} from "../../routes/Coordinator"
import { useNavigate } from "react-router-dom";
export const AddPlaylist = () => {
    const [name, setName] = useState()
    const [description, setDescription] = useState()
    const navigate = useNavigate()

    const addName = (e) => {
        setName(e.target.value)
    }
    const addDescription = (e) => {
        setName(e.target.value)
    }
    const backFeed = ()=>{
        goToFeed(navigate)
    }
    const postNewPlaylist = (name, description) => {
        const newPlaylist = {
            name: name,
            description: description
        }
    }

    return (
        <Style.ContainerAddPlaylist>
            <Style.BackButtonAddPlaylist onClick={backFeed}>Voltar</Style.BackButtonAddPlaylist>
            <Style.FormAddPlaylist>
                <Style.LeftContentAddPlaylist>
                    <Style.TitleAddPlaylist>Adicionar PLaylist</Style.TitleAddPlaylist>
                    <Style.ImageAddPlaylist src={logo} alt="AddPlaylistImage" />
                </Style.LeftContentAddPlaylist>
                <Style.FormInputsAddPlaylist>
                    <Style.InputAddPlaylist type="text" placeholder="Nome" />
                    <Style.InputAddPlaylist type="text" placeholder="Descrição" />
                    <Style.ButtonAddPlaylist onClick={postNewPlaylist()}>Concluir</Style.ButtonAddPlaylist>
                </Style.FormInputsAddPlaylist>
            </Style.FormAddPlaylist>
        </Style.ContainerAddPlaylist>
    )
}
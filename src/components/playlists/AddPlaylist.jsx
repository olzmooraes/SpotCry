import * as Style from "./Style";
import { useState, useEffect } from "react"
import logo from "../../assets/logoHeader.png"
import { goToFeed, goToDetailPage } from "../../routes/Coordinator"
import { useNavigate } from "react-router-dom";
import { useProtectedPage } from "../../hooks/useProtectedPage";
import { v4 } from "uuid";
import { addPlaylist } from "../../services/addPlaylist";
import { Loading } from "../loading/Loading";
import {FeedPage} from "../../pages/FeedPage"

export const AddPlaylist = () => {
    const [name, setName] = useState()
    const [description, setDescription] = useState()
    const navigate = useNavigate()
    const [loading, setLoading] = useState(false)

    useProtectedPage()

    const addName = (e) => {
        setName(e.target.value)
    }
    const addDescription = (e) => {
        setDescription(e.target.value)
    }
    const backFeed = () => {
        goToFeed(navigate)
    }
    const postNewPlaylist = (name, description) => {
        setLoading(true)
        document.querySelector(".nome").value = ''
        document.querySelector(".descricao").value = ''
        try {
            const newPlaylist = {
                "id": `${v4()}`,
                "name": name,
                "description": description
            }
            addPlaylist(newPlaylist, navigate);
        } catch (e) {
            console.log("Erro ao adicionar playlist", e)
        }
        backFeed();
    }
    return (
        <>
            <FeedPage/>
            <Style.ContainerAddPlaylist>
                <Style.BackButtonAddPlaylist onClick={backFeed}>Voltar</Style.BackButtonAddPlaylist>
                <Style.FormAddPlaylist>
                    <Style.LeftContentAddPlaylist>
                        <Style.TitleAddPlaylist>Adicionar Playlist</Style.TitleAddPlaylist>
                        <Style.ImageAddPlaylist src={logo} alt="AddPlaylistImage" />
                    </Style.LeftContentAddPlaylist>
                    <Style.FormInputsAddPlaylist>
                        {
                            !loading && (
                                <>
                                    <Style.InputAddPlaylist type="text" className="nome" placeholder="Nome" onChange={(e) => { addName(e) }} />
                                    <Style.InputAddPlaylist type="text" className="descricao" placeholder="Descrição" onChange={(e) => { addDescription(e) }} />
                                    <Style.ButtonAddPlaylist onClick={() => { postNewPlaylist(name, description) }}>Concluir</Style.ButtonAddPlaylist>
                                </>
                            ) || <Loading/>
                        }

                    </Style.FormInputsAddPlaylist>
                </Style.FormAddPlaylist>
            </Style.ContainerAddPlaylist>
        </>
    )
}
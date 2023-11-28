import { React, useState, useEffect } from "react";
import * as Style from "./Style"
import logo from "../../assets/logoHeader.png"
import { goBack, goToDetailPage } from "../../routes/Coordinator";
import { useNavigate } from "react-router-dom";
import { useProtectedPage } from "../../hooks/useProtectedPage";

export const AddMusic = () => {
    const navigate = useNavigate()

    useProtectedPage()

    const backFeed = ()=>{
        goBack(navigate)
    }
    return (
        <>
            <Style.ContainerAddMusic>
                <Style.BackButtonAddMusic onClick={backFeed}>Voltar</Style.BackButtonAddMusic>
                <Style.FormAddMusic>
                    <Style.LeftContentAddMusic>
                        <Style.TitleAddMusic>Adicionar Song</Style.TitleAddMusic>
                        <Style.ImageAddMusic src={logo} alt="AddPlaylistImage" />
                    </Style.LeftContentAddMusic>
                    <Style.FormInputsAddMusic>
                        <Style.InputAddMusic type="text" placeholder="Nome" />
                        <Style.InputAddMusic type="text" placeholder="Descrição" />
                        <Style.ButtonAddMusic>Concluir</Style.ButtonAddMusic>
                    </Style.FormInputsAddMusic>
                </Style.FormAddMusic>
            </Style.ContainerAddMusic>
        </>
    )
}
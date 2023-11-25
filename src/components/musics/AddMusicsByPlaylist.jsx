import { React, useState, useEffect } from "react";
import * as Style from "./Style"
import logo from "../../assets/logoHeader.png"
import { goBack, goToDetailPage } from "../../routes/Coordinator";
import { useNavigate } from "react-router-dom";
import styled from 'styled-components';

export const AddMusicByPlaylist = ({ musics, onConfirm}) => {
    const navigate = useNavigate()
    const [isVisible, setIsVisible] = useState(true);
    const [selectedMusic, setSelectedMusic] = useState([])
    const backFeed = () => {
        goBack(navigate)
    }
    return (
        <div>
            {isVisible && (
                <div className="music-list">
                    <h2>Lista de músicas</h2>
                    <ul>
                        {musics.map((music) => (
                            <li key={music.id} onClick={() => setSelectedMusic(music.id)}>
                                {music.title}
                            </li>
                        ))}
                    </ul>
                    <button onClick={() => {
                        setIsVisible(false);
                        onConfirm(selectedMusic)
                    }}>Confirmar</button>
                </div>
            )}
        </div>
    );
}
AddMusicByPlaylist.show = () => {
    this.setState({ isVisible: true });
  };
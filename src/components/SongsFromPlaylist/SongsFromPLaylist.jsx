import { useState, useEffect } from "react";
import * as Style from "./Style"
import { useNavigate } from "react-router-dom";
import { goToFeed } from "../../routes/Coordinator";
import { Loading } from "../loading/Loading";

export const SongsFromPLaylist = (props) => {
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate()

    const fetchSongsFromPlaylist = () => {

        setLoading(false);
    }
    const feed = ()=>{
        goToFeed(navigate)
    }
    return (
        <>
            <button onClick={feed}>Voltar</button>
            <h1>{props.namePlaylist}</h1>
            <div>
                SONGS
            </div>
        </>
    )
}
import { useState, useEffect } from "react";
import * as Style from "./Style"
import { useNavigate } from "react-router-dom";
import { goToFeed } from "../../routes/Coordinator";
import { Loading } from "../loading/Loading";
import { AddCircle, AddCircleOutline } from '@mui/icons-material';

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
            <Style.BackButton onClick={feed}>Voltar</Style.BackButton>
            <Style.Container>
            <h1>{props.namePlaylist} <AddCircleOutline/></h1>
            <div>
                SONGS
            </div>
            </Style.Container>
        </>
    )
}
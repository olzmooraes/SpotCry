import { useEffect, useState, React } from "react";
import * as Style from "./Style"

export const ThumbNail = (props)=>{
    const [thumbnail, setThumbnail] = useState(true)

    const urlTrated = ()=>{
        const url = props.url
        const urlSplit = url.split('?v=')
            const id = urlSplit[1]?.split("&")[0]
            setThumbnail(id)
        }
    useEffect(()=>{
        urlTrated()
    },[])
    useEffect(()=>{
    }, [thumbnail])

    return(
        <>
                <Style.CardImage src={`https://img.youtube.com/vi/${thumbnail}/mqdefault.jpg`} alt={props.name}/>
        </>
    )
}
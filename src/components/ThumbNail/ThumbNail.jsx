import { useThumbnail } from "../../hooks/useThumbnail";
import { useState } from "react";
import * as Style from "./Style"

export const ThumbNail = (props)=>{
    const [thumbNail, setThumbNail] = useState()
    setThumbNail(useThumbnail(props.url))
    return(
        <>
            <Style.CardImage src={thumbNail} alt={props.name}/>
        </>
    )
}
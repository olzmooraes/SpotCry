import * as Style from './Style'
import { useState, useEffect } from 'react'


export const PopUpListItem = (props) =>{
    const [isSelected, setSelected] = useState(false)
    const selectedMusic = (e) =>{
        props.event(props.id)
        setSelected(props.selected(e))
    }
    return(
        <>
        {
            !isSelected && (<Style.PopupListItem onClick={()=>{selectedMusic(true)}}>{props.title}</Style.PopupListItem>)
            || (<Style.PopupListItemActived onClick={()=>{selectedMusic(false)}} >{props.title}</Style.PopupListItemActived>)
        } 
        </>
    )

}

import { useState } from "react";


export const useThumbnail = (url) => {
    const [thumbnail, setThumbnail] = useState()
    const urlSplit = url.split('?v=')
    const id = urlSplit[1].split("&")
    setThumbnail(id[0])

    return `https://img.youtube.com/vi/${thumbnail}/mqdefault.jpg`
}

import { Musics } from "../components/musics/Musics";
import { Playlists } from "../components/playlists/Playlists"
import { useProtectedPage } from "../hooks/useProtectedPage";
import * as Style from "./Styles/Styles"


export function FeedPage() {

  useProtectedPage()

  return (

    <Style.FeedContainer>
      <Playlists />
      <Musics />
    </Style.FeedContainer>
  )
}

export default FeedPage;

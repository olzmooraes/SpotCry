
import { Musics } from "../components/musics/Musics";
import { Playlists } from "../components/playlists/Playlists"
import * as Style from "./Styles/Styles"


export function FeedPage() {
  return (

    <Style.FeedContainer>
      <Playlists />
      <Musics />
    </Style.FeedContainer>
  )
}

export default FeedPage;

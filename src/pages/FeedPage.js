
import { useState } from "react";
import { Header } from "../components/Header/Header";
import { Loading } from "../components/loading/Loading";
import { Musics } from "../components/musics/Musics";
import { Playlists } from "../components/playlists/Playlists"
import { PlaylistByUser } from "../components/PlaylistByUser/PlaylistByUser";
import { useProtectedPage } from "../hooks/useProtectedPage";
import * as Style from "./Styles/Styles"
import LibraryMusicIcon from '@mui/icons-material/LibraryMusic';

export function FeedPage() {


  useProtectedPage()

  return (
    <>
          <Style.Feed>
            <Header />
            <Style.Main>
              <Style.MyPlaylist>
                <Style.Bibliary> <LibraryMusicIcon/> <h3>Biblioteca</h3> </Style.Bibliary>
                <PlaylistByUser />
              </Style.MyPlaylist>
              <Style.FeedContainer>
                  <Playlists />
                  <Musics />
              </Style.FeedContainer>
            </Style.Main>
          </Style.Feed>
    </>
  )
}

export default FeedPage;


import { useState } from "react";
import { Header } from "../components/Header/Header";
import { Loading } from "../components/loading/Loading";
import { Musics } from "../components/musics/Musics";
import { Playlists } from "../components/playlists/Playlists"
import { useProtectedPage } from "../hooks/useProtectedPage";
import * as Style from "./Styles/Styles"


export function FeedPage() {

  const protectedPage = useProtectedPage() || true;


  return (
    <>

      {
        protectedPage && (
          <>
            <Header />
            <Style.Main>
              <Style.MyPlaylist>
                MINHAS Playlists
              </Style.MyPlaylist>
              <Style.FeedContainer>
                  <Playlists />
                  <Musics />
              </Style.FeedContainer>
            </Style.Main>
          </>
        ) || <Loading />
      }
    </>
  )
}

export default FeedPage;

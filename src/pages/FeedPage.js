import React, { useState, useEffect } from "react";
import axios from "axios";
import { getPlaylistsFromUser } from "../services/playlist";
import { Loading } from "../components/loading/Loading";
import { Header } from "../components/Header/Header"
import { Footer } from "../components/Footer/Footer"
import { CardPlaylist } from "./Styles/Styles";
import { getMusicFromPlaylist } from "../services/musicFromPlaylist"

export function FeedPage() {
  const [playlists, setPlaylists] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchPlaylists();
  }, []);

  const fetchPlaylists = async () => {
    try {
      const response = await getPlaylistsFromUser();
      setPlaylists(response.data.playlists);
      setLoading(false)
    } catch (error) {
      console.error("Erro ao buscar playlists:", error);
    }
  };

  const getMusicPlaylist = async () => {
    const musicFromPlaylis = await getMusicFromPlaylist()

  }

  const feedPage = () => {
    if (!loading) {
      return (
        <div>
          <h1>My Playlist</h1>
          <ul>
            {Array.isArray(playlists) &&
              playlists.map((playlist, index) => (
                <CardPlaylist key={playlist._id}>{index + 1} {playlist._name} </CardPlaylist>
              ))}
          </ul>
        </div>
      );
    } else {
      return (<> <Loading /></>)
    }
  }
  return (
    <>
      {feedPage()}
    </>
  )
}

export default FeedPage;

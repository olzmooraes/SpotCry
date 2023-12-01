// routes/Router.js
import React from "react";
import { Route, Routes } from "react-router-dom";
import { HomePage } from "../pages/HomePage";
import { LoginPage } from "../pages/LoginPage";
import FeedPage from "../pages/FeedPage";
import { AddPlaylist } from "../components/playlists/AddPlaylist";
import { DetailPlaylist } from "../components/DetailPlaylist/DetailPlaylist";
import { AddMusic } from "../components/musics/AddMusics";
import { AddMusicByPlaylist } from "../components/musics/AddMusicsByPlaylist";
import { PlaylistByUser } from "../components/PlaylistByUser/PlaylistByUser";

const Router = () => (
  <Routes>
    <Route exact path="/" element={<HomePage />} />
    <Route exact path="/login" element={<LoginPage />} />
    <Route exact path="/addplaylist" element={<AddPlaylist />} />
    <Route exact path="/addsongs" element={<AddMusic />} />
    <Route exact path="/feed" element={<FeedPage />} />
    <Route exact path="/feed/myplaylist" element={<PlaylistByUser />} />
    <Route exact path="/DetailPlaylist/:playlist" element={<DetailPlaylist/>} />
    <Route exact path="/DetailPlaylist/:playlist/addMusics" element={<AddMusicByPlaylist/>} />
  </Routes>
);

export default Router;

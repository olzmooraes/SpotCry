// routes/Router.js
import React from "react";
import { Route, Routes } from "react-router-dom";
import { HomePage } from "../pages/HomePage";
import { LoginPage } from "../pages/LoginPage";
import FeedPage from "../pages/FeedPage";
import { AddPlaylist } from "../components/playlists/AddPlaylist";
import { DetailPlaylist } from "../components/DetailPlaylist/DetailPlaylist";
import { AddMusic } from "../components/musics/AddMusics";

const Router = () => (
  <Routes>
    <Route path="/" element={<HomePage />} />
    <Route path="/login" element={<LoginPage />} />
    <Route path="/addplaylist" element={<AddPlaylist />} />
    <Route path="/addsongs" element={<AddMusic />} />
    <Route path="/feed" element={<FeedPage />} />
    <Route path="/DetailPlaylist/:playlist" element={<DetailPlaylist/>} />
  </Routes>
);

export default Router;

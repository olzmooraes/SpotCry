// routes/Router.js
import React from "react";
import { Route, Routes } from "react-router-dom";
import { HomePage } from "../pages/HomePage";
import { LoginPage } from "../pages/LoginPage";
import FeedPage from "../pages/FeedPage";
import { AddPlaylist } from "../components/playlists/AddPlaylist";
import { SongsFromPLaylist } from "../components/SongsFromPlaylist/SongsFromPLaylist";

const Router = () => (
  <Routes>
    <Route path="/" element={<HomePage />} />
    <Route path="/login" element={<LoginPage />} />
    <Route path="/addplaylist" element={<AddPlaylist />} />
    <Route path="/feed" element={<FeedPage />} />
    <Route path="/SongsFromPLaylist" element={<SongsFromPLaylist/>} />
  </Routes>
);

export default Router;

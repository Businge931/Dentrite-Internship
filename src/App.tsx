import React from "react";
import Search from "./presentation/pages/Search";
import { Routes, Route } from "react-router-dom";
import {
  Dashboard,
  Login,
  Home,
  Playlists,
  Favourites,
} from "./presentation/pages";

function App() {
  return (
    <Routes>
      <Route element={<Login />} path="/" />
      <Route element={<Dashboard />} path="/my-music/*">
        <Route element={<Home />} path="*" />
        <Route element={<Playlists />} path="playlists" />
        <Route element={<Favourites />} path="favourites" />
        <Route element={<Search />} path="search" />
      </Route>
    </Routes>
  );
}

export default App;

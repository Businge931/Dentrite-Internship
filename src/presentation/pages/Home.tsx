import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  fetchSongList,
  MusicAppState,
} from "../../application/music/redux/MusicStore";
import { useFetching } from "../hooks/useFetching";
import Card from "../components/Card";

function Home() {
  useFetching(() => fetchSongList(20));

  const { isLoading, isError, songsList } = useSelector(
    (state: MusicAppState) => state
  );

  if (isLoading) {
    return <div>This is the loading scene</div>;
  }

  if (isError) {
    return <div>This is the bad scene</div>;
  }

  if (songsList.length < 1) {
    return <div>Has not loaded any songs scene</div>;
  }

  return (
    <div>
      <Card />
    </div>
  );
}

export default Home;

import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  fetchSongList,
  MusicAppState,
} from "../../application/music/redux/MusicStore";

function Card() {
  const { songsList } = useSelector((state: MusicAppState) => state);

  console.log(songsList[0]);

  return (
    <div style={{ height: "40px" }}>
      <img
        src="https://is5-ssl.mzstatic.com/image/thumb/Music122/v4/1b/38/ea/1b38eacd-158d-5040-8887-2786d2a641bc/192641874338_Cover.jpg/400x400cc.jpg"
        // className="img-thumbnail"
        alt="song image"
      />
      {/* <div className="card-body">
        <p className="card-text"> title and make up </p>
      </div> */}
    </div>
  );
}

export default Card;

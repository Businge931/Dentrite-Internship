import axios from "axios";
import { ServerFailure } from "../../domain/core/Failures";
import { IMusicFacade } from "../../domain/music/IMusicFacade";
import { Song } from "../../domain/music/ValueObjects";

type Images = {
  background: string;
  coverart: string;
  coverarthq: string;
  joecolor: string;
};

type Track = {
  layout: string;
  type: string;
  key: string;
  title: string;
  subtitle: string;
  images: Images;
  url: string;
};

type SimplifiedApiData = {
  tracks: Track[];
};

export class SpotifyApi implements IMusicFacade {
  fetchSongs = async (listSize: number) => {
    try {
      // usually such options would be in environment variables
      const options = {
        method: "GET",
        url: "https://shazam.p.rapidapi.com/charts/track",
        params: { locale: "en-US", pageSize: `${listSize}`, startFrom: "0" },
        headers: {
          "X-RapidAPI-Key":
            "c112b83e18msh06b2c9d44526d89p1c3bd2jsn2015a7c6493f",
          "X-RapidAPI-Host": "shazam.p.rapidapi.com"
        }
      };

      const response = await axios.request(options);
      if (response.data) {
        return this.extractSongData(response.data as SimplifiedApiData);
      }

      return new ServerFailure();
    } catch (error) {
      return new ServerFailure();
    }
  };

  extractSongData = (data: SimplifiedApiData): Song[] => {
    const songList = [];
    data.tracks.forEach((element) => {
      const song: Song = {
        id: element.key,
        title: element.title,
        artist: element.subtitle,
        album: "",
        releaseDate: new Date(),
        genre: "",
        url: element.url,
        coverArt:
          element.images?.coverarthq ||
          "https://images.pexels.com/photos/6123509/pexels-photo-6123509.jpeg"
      };

      songList.push(song);
    });

    console.log(songList);
    return songList;
  };
}

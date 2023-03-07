
export type Song = {
  id: string;
  title: string;
  artist: string;
  album: string;
  releaseDate: Date;
  genre: string;
  coverArt: string;
  url: string;
}

export type PlayList = {
  id: string,
  title: string,
  songs: string[],
  lastPlayed?: Date
}
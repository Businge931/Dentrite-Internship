import { ServerFailure } from "../core/Failures";
import { Song } from "./ValueObjects";

export interface IMusicFacade {
  fetchSongs: (listSize: number) => Promise<Song[] | ServerFailure>,
}
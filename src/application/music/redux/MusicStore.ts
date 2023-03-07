import { configureStore } from "@reduxjs/toolkit";
import { IMusicFacade } from "../../../domain/music/IMusicFacade";
import { PlayList, Song } from "../../../domain/music/ValueObjects";
import { FAVOURITE_PLAYLIST_ID } from "../constants/constants";
import {
  SET_LOADING_STATE,
  SET_SONGS_LIST,
  UPDATE_ERROR_STATE
} from "./Actions";
import { MusicAppReducer } from "./Reducers";

export type Filters = "title" | "artist" | "release_date";
export type MusicAppState = {
  songsList: Song[];
  activeFilters: Filters[];
  playLists: PlayList[];
  searchTerm: string;
  isLoading: boolean;
  isError: boolean;
};

export const initialState = {
  songsList: [],
  activeFilters: [],
  playLists: [
    {
      id: FAVOURITE_PLAYLIST_ID,
      title: "Favourites",
      songs: []
    }
  ],
  searchTerm: "",
  isLoading: false,
  isError: false
};

type InfraToStoreBridge = {
  _musicFacade: IMusicFacade | null;
};

const rootReducer = new MusicAppReducer().reducer();

export const rootStore = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false
    })
});

export type AppDispatch = typeof rootStore.dispatch;

export const connectInfraToStore: InfraToStoreBridge = {
  _musicFacade: null
};

export const fetchSongList = (listSize: number) => async (
  dispatch: AppDispatch
) => {
  dispatch(SET_LOADING_STATE(true));
  if (connectInfraToStore._musicFacade) {
    const result = await connectInfraToStore._musicFacade.fetchSongs(listSize);
    if (Array.isArray(result)) {
      dispatch(SET_SONGS_LIST(result));
    } else {
      // Handle server failure
      dispatch(UPDATE_ERROR_STATE(true));
    }
  } else {
    console.error("Has not initialised facade bridge");
    dispatch(UPDATE_ERROR_STATE(true));
  }
  dispatch(SET_LOADING_STATE(false));
};

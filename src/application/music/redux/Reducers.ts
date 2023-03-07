import { createReducer, PayloadAction } from "@reduxjs/toolkit";
import { PlayList, Song } from "../../../domain/music/ValueObjects";
import { FAVOURITE_PLAYLIST_ID } from "../constants/constants";
import {
  CREATE_PLAYLIST,
  DELETE_PLAYLIST,
  SET_SONGS_LIST,
  MAKE_FAVOURITE,
  REMOVE_FAVOURITE,
  RESET_SEARCH_FILTER,
  SET_ERROR_STATE,
  SET_LOADING_STATE,
  SET_SEARCH_FILTER,
  TOGGLE_FAVOURITE,
  UPDATE_SEARCH_TERM
} from "./Actions";
import { Filters, initialState, MusicAppState } from "./MusicStore";

export class MusicAppReducer {
  reducer = () => {
    return createReducer(initialState, (builder) => {
      builder.addCase(SET_SONGS_LIST, this.setSongsList);
      builder.addCase(MAKE_FAVOURITE, this.makeFavourite);
      builder.addCase(SET_SEARCH_FILTER, this.setSearchFilter);
      builder.addCase(RESET_SEARCH_FILTER, this.resetSearchFilter);
      builder.addCase(REMOVE_FAVOURITE, this.removeFavourite);
      builder.addCase(TOGGLE_FAVOURITE, this.toggleFavourite);
      builder.addCase(CREATE_PLAYLIST, this.createPlaylist);
      builder.addCase(DELETE_PLAYLIST, this.deletePlaylist);
      builder.addCase(UPDATE_SEARCH_TERM, this.updateSearchTerm);
      builder.addCase(SET_LOADING_STATE, this.setLoadingState);
      builder.addCase(SET_ERROR_STATE, this.updateErrorState);
    });
  };

  setSongsList = (state: MusicAppState, action: PayloadAction<Song[]>) => {
    state.songsList = action.payload;
  };

  makeFavourite = (state: MusicAppState, action: PayloadAction<string>) => {
    const songId = action.payload;
    const favouritePlaylist = state.playLists.find(
      (pl) => pl.id === FAVOURITE_PLAYLIST_ID
    );
    if (favouritePlaylist && !favouritePlaylist.songs.includes(songId)) {
      favouritePlaylist.songs.push(songId);
    }
  };

  setSearchFilter = (state: MusicAppState, action: PayloadAction<Filters>) => {
    state.activeFilters.push(action.payload);
  };

  resetSearchFilter = (state: MusicAppState) => {
    state.activeFilters = [];
  };

  removeFavourite = (state: MusicAppState, action: PayloadAction<string>) => {
    const songId = action.payload;
    const favouritePlaylist = state.playLists.find(
      (pl) => pl.id === FAVOURITE_PLAYLIST_ID
    );
    if (favouritePlaylist) {
      favouritePlaylist.songs = favouritePlaylist.songs.filter(
        (id) => id !== songId
      );
    }
  };

  toggleFavourite = (state: MusicAppState, action: PayloadAction<string>) => {
    const songId = action.payload;
    const favouritePlaylist = state.playLists.find(
      (pl) => pl.id === FAVOURITE_PLAYLIST_ID
    );
    if (favouritePlaylist) {
      if (favouritePlaylist.songs.includes(songId)) {
        favouritePlaylist.songs = favouritePlaylist.songs.filter(
          (id) => id !== songId
        );
      } else {
        favouritePlaylist.songs.push(songId);
      }
    }
  };

  createPlaylist = (state: MusicAppState, action: PayloadAction<PlayList>) => {
    const playlist = action.payload;
    if (playlist.id !== FAVOURITE_PLAYLIST_ID) {
      state.playLists.push(playlist);
    }
  };

  deletePlaylist = (state: MusicAppState, action: PayloadAction<string>) => {
    const playlistId = action.payload;
    if (playlistId !== FAVOURITE_PLAYLIST_ID) {
      state.playLists = state.playLists.filter((pl) => pl.id !== playlistId);
    }
  };

  updateSearchTerm = (state: MusicAppState, action: PayloadAction<string>) => {
    state.searchTerm = action.payload;
  };

  setLoadingState = (state: MusicAppState, action: PayloadAction<boolean>) => {
    state.isLoading = action.payload;
  };

  updateErrorState = (state: MusicAppState, action: PayloadAction<boolean>) => {
    state.isError = action.payload;
  };
}

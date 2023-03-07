import { createAction } from "@reduxjs/toolkit";
import { PlayList, Song } from "../../../domain/music/ValueObjects";
import { Filters } from "./MusicStore";

export const SET_SONGS_LIST = createAction<Song[]>("set_songs_list");
export const MAKE_FAVOURITE = createAction<string>("make_favourite");
export const SET_SEARCH_FILTER = createAction<Filters>("set_search_filter");
export const RESET_SEARCH_FILTER = createAction("reset_search_filter");
export const REMOVE_FAVOURITE = createAction<string>("remove_favourite");
export const TOGGLE_FAVOURITE = createAction<string>("toggle_favourite");
export const CREATE_PLAYLIST = createAction<PlayList>("create_playlist");
export const DELETE_PLAYLIST = createAction<string>("delete_playlist");
export const UPDATE_SEARCH_TERM = createAction<string>("update_search_term");
export const UPDATE_ERROR_STATE = createAction<boolean>("update_error_state");
export const SET_LOADING_STATE = createAction<boolean>("set_loading_state");
export const SET_ERROR_STATE = createAction<boolean>("set_error_state");

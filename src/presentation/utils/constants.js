import FavouritesIcon from "./Icons/FavouritesIcon";
import HomeIcon from "./Icons/HomeIcon";
import PlaylistIcon from "./Icons/PlaylistIcon";
import SearchIcon from "./Icons/SearchIcon";

export const menu = [
  { id: +1, name: "Home", path: "", Icon: <HomeIcon /> },
  { id: +2, name: "Search", path: "search", Icon: <SearchIcon /> },
  { id: +3, name: "Favourites", path: "favourites", Icon: <FavouritesIcon /> },
  { id: +4, name: "Playlists", path: "playlists", Icon: <PlaylistIcon /> },
];

import * as React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  rootStore,
  connectInfraToStore,
} from "./application/music/redux/MusicStore";
import "./styles.css";

import { SpotifyApi } from "./infrastructure/music/SpotifyApi";
// import "bootstrap";

connectInfraToStore._musicFacade = new SpotifyApi();

function Main() {
  return (
    <Provider store={rootStore}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  );
}

const rootElement = document.getElementById("root");
const root = createRoot(rootElement); // createRoot(container!) if you use TypeScript
root.render(<Main />);

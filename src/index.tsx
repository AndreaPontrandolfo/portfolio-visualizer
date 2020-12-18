import * as React from "react";
import ReactDOM from "react-dom";
import { StoreProvider } from "easy-peasy";
import { ColorModeScript } from "@chakra-ui/react";
import { App } from "./App";
import { store } from "./store";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(
  <React.StrictMode>
    <StoreProvider store={store}>
      <ColorModeScript />
      <App />
    </StoreProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorker.unregister();

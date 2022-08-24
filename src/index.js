import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import AppContextProvider from "./context/AppContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <ChakraProvider>
      <AppContextProvider>
        <React.StrictMode>
          <App />
        </React.StrictMode>
      </AppContextProvider>
    </ChakraProvider>
  </BrowserRouter>
);

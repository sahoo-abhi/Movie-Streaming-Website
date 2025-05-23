
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./index.css"
import { GenresProvider } from "./context/genres.context";
import { SearchProvider } from "./context/searchResult.context";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
    <SearchProvider>
      <GenresProvider>
         <App />
      </GenresProvider>
    </SearchProvider>  
    </BrowserRouter>
  </React.StrictMode>
);

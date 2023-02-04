import React from "react";

import Router from "./routes/Router";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { GlobalStyle } from "./GlobalStyle";
function App() {
  return (
    <>
      <GlobalStyle />
      <Router />
      <ReactQueryDevtools initialIsOpen={true} />
    </>
  );
}

export default App;

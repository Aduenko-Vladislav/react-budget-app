import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import { ExpenseContextProvider } from "./context/ExpenseContext/ExpenseContext";
import GlobalStyles from "./GlobalStyles";

const container = document.getElementById("root");
if (!container) {
  throw Error("error");
}
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <ExpenseContextProvider>
      <GlobalStyles />
      <App />
    </ExpenseContextProvider>
  </React.StrictMode>
);

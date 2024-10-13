import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Home from "./views/Home";
import Rutas from "./Rutas";
import ThemeProvider from "./Context";


createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ThemeProvider>
      <Rutas />
    </ThemeProvider>
  </StrictMode>
);

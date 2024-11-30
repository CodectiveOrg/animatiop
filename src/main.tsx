import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App.tsx";

import "@mantine/core/styles.css";
// import "@mantine/form/styles.css";
// import "@mantine/hooks/styles.css";
// import "@mantine/modals/styles.css";

import "./index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);

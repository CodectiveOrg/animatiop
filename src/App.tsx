import { BrowserRouter, Route, Routes } from "react-router";

import { createTheme, MantineProvider } from "@mantine/core";

import HomePage from "./pages/home/home.page.tsx";

import "./App.css";
import SearchPage from "./pages/search/search.page.tsx";

const theme = createTheme({});

function App() {
  return (
    <MantineProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route index element={<HomePage />} />
          <Route path="/search" element={<SearchPage />} />
        </Routes>
      </BrowserRouter>
    </MantineProvider>
  );
}

export default App;

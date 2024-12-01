import { BrowserRouter, Route, Routes } from "react-router";

import HomePage from "./pages/home/home.page.tsx";
import SearchPage from "./pages/search/search.page.tsx";

import HeaderComponent from "./components/header/header.component.tsx";

import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <HeaderComponent />
      <main>
        <Routes>
          <Route index element={<HomePage />} />
          <Route path="/search" element={<SearchPage />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;

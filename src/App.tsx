import { BrowserRouter, Route, Routes } from "react-router";

import {
  AppShell,
  Burger,
  createTheme,
  Group,
  MantineProvider,
  Text,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";

import HomePage from "./pages/home/home.page.tsx";
import SearchPage from "./pages/search/search.page.tsx";

import "./App.css";
import NavComponent from "./components/nav/nav.component.tsx";

const theme = createTheme({});

function App() {
  const [opened, { toggle }] = useDisclosure();

  return (
    <MantineProvider theme={theme}>
      <BrowserRouter>
        <AppShell
          header={{ height: 60 }}
          navbar={{
            width: 300,
            breakpoint: "sm",
            collapsed: { mobile: !opened },
          }}
          padding="md"
        >
          <AppShell.Header>
            <Group h="100%" px="md">
              <Burger
                opened={opened}
                onClick={toggle}
                hiddenFrom="sm"
                size="sm"
              />
              <Text size="xl" fw={700}>
                Animatiop
              </Text>
            </Group>
          </AppShell.Header>
          <AppShell.Navbar p="md">
            <NavComponent />
          </AppShell.Navbar>
          <AppShell.Main>
            <Routes>
              <Route index element={<HomePage />} />
              <Route path="/search" element={<SearchPage />} />
            </Routes>
          </AppShell.Main>
        </AppShell>
      </BrowserRouter>
    </MantineProvider>
  );
}

export default App;

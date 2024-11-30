import { createTheme, MantineProvider } from "@mantine/core";

import "./App.css";

const theme = createTheme({});

function App() {
  return (
    <MantineProvider theme={theme}>
      <h1>Hello, friend!</h1>
    </MantineProvider>
  );
}

export default App;

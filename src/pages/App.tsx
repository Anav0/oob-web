import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Landing from "./landing";
import ComponentsDemo from "./components";
import { theme } from "themes";
import { ThemeProvider } from "@mui/material";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/demo" element={<ComponentsDemo />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;

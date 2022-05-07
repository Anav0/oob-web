import { Route, Routes } from "react-router-dom";
import Landing from "./landing";
import ComponentsDemo from "./components";
import { theme } from "themes";
import { ThemeProvider } from "@mui/material";
import { ConflictSearchPage } from "./conflict-search-page";

function App() {
  return (
    <ThemeProvider theme={theme}>
      {" "}
      <div className="landing__dim" />
      <img
        src="https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/items/919640/88869b956ebd5f1679678f5ff04dc2bf54e0ff00.jpg"
        className="landing__bg"
        alt="nic"
      />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/demo" element={<ComponentsDemo />} />
        <Route path="/conflict/search" element={<ConflictSearchPage />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;

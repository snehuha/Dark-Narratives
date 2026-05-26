import { useState } from "react";
import Landing from "./components/Landing.jsx";
import Fantasy from "./components/Fantasy.jsx";
import Horror from "./components/Horror.jsx";
import Mystery from "./components/Mystery.jsx";
import Scifi from "./components/Scifi.jsx";
import SavedStories from "./components/SavedStories.jsx";
import "./index.css";

function App() {
  const [page, setPage] = useState("landing");

  const handleSelectGenre = (genre) => {
    if (genre === "Saved") {
  setPage("saved");
  }
    if (genre === "Fantasy") {
      setPage("fantasy");
    }
    if (genre === "Horror") {
      setPage("horror");
    }
    if (genre === "Mystery") {
      setPage("mystery");
    }
    if (genre === "Sci-fi") {
      setPage("scifi");
    }
    // you can add others later
  };

  return (
  <>
    {page === "landing" && (
      <Landing
     onSelectGenre={handleSelectGenre}
     onOpenSaved={() => setPage("saved")}
/>
    )}

    {page === "fantasy" && (
      <Fantasy onBack={() => setPage("landing")} />
    )}

    {page === "horror" && (
      <Horror onBack={() => setPage("landing")} />
    )}

    {page === "mystery" && (
      <Mystery onBack={() => setPage("landing")} />
    )}

    {page === "scifi" && (
      <Scifi onBack={() => setPage("landing")} />
    )}
    {page === "saved" && (
  <SavedStories onBack={() => setPage("landing")} />
    )}
  </>
);
}

export default App;
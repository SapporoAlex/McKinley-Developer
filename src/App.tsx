import "./assets/Reset.scss";
import "./assets/NavBar.scss";
import "./assets/Lottie.scss";
import "./App.css";
import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Immersive from "./immersive/Immersive";
import LoadingScreen from "./components/LoadingScreen";

// The original sections (KV, WorkHistory, GridTools, GridWorks, Contact, Footer)
// are replaced by the scroll-driven 3D tunnel in ./immersive. The old
// components are left in src/components for reference.
const App: React.FC = () => {
  const [loading, setLoading] = useState(true);

  return (
    <div className="App">
      {loading && <LoadingScreen onDone={() => setLoading(false)} />}
      <Navbar />
      <Immersive />
    </div>
  );
};

export default App;

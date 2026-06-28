import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Seminario from "./pages/Seminario";
import Podcast from "./pages/Podcast";
import Cases from "./pages/Cases";
import Storytelling from "./pages/Storytelling";

function App() {
  return (
    <Router>
      <Navbar />
      <main style={{ paddingTop: "70px", minHeight: "calc(100vh - 105px)" }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/seminario" element={<Seminario />} />
          <Route path="/podcast" element={<Podcast />} />
          <Route path="/cases" element={<Cases />} />
          <Route path="/storytelling" element={<Storytelling />} />
        </Routes>
      </main>
      <footer
        style={{
          textAlign: "center",
          padding: "40px",
          color: "var(--text-muted)",
          borderTop: "1px solid var(--border)",
        }}
      >
        <p>&copy; 2026 Seminário Acadêmico. Todos os direitos reservados.</p>
      </footer>
    </Router>
  );
}

export default App;

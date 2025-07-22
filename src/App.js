// App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import Home from "./pages/Home";
import Introduction from "./pages/Introduction";
import Variables from "./pages/Variables";
import Loops from "./pages/Loops";
import Identifier from "./pages/Identifier";
import Keyword from "./pages/Keyword";
import Datatype from "./pages/Datatypes";
import Constant from "./pages/Constant";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} /> {/* This loads first */}
        <Route path="/home" element={<Home />}>
          <Route path="introduction" element={<Introduction />} />
          <Route path="variables" element={<Variables />} />
          <Route path="loops" element={<Loops />} />
          <Route path="identifier" element={<Identifier />} />
        <Route path="keyword" element={<Keyword />} />
        <Route path="datatypes" element={<Datatype />} />
               <Route path="constant" element={<Constant />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;

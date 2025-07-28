import React from "react";
import { BrowserRouter as Router, Navigate, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import Home from "./pages/Home";
import Introduction from "./pages/Introduction";
import Variables from "./pages/Variables";
import Loops from "./pages/Loops";
import Identifier from "./pages/Identifier";
import Keyword from "./pages/Keyword";
import Datatype from "./pages/Datatypes";
import Constant from "./pages/Constant";
import PracticeQ from "./pages/PracticeQ";
import Expression from "./pages/Expression";
import Operator from "./pages/Operator";
import Assignment from "./pages/Assignment";
import Relational from "./pages/Relational";
import Logical from "./pages/Logical";
import Bitwise from "./pages/Bitwise";
import Otherop from "./pages/Otherop";
import Increment from "./pages/Increment";
import Partialcode from "./pages/Partialcode";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} /> {/* This loads first */}
        <Route path="/home" element={<Home />}>
          <Route index element={<Navigate to="introduction" replace />} />
          <Route path="introduction" element={<Introduction />} />
          <Route path="variables" element={<Variables />} />
          <Route path="loops" element={<Loops />} />
          <Route path="identifier" element={<Identifier />} />
          <Route path="keyword" element={<Keyword />} />
          <Route path="datatypes" element={<Datatype />} />
          <Route path="constant" element={<Constant />} />
          <Route path="practiceq" element={<PracticeQ />} />
          <Route path="operator" element={<Operator />} />
          <Route path="expression" element={<Expression />} />
          <Route path="assignment" element={<Assignment />} /> 
          <Route path="relational" element={<Relational />} />
       <Route path="logical" element={<Logical />} />
       <Route path="bitwise" element={<Bitwise />} />
       <Route path="otherop" element={<Otherop />} />
       <Route path="increment" element={<Increment />} />
        <Route path="partialcode" element={<Partialcode />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;

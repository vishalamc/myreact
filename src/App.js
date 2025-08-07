import React from "react";
import { BrowserRouter as Router, Navigate, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import Videolectures from "./pages/Videolectures"
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
import Controlstructure from "./pages/Controlstructure";
import CppComingSoon from "./pages/CppComingSoon";
import Ifelse from "./pages/Ifelse";
import Towerofhanoi from "./pages/Towerofhanoi";
import Gamedashboard from "./pages/Gamedashboard";
import Computerbuilder from "./pages/Computerbuilder";
import Codejumble from "./pages/Codejumbble";
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
         <Route path="controlstructure" element={<Controlstructure />} />
         <Route path="ifelse" element={<Ifelse />} />
        </Route>
         <Route path="videolectures" element={<Videolectures />} />
      <Route path="cppComingSoon" element={<CppComingSoon />} />
           <Route path="gamedashboard" element={<Gamedashboard />} />
           <Route path="/towerofhanoi" element={<Towerofhanoi numDisks={3} />} />
      <Route path="/computerbuilder" element={<Computerbuilder />} />
     <Route path="/codejumble" element={<Codejumble />} />
      </Routes>
      
    </Router>
  );
}

export default App;

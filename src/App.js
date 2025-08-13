import React from "react";
import ReactGA from "react-ga4";
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
import Myportfolio from "./pages/Myportfolio";
import Switchcase from "./pages/Switchcase";
import Jump from "./pages/Jump";
import Userdefine from "./pages/Userdefine";
import Predefine from "./pages/Predefine";
import Functionmcq from "./pages/Functionmcq";
import Recursive from "./pages/Recursive";
import Array from "./pages/Array";
import Arraymcq from "./pages/Arraymcq";
import Functionarry from "./pages/Functionarray";
import Arraytypes from "./pages/Arraytypes";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} /> 
          <Route path="/home" element={<Home />}>
          <Route index element={<Navigate to="introduction" replace />} />
          <Route path="introduction" element={<Introduction />} />
          <Route path="variables" element={<Variables />} />
          <Route path="userdefine" element={<Userdefine />} />
          <Route path="predefine" element={<Predefine />} />
          <Route path="functionmcq" element={<Functionmcq />} />
          <Route path="recursive" element={<Recursive />} />
          <Route path="array" element={<Array />} />
          <Route path="arraytypes" element={<Arraytypes />} />
          <Route path="functionarray" element={<Functionarry />} />
          <Route path="arraymcq" element={<Arraymcq />} />

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
          <Route path="switchcase" element={<Switchcase />} />
          <Route path="loops" element={<Loops />} />
          <Route path="jumpingstatements" element={<Jump />} />
          </Route>
         <Route path="videolectures" element={<Videolectures />} />
         <Route path="cppComingSoon" element={<CppComingSoon />} />
         <Route path="myportfolio" element={<Myportfolio />} />
         <Route path="gamedashboard" element={<Gamedashboard />} />
           <Route path="/towerofhanoi" element={<Towerofhanoi numDisks={3} />} />
           <Route path="/computerbuilder" element={<Computerbuilder />} />
           <Route path="/codejumble" element={<Codejumble />} />
         
        
         </Routes>
         
    </Router>
  );
}

export default App;

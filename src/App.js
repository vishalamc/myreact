import React from "react";

import { BrowserRouter as Router, Navigate, Routes, Route } from "react-router-dom";

import Header from "./components/Header"; // Make sure file name matches this import
import Footer from "./components/Footer";
import ContactCard from "./pages/ContactCard";
import AboutPage from "./pages/About-Project";
import ScrollToTop from "./components/ScrollToTop";
import ErrorBoundary from "./components/ErrorBoundary";


import HomePage from "./pages/HomePage";
import Videolectures from "./pages/Videolectures";

// About C pages
import LearnC from "./pages/about-c/LearnC";
import Introduction from "./pages/about-c/Introduction";
import Variables from "./pages/about-c/Variables";
import Loops from "./pages/about-c/Loops";
import Identifier from "./pages/about-c/Identifier";
import Keyword from "./pages/about-c/Keyword";
import Datatype from "./pages/about-c/Datatypes";
import Constant from "./pages/about-c/Constant";
import PracticeQ from "./pages/about-c/PracticeQ";
import Expression from "./pages/about-c/Expression";
import Operator from "./pages/about-c/Operator";
import Assignment from "./pages/about-c/Assignment";
import Relational from "./pages/about-c/Relational";
import Logical from "./pages/about-c/Logical";
import Bitwise from "./pages/about-c/Bitwise";
import Otherop from "./pages/about-c/Otherop";
import Increment from "./pages/about-c/Increment";
import Partialcode from "./pages/about-c/Partialcode";
import Controlstructure from "./pages/about-c/Controlstructure";
import Ifelse from "./pages/about-c/Ifelse";
import Switchcase from "./pages/about-c/Switchcase";
import Jump from "./pages/about-c/Jump";
import Userdefine from "./pages/about-c/Userdefine";
import Predefine from "./pages/about-c/Predefine";
import Functionmcq from "./pages/about-c/Functionmcq";
import Recursive from "./pages/about-c/Recursive";
import Array from "./pages/about-c/Array";
import Arraymcq from "./pages/about-c/Arraymcq";
import Functionarry from "./pages/about-c/Functionarray";
import Arraytypes from "./pages/about-c/Arraytypes";
import String from "./pages/about-c/String";
import Stringfunctions from "./pages/about-c/Stringfunctions";
import Chapter1 from "./pages/about-c/Chapter1";

// Games pages
import Towerofhanoi from "./pages/games/Towerofhanoi";
import Computerbuilder from "./pages/games/Computerbuilder";
import Codejumble from "./pages/games/Codejumble";

// Other pages
import ComingSoon from "./pages/ComingSoon";
import Gamedashboard from "./pages/Gamedashboard";
import Myportfolio from "./pages/Myportfolio";

function App() {
  return (
    <Router>
    <ErrorBoundary>
      <Header />
    <ScrollToTop />
      <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/learnc" element={<LearnC />}>
          <Route index element={<Navigate to="introduction" replace />} />
          <Route path="introduction" element={<Introduction />} />
          <Route path="variables" element={<Variables />} />
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
          <Route path="userdefine" element={<Userdefine />} />
          <Route path="predefine" element={<Predefine />} />
          <Route path="functionmcq" element={<Functionmcq />} />
          <Route path="recursive" element={<Recursive />} />
          <Route path="array" element={<Array />} />
          <Route path="arraytypes" element={<Arraytypes />} />
          <Route path="functionarray" element={<Functionarry />} />
          <Route path="arraymcq" element={<Arraymcq />} />
          <Route path="string" element={<String />} />
          <Route path="stringfunctions" element={<Stringfunctions />} />
          <Route path="chapter1" element={<Chapter1 />} />

       
        </Route>

        <Route path="/videolectures" element={<Videolectures />} />
        <Route path="/ComingSoon" element={<ComingSoon />} />
        <Route path="/myportfolio" element={<Myportfolio />} />
        <Route path="/gamedashboard" element={<Gamedashboard />} />

        <Route path="/contactcard" element={<ContactCard />} />
        <Route path="/about-project" element={<AboutPage />} />
        <Route path="/towerofhanoi" element={<Towerofhanoi numDisks={3} />} />
        <Route path="/computerbuilder" element={<Computerbuilder />} />
        <Route path="/codejumble" element={<Codejumble />} />
      </Routes>
      <Footer />
  </ErrorBoundary>
    </Router>
  );
}
export default App;

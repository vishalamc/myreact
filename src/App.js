import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Page1 from "./pages/page1";
import Page2 from "./pages/page2";

function App() {
  return (
    <Router>
      <div style={{ padding: 20 }}>
        <nav>
          <Link to="/page1" style={{ margin: 10 }}>Page 1</Link>
          <Link to="/page2" style={{ margin: 10 }}>Page 2</Link>
        </nav>

        <Routes>
          <Route path="/page1" element={<Page1 />} />
          <Route path="/page2" element={<Page2 />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

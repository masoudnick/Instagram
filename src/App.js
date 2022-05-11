import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { Header } from "./components";
import { Home } from "./pages";

function App() {
  return (
    <>
      <Router>
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </main>
      </Router>
    </>
  );
}

export default App;

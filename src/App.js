import { useState, useEffect, lazy, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { Header, Preloading } from "./components";
// import { Home, Direct } from "./pages";
import "./App.css";

const Home = lazy(() => import("./pages/home/home"));
const Direct = lazy(() => import("./pages/direct/direct"));
const queryClient = new QueryClient();

function App() {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    // setTimeout(() => {
    //   setIsLoading(false);
    // }, 0);
  }, []);
  return (
    <Router>
      <Header />
      <main className="bg-neutral-50">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/direct/inbox/" exact element={<Direct />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;

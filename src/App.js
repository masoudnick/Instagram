import { useState, useEffect, lazy, Suspense } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { Header, Footer, Preloading } from "./components";
import { PrivateRoutes } from "./routes/privateRoutes";
import { useAuth } from "./contexts/Auth";
// import { Home, Direct } from "./pages";
import "./App.scss";

const Home = lazy(() => import("./pages/home/home"));
const Direct = lazy(() => import("./pages/direct/direct"));
const Login = lazy(() => import("./pages/login/login"));
const Signup = lazy(() => import("./pages/signup/signup"));

function App() {
  const { user } = useAuth();
  return (
    <Suspense fallback={<Preloading />}>
      <Router>
        {user.loggedIn && <Header />}
        <main className="bg-neutral-50">
          <Routes>
            <Route element={<PrivateRoutes />}>
              <Route path="/" element={<Home />} />
              <Route path="/direct/inbox/" exact element={<Direct />} />
            </Route>
            <Route path="/accounts/login/" exact element={<Login />} />
            <Route path="/accounts/emailsignup/" exact element={<Signup />} />
          </Routes>
        </main>
        {!user.loggedIn && <Footer />}
      </Router>
    </Suspense>
  );
}

export default App;

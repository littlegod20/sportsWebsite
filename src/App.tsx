import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import { lazy } from "react";
import Home from "./pages/Home";

const Account = lazy(() => import("./pages/Account"));
const LiveNow = lazy(() => import("./pages/LiveNow"));
const MyBets = lazy(() => import("./pages/MyBets"));
const AllSports = lazy(() => import("./pages/AllSports"));

function App() {
  return (
    <main>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/allSports" element={<AllSports />} />
            <Route path="/myBets" element={<MyBets />} />
            <Route path="/liveNow" element={<LiveNow />} />
            <Route path="/account" element={<Account />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </main>
  );
}

export default App;

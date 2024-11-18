import "./App.css";
import AllSports from "./pages/AllSports";
import Home from "./pages/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MyBets from "./pages/MyBets";
import LiveNow from "./pages/LiveNow";
import Account from "./pages/Account";
import Layout from "./Layout";

function App() {
  return (
    <main>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout/>}>

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

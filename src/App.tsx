import { Route, Routes } from "react-router-dom";
import Home from "./modules/home/pages/Home";
import Signup from "./modules/auth/page/Signup";
import Play from "./modules/v1Contests/page/play";
import Allcontest from "./modules/v1Contests/page/allContests/allcontest";
import "./App.css";
import Login from "./modules/auth/page/Login";
import ResizableSections from "./test";
import Match from "./modules/v1Contests/page/match";

function App() {
  return (
    <Routes>
      <Route path={"/"} element={<Home />} />
      <Route path={"/signup"} element={<Signup />} />
      <Route path={"/login"} element={<Login />} />
      <Route path={"/play/1v1/:sessionId"} element={<Play />} />
      <Route path={"/play/match"} element={<Match />} />
      <Route path={"/1v1/contests"} element={<Allcontest />} />
      {/* <Route path={"/test"} element={<ResizableSections />} /> */}
    </Routes>
  );
}

export default App;

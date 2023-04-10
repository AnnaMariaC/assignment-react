import { Routes, Route } from "react-router-dom";
import { Home, Signin, Signup } from "../../features";
import { Nav, NotFound } from "../";
import "./App.css";

export function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/post" element={<h1>Post zone</h1>} />
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </>
  );
}

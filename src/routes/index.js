import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "../Pages/Login";
import Home from "../Pages/Home";

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Home />} path="/" />
        <Route element={<Login />} path="/login" />
      </Routes>
    </BrowserRouter>
  );
}

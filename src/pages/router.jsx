import { Routes, Route } from "react-router-dom";

import MainApp from "layouts/MainApp";

import Home from "pages/home";
import Committes from "pages/committes";
import SignUp from "pages/register/sign-up";
import Login from "pages/register/login";

export default function Router() {
  return (
    <Routes>
      <Route element={<MainApp />}>
        <Route path="/" element={<Home />} />
        <Route path="/committes" element={<Committes />} />
        <Route path="/login" element={<Login />} />
        <Route path="/sign-up" element={<SignUp />} />
      </Route>
    </Routes>
  );
}

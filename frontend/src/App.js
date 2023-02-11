import React from "react";
import "./App.scss";
import { BrowserRouter, Routes, Route,useNavigate,useLocation } from "react-router-dom";
import Header from "./components/Header/Header";
import Login from "./pages/Login/Login";
import Signup from "./pages/Login/Signup";
import PageNotFound from "./pages/PageNotFound";
import Home from "./pages/Home/Home";
import WithNav from "./components/Layouts/WithNav";
import WithoutNav from "./components/Layouts/WithoutNav";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css'
import PrivateRoute from "./components/PrivateRoute";
import {history} from "./helpers/history"
function App() {
  history.navigate = useNavigate();
  history.location = useLocation();
  return (
    <>
      <Routes>
        <Route element={<WithoutNav />}>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Route>
        <Route element={<WithNav />}>
          <Route exact path="/" element={<PrivateRoute><Home /></PrivateRoute>} />
        </Route>
      </Routes>
      <ToastContainer/>
    </>
  );
}

export default App;

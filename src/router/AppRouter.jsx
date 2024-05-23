import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Register from "../pages/Register";
import Login from "../pages/Login";
import Navbar from "../components/Navbar";
import PrivateRouter from "./PrivateRouter";
import MovieDetail from "../pages/MovieDetail";
import Main from "../pages/Main";
import AuthProvider from "../context/AuthProvider";
import { ToastContainer } from "react-toastify";
import MovieProvider from "../context/MovieProvider";
const AppRouter = () => {
  return (
    <BrowserRouter>
      <AuthProvider>
        <MovieProvider>
          <Navbar />
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="details/:id" element={<PrivateRouter />}>
              <Route path="" element={<MovieDetail />} />
            </Route>
          </Routes>
        </MovieProvider>
      </AuthProvider>
      <ToastContainer />
    </BrowserRouter>
  );
};

export default AppRouter;

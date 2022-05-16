import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import About from "../pages/About";
import PostIdPage from "../pages/PostIdPage";
import Posts from "../pages/Posts";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Posts />} />
      <Route path="/about" element={<About />} />
      <Route path="/post" element={<PostIdPage />} />
      {/* <Route path="*" element={<Navigate replace to="/" />} /> */}
    </Routes>
  );
};

export default AppRouter;

import React from "react";
import Navbar from "./components/navbar";
import Registration from "./components/regist";
import Login from "./components/login";
import Checkbox from "./components/chekbox";
import "antd/dist/antd.css";
import "./App.css";
import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import Todo from "./components/todo";
import PrivateRoute from "./components/navigate";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/registration" element={<Registration />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/"
          element={
            <PrivateRoute>
              <Todo />
            </PrivateRoute>
          }
        />
      </Routes>
    </div>
  );
}

export default App;

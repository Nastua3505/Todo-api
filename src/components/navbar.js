import React from "react";
import { Layout } from "antd";
import { NavLink } from "react-router-dom";

const { Header } = Layout;
const Navbar = () => {
  return (
    <Layout>
      <Header>
        <NavLink to="/registration">Зарегистрироваться</NavLink>
        <NavLink to="/login">Войти</NavLink> <NavLink to="/todo">Todo</NavLink>
      </Header>
    </Layout>
  );
};

export default Navbar;

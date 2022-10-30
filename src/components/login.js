import React from "react";
import "antd/dist/antd.css";
import { Input, Form } from "antd";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  let navigate = useNavigate();

  const isAuth = () => {
    const ls = localStorage.getItem("token");
    if (ls) {
      return true;
    } else {
      return false;
    }
  };

  const hendleClick = (e) => {
    e.preventDefault();
    handle();
  };

  const handle = async () => {
    const res = await fetch(
      "https://first-node-js-app-r.herokuapp.com/api/auth/login",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: email,
          password: password,
        }),
      }
    );

    const data = await res.json();
    localStorage.setItem("token", data.token);
    navigate(`/`);

    console.log(data);
  };
  return (
    <div className="registration">
      <div className="registartion_header">
        <Form name="basic" labelCol={{ span: 3 }} wrapperCol={{ span: 5 }}>
          <Input
            value={email}
            setValue={setEmail}
            type="email"
            placeholder="Email "
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input
            label="Username"
            value={password}
            setValue={setPassword}
            type="password"
            placeholder="Пороль"
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="primary" onClick={(e) => hendleClick(e)}>
            Войти
          </button>
        </Form>
      </div>
    </div>
  );
};
export default Login;

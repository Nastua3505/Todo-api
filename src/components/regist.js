import React from "react";
import "antd/dist/antd.css";
import { Input } from "antd";

const Registration = () => {
  const [names, setNames] = React.useState("");
  const [userName, setUserName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [isMan, setIsMan] = React.useState(false);
  const [age, setAge] = React.useState(0);

  const hendleClick = (e) => {
    e.preventDefault();
    handle();
  };

  const handle = async () => {
    const res = await fetch(
      "https://first-node-js-app-r.herokuapp.com/api/users/register",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: names,
          username: userName,
          email: email,
          password: password,
          isMan: isMan,
          age: age,
        }),
      }
    );
  };
  return (
    <div className="registration">
      <div className="registartion_header">
        <Input
          value={names}
          setValue={setNames}
          type="text"
          placeholder="Имя"
          onChange={(e) => setNames(e.target.value)}
        />

        <Input
          value={userName}
          setValue={setUserName}
          type="text"
          placeholder="Фамилия"
          onChange={(e) => setUserName(e.target.value)}
        />
        <Input
          value={email}
          setValue={setEmail}
          type="email"
          placeholder="Email "
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          value={password}
          setValue={setPassword}
          type="password"
          placeholder="Пороль"
          onChange={(e) => setPassword(e.target.value)}
        />
        <Input
          value={isMan}
          setValue={setIsMan}
          type="text"
          placeholder="isMan "
          onChange={(e) => setIsMan(e.target.value)}
        />
        <Input
          value={age}
          setValue={setAge}
          type="number"
          placeholder="Возраст "
          onChange={(e) => setAge(e.target.value)}
        />
        <button block type="primary" onClick={(e) => hendleClick(e)}>
          Зарегистрироваться
        </button>
      </div>
    </div>
  );
};

export default Registration;

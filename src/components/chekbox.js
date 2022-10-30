import React from "react";

const Checkbox = ({ item }) => {
  const token = localStorage.getItem("token");

  const Box = (item) => {
    check(item);
  };

  const check = async (item) => {
    const res = await fetch(
      `https://first-node-js-app-r.herokuapp.com/api/todos/63460d72bf56cb381a9eb823/isCompleted${item}`,
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );
    const check = await res.json();
  };

  return (
    <div>
      <input onClick={() => Box(item)} type="checkbox"></input>
    </div>
  );
};
export default Checkbox;

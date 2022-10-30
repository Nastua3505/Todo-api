import React, { useEffect, useState } from "react";
import Edit from "./edit";
import { Button, Checkbox } from "antd";
import "antd/dist/antd.css";

function Tasks() {
  const [tasks, setTasks] = useState([]);

  const token = localStorage.getItem("token");

  useEffect(() => {
    async function fetchData() {
      const res = await fetch(
        "https://first-node-js-app-r.herokuapp.com/api/todos",
        {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      const data = await res.json();
      console.log(data);

      setTasks(data);
    }
    fetchData();
  }, []);

  const Delete = async (item) => {
    const res = await fetch(
      `https://first-node-js-app-r.herokuapp.com/api/todos/${item.ID}`,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );
    const data = await res.json();
  };

  return (
    <div className="add_task">
      {tasks.map((item) => (
        <div key={item.ID}>
          <div className="task_edit">
            <Edit item={item} token={token} />
          </div>
          <Button onClick={() => Delete(item)}>delete</Button>
        </div>
      ))}
    </div>
  );
}

export default Tasks;

import Input from "./input";
import React, { useEffect } from "react";
import Tasks from "../components/task";
import Checkbox from "./chekbox";
function App() {
  const [tasks, setTasks] = React.useState("");
  const token = localStorage.getItem("token");

  const post = async () => {
    const res = await fetch(
      "https://first-node-js-app-r.herokuapp.com/api/todos",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          title: tasks,
        }),
      }
    );
    const data = await res.json();
    console.log(data);
  };

  const Click = (e) => {
    e.preventDefault();
    post();
  };

  return (
    <div className="App">
      <div className="App_todo">
        <h1>What's the plan for Today </h1>
        <div className="addTo">
          <Input
            value={tasks}
            setValue={setTasks}
            type="text"
            placeholder="text "
            onChange={(e) => setTasks(e.target.value)}
          />
          <button type="primary" onClick={(e) => Click(e)}>
            Add Todo
          </button>
        </div>
        <Tasks />
      </div>
    </div>
  );
}
export default App;

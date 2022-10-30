import React from "react";
import "antd/dist/antd.css";
import Checkbox from "./chekbox";
import { Button, Input } from "antd";

const Edit = ({ item, token }) => {
  const [isEdit, setIsEdit] = React.useState();
  const [text, setText] = React.useState(item.title);

  const Click = (item) => {
    if (isEdit) {
      setIsEdit(!isEdit);
    } else {
      setIsEdit(!isEdit);
    }
  };

  const preservation = () => {
    save(item);
  };

  const save = async (item) => {
    const res = await fetch(
      `https://first-node-js-app-r.herokuapp.com/api/todos/${item.ID}`,
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          title: text,
        }),
      }
    );
    const data = await res.json();
  };

  return (
    <div className="editTo">
      {isEdit ? (
        <Input onChange={(e) => setText(e.target.value)} value={text} />
      ) : (
        <p className="task">{item.title}</p>
      )}
      <div className="btnTo">
        <button onClick={() => Click(item)}>
          {isEdit ? (
            <Button onClick={() => preservation(item)}> save </Button>
          ) : (
            "edit"
          )}{" "}
        </button>
        <Checkbox />
      </div>
    </div>
  );
};

export default Edit;

import React from "react";
import { useState, useEffect, useRef } from "react";
import axios from "axios";
import { RiGenderlessFill } from "react-icons/ri";

const Todolist = (props) => {
  const [task, setTask] = useState("");
  const [tasklist, setTatskList] = useState([]);

  const handleChange = (e) => {
    setTask(e.target.value);
  };
  useEffect(() => {
    getTaskList();
  });

  const getTaskList = () => {
    axios.get("http://localhost:3004/tasks").then((response) => {
      setTatskList(response.data);
    });
  };

  const onSubmitClick = () => {
    axios.post("http://localhost:3004/addTask", { input: task });
    getTaskList();
    setTask("");
  };

  const onDeleteClick = (id) => {
    axios.delete("http://localhost:3004/deleteTask/" + id);
    getTaskList();
  };

  return (
    <div>
      <h3>tasklist</h3>
      <div className="ui input">
        <input value={task} onChange={handleChange} placeholder="your task" />
      </div>
      <button className="ui primary button basic" onClick={onSubmitClick}>
        Submit
      </button>
      <hr />
      <div className="ui cards">
        {tasklist.map((task) => (
          <div className="card">
            <div className="content">
              <div className="meta">{task.tasks}</div>
              <div className="extra content">
                <div className="ui two buttons">
                  <button className="ui basic green button">Edit</button>
                  <button
                    className="ui basic red button"
                    onClick={() => {
                      onDeleteClick(task.id);
                    }}
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Todolist;

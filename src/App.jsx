import { useState } from "react";
import "./App.css";

function App() {
  const [task, setTask] = useState("");
  const [data, setData] = useState([]);

  const changeHandler = (e) => {
    setTask(e.target.value);
  };

  const addTask = () => {
    if (task.trim() === "") {
      return;
    }

    const newTask = {
      task: task,
      id: data.length + 1,
      checked: false,
    };

    setData([...data, newTask]);
    setTask("");
  };

  const handleCheckboxChange = (id) => {
    setData(
      data.map((item) =>
        item.id === id ? { ...item, checked: !item.checked } : item
      )
    );
  };

  const Takeup = ({ id, task, checked }) => {
    return (
      <div className="task-container">
        <input
          type="checkbox"
          className="check"
          checked={checked}
          onChange={() => handleCheckboxChange(id)}
        />
        <div className={`taskk ${checked ? "checked" : ""}`}>{task}</div>
      </div>
    );
  };
  const onkey = (e) => {
    if (e.key == 'Enter')
       addTask();
  };

  return (
    <>
      <div className="adding">
        <input
          type="text"
          value={task}
          name="task"
          onChange={changeHandler}
          onKeyDown={onkey}
          placeholder="Enter the task"
        />
        <button type="button" className="add" onClick={addTask}>
          Add Task
        </button>
      </div>
      <div className="Schd">Scheduled Tasks</div>
      <div className="list">
        {data.map((item) => (
          <Takeup
            key={item.id}
            id={item.id}
            task={item.task}
            checked={item.checked}
          />
        ))}
      </div>
    </>
  );
}

export default App;

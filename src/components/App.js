import React from "react";
import LoginForm from "./Login";
import TaskHeader from "./TaskHeader";
import Task from "./Task";
import tasks from "../tasks";
import TaskPage from "./TaskPage";

function App() {
  return (
    <div>
      <h1>App name</h1>
      <LoginForm />
      <TaskHeader />
      <Task task={tasks[0]} />
      <Task task={tasks[1]} />
      <Task task={tasks[2]} />
      <TaskPage task={tasks[0]} />
      <TaskPage task={tasks[2]} />
    </div>
  );
}

export default App;

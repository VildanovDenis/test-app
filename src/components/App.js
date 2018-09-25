import React from "react";
import LoginForm from "./Login/Login";
import TaskPage from "./TaskPage/TaskPage";
import TaskList from "./TaskList/TaskList";

function App() {
  return (
    <div>
      <LoginForm />
      <TaskList />
      <TaskPage />
    </div>
  );
}

export default App;

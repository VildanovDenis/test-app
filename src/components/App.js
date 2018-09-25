import React from "react";
import LoginForm from "./Login";
import TaskPage from "./TaskPage";
import TaskList from "./TaskList";

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

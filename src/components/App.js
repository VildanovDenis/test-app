import React from "react";
import LoginForm from "./Login/Login";
import TaskPage from "./TaskPage/TaskPage";
import TaskList from "./TaskList/TaskList";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isLogin: false };
  }

  render() {
    const { isLogin } = this.state;

    return (
      <div>
        {isLogin ? (
          <React.Fragment>
            <TaskList />
            <TaskPage />
          </React.Fragment>
        ) : (
          <LoginForm />
        )}
      </div>
    );
  }
}

export default App;

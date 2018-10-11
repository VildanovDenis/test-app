import React from "react";
import ScrumTask from "./ScrumTask";

class DoneColumn extends React.Component {
  render() {
    const doneTasks = this.props.tasks
      .filter(task => task.status === "Готово")
      .map(task => (
        <ScrumTask
          key={task.name}
          task={task}
          handleDrop={id => this.changeStatusTask(id)}
        />
      ));
    return (
      <div className="done">
        <h2>Готово</h2>
        {doneTasks}
      </div>
    );
  }
}

export default DoneColumn;

import React from "react";
import tasks from "../../tasks";
import "../Scrum/style.css";

const ScrumTask = props => {
  const { task } = props;
  return (
    <div className="scrum-task-page">
      <span>Задача: {task.name}</span>
      <span>Описание: {task.description}</span>
      <span>Приоритет: {task.priority}</span>
    </div>
  );
};

class ScrumTable extends React.Component {
  // static filter = {
  //   status: "status"
  // };

  constructor(props) {
    super(props);
  }

  render() {
    const ScrumTaskElement = tasks.map(task => (
      <ScrumTask key={task.name} task={task} />
    ));
    const doneTasks = tasks
      .filter(task => task.status === "Готово")
      .map(task => <ScrumTask key={task.name} task={task} />);
    const progressTasks = tasks
      .filter(task => task.status === "В процессе")
      .map(task => <ScrumTask key={task.name} task={task} />);
    const plannedTasks = tasks
      .filter(task => task.status === "План")
      .map(task => <ScrumTask key={task.name} task={task} />);
    return (
      <section className="scrum-table__wrapper">
        <div className="button-wrapper">
          <a
            className="scrum-table__button"
            onClick={event => {
              event.preventDefault();
              this.props.toggleTable(false);
            }}
            type="button"
            href=""
          >
            Назад к таблице
          </a>
        </div>
        <div className="done">
          <h2>Готово</h2>
          {doneTasks}
        </div>
        <div className="in-progress">
          <h2>В процессе</h2>
          {progressTasks}
        </div>
        <div className="planned">
          <h2>План</h2>
          {plannedTasks}
        </div>
      </section>
    );
  }
}

export default ScrumTable;

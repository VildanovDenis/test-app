import React from "react";
import tasks from "../../tasks";
import "../TaskPage/style.css";

// Подробная страница с задачей

const Task = props => {
  const { task } = props;
  return (
    <div className="task-page">
      <h1>{task.name}</h1>
      <p>{task.description}</p>
      <p>{task.date}</p>
      <p>
        <span className="task-page__state">Приоритет: {task.priority}</span>
        <span className="task-page__state">Статус: {task.status}</span>
      </p>
      <p>
        <span className="task-page__time">
          Планируемое время: {task.timetodo}
        </span>
        <span className="task-page__time">
          Затраченное время: {task.wastedtime}
        </span>
      </p>
    </div>
  );
};

export default function TaskPage({ task }) {
  const TaskPageElement = tasks.map(task => (
    <Task key={task.name} task={task} />
  ));
  return <section>{TaskPageElement}</section>;
}

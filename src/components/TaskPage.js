import React from "react";
import tasks from "../tasks";

// Подробная страница с задачей

const Task = props => {
  const { task } = props;
  return (
    <div>
      <h1>{task.name}</h1>
      <p>{task.description}</p>
      <p>{task.date}</p>
      <p>
        <span>Приоритет: {task.priority}</span>
        <span>Статус: {task.status}</span>
      </p>
      <p>
        <span>Планируемое время: {task.timetodo}</span>
        <span>Затраченное время: {task.wastedtime}</span>
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

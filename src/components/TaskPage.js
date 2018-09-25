import React from "react";

function TaskPage(props) {
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
}

export default TaskPage;

import React from "react";
import "../TaskPage/style.css";

// Подробная страница с задачей
function TaskPage({ onButtonClick, task }) {
  return (
    <div className="task-page">
      <button
        type="button"
        className="task-page__button"
        onClick={() => onButtonClick(null)}
      />
      <h1>{task.name}</h1>
      <p>{task.description}</p>
      <p>Дата появления задачи: {task.date}</p>
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
}
export default TaskPage;

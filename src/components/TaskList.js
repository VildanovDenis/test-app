import React from "react";
import tasks from "../tasks";

// Таблица задач

const Task = props => {
  const { task } = props;
  return (
    <tr>
      <td>
        <a href="">{task.name}</a>
      </td>
      <td>{task.description}</td>
      <td>{task.status}</td>
      <td>{task.priority}</td>
    </tr>
  );
};

export default function TaskList({ task }) {
  const TaskElement = tasks.map(task => <Task key={task.name} task={task} />);
  return (
    <div>
      <table>
        <tbody key="body">
          <tr>
            <th>Задача</th>
            <th>Описание задачи</th>
            <th>Статус</th>
            <th>Приоритет</th>
          </tr>
          {TaskElement}
        </tbody>
      </table>
    </div>
  );
}
import React from "react";

function TaskHeader() {
  return (
    <div>
      <table>
        <tbody>
          <tr>
            <th>Задача</th>
            <th>Описание задачи</th>
            <th>Статус</th>
            <th>Приоритет</th>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default TaskHeader;

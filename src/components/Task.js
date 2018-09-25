import React from "react";

function Task(props) {
  const { task } = props;
  return (
    <div>
      <table>
        <tbody>
          <tr>
            <td>
              <a href="">{task.name}</a>
            </td>
            <td>{task.description}</td>
            <td>{task.status}</td>
            <td>{task.priority}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Task;

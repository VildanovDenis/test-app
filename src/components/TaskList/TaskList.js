import React from "react";
import tasks from "../../tasks";
import "../TaskList/style.css";

// class TaskLink extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = { isOpen: false };
//     this.handleClick = this.handleClick.bind(this);
//   }

//   handleClick() {
//     this.setState(prevState => ({
//       isOpen: !prevState.isOpen
//     }));
//   }

//   render({ task }) {
//     return <a href="">{task.name}</a>;
//   }
// }

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

class TaskList extends React.Component {
  static filters = {
    task: "task",
    description: "description",
    status: "status",
    priority: "priority"
  };

  constructor(props) {
    super(props);
    this.state = {
      currentFilter: TaskList.filters.task,
      isFilterReverse: false
    };
  }

  filterTasks(tasks) {
    switch (this.state.currentFilter) {
      case TaskList.filters.description: {
        const sortedTasks = tasks.sort((a, b) => {
          return a.description > b.description;
        });
        if (this.state.isFilterReverse) {
          return sortedTasks.reverse();
        }
        return sortedTasks;
      }
      case TaskList.filters.status: {
        const sortedTasks = tasks.sort((a, b) => {
          return a.status > b.status;
        });
        if (this.state.isFilterReverse) {
          return sortedTasks.reverse();
        }
        return sortedTasks;
      }
      case TaskList.filters.task: {
        const sortedTasks = tasks.sort((a, b) => {
          return a.name > b.name;
        });
        if (this.state.isFilterReverse) {
          return sortedTasks.reverse();
        }
        return sortedTasks;
      }
      case TaskList.filters.priority: {
        const sortedTasks = tasks.sort((a, b) => {
          return a.priority > b.priority;
        });
        if (this.state.isFilterReverse) {
          return sortedTasks.reverse();
        }
        return sortedTasks;
      }
      default:
        return tasks;
    }
  }

  onFilterClick(filterName) {
    // debugger;
    this.setState({
      currentFilter: filterName,
      isFilterReverse:
        this.state.currentFilter === filterName
          ? !this.state.isFilterReverse
          : false
    });
  }

  render() {
    const TaskElement = this.filterTasks(tasks).map(task => (
      <Task key={task.name} task={task} />
    ));
    return (
      <section>
        <table className="task-table">
          <tbody key="body">
            <tr>
              <th>
                <button
                  onClick={() => this.onFilterClick(TaskList.filters.task)}
                  className="task-table__button"
                  type="button"
                >
                  Задача
                </button>
              </th>
              <th>
                <button
                  onClick={() =>
                    this.onFilterClick(TaskList.filters.description)
                  }
                  className="task-table__button"
                  type="button"
                >
                  Описание задачи
                </button>
              </th>
              <th>
                <button
                  onClick={() => this.onFilterClick(TaskList.filters.status)}
                  className="task-table__button"
                  type="button"
                >
                  Статус
                </button>
              </th>
              <th>
                <button
                  onClick={() => this.onFilterClick(TaskList.filters.priority)}
                  className="task-table__button"
                  type="button"
                >
                  Приоритет
                </button>
              </th>
            </tr>
            {TaskElement}
          </tbody>
        </table>
      </section>
    );
  }
}

export default TaskList;

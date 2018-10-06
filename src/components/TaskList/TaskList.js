import React from "react";
import TaskPage from "../TaskPage/TaskPage";
import TaskAdd from "../TaskAdd/TaskAdd";

import { tableRenderScrum } from "../../store/actions/table-render-action";
import { getTasksAsArray } from "../../store/reducers/tasks";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { tasksAction } from "../../store/actions/tasks-action";

import "../TaskList/style.css";

const Task = props => {
  const { task, onLinkClick } = props;

  return (
    <tr>
      <td>
        <a
          href=""
          onClick={event => {
            event.preventDefault();
            onLinkClick(task);
          }}
        >
          {task.name}
        </a>
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

  componentWillMount() {
    import("../../tasks").then(result => {
      this.props.tasksAction(result.default);
    });
  }

  constructor(props) {
    super(props);
    this.state = {
      currentFilter: TaskList.filters.task,
      isFilterReverse: false,
      openedTask: null,
      addingTask: false,
      tasks: []
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
    this.setState({
      currentFilter: filterName,
      isFilterReverse:
        this.state.currentFilter === filterName
          ? !this.state.isFilterReverse
          : false
    });
  }

  handleClick = openedTask => this.setState({ openedTask });
  addTaskClick = addingTask => this.setState({ addingTask });

  render() {
    const TaskElement = this.filterTasks(this.props.tasks).map(task => (
      <Task
        key={task.name}
        task={task}
        onLinkClick={this.handleClick.bind(this)}
      />
    ));
    const { openedTask } = this.state;
    const { addingTask } = this.state;

    return (
      <section className="table-wrapper">
        <div className="button-wrapper">
          <a
            className="table__button-to-scrum"
            href="#"
            onClick={event => {
              event.preventDefault();
              this.props.tableRenderScrum(true);
            }}
          >
            Scrum-доска
          </a>
        </div>
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
        <div className="task-add-wrapper">
          <button
            className="task-add__button"
            type="button"
            onClick={() => this.addTaskClick(true)}
          >
            Добавить задачу
          </button>
        </div>
        {addingTask && (
          <div
            className="modal-layout"
            // onClick={() => this.addTaskClick(false)}
          >
            <TaskAdd onButtonClick={this.addTaskClick.bind(this)} />
          </div>
        )}
        {openedTask && (
          <div
            className="modal-layout"
            // onClick={() => this.handleClick(null)}
          >
            <TaskPage
              onButtonClick={this.handleClick.bind(this)}
              task={openedTask}
            />
          </div>
        )}
      </section>
    );
  }
}

const mapStateToProps = state => {
  console.log(state);
  return {
    isScrumShow: state.scrumTableReducer.isScrumShow,
    tasks: getTasksAsArray(state)
  };
};

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      tableRenderScrum,
      tasksAction
    },
    dispatch
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TaskList);

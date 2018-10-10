import React from "react";
import TaskPage from "../TaskPage/TaskPage";
import TaskAdd from "../TaskAdd/TaskAdd";
import TaskEdit from "../TaskEdit/TaskEdit";

import { tableRenderScrum } from "../../store/actions/table-render-action";
import { getTasksAsArray } from "../../store/reducers/tasks";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { tasksAction } from "../../store/actions/tasks-action";
import { taskAddAction } from "../../store/actions/task-add-action";
import { taskEditAction } from "../../store/actions/task-edit-action";
import { taskDeleteAction } from "../../store/actions/task-delete-action";
import { Link } from "react-router-dom";

import "../TaskList/style.css";

const Task = props => {
  const {
    task,
    onLinkClick,
    onEditTaskClick,
    deleteTaskClick,
    taskDeleteAction
  } = props;

  return (
    <tr>
      <td>
        <Link
          key={task.id}
          to={"/TaskList/" + task.id}
          onClick={event => {
            // event.preventDefault();
            console.log(task.id);
            onLinkClick(task);
          }}
        >
          {task.name}
        </Link>
      </td>
      <td>{task.description}</td>
      <td>{task.status}</td>
      <td>{task.priority}</td>
      <td>
        <Link
          to={"/TaskList/" + task.id + "Edit"}
          className="task-table__button"
          type="button"
          onClick={() => {
            onEditTaskClick(task);
            console.log(task);
          }}
        >
          Изменить
        </Link>
        <button
          className="task-table__button"
          type="button"
          onClick={() => {
            deleteTaskClick(task);
            taskDeleteAction(task);
            console.log(task);
          }}
        >
          Удалить
        </button>
      </td>
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
      editedTask: null,
      addingTask: false,
      deletedTask: null
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
  editTaskClick = editedTask => this.setState({ editedTask });
  deleteTaskClick = deletedTask => this.setState({ deletedTask });

  render() {
    const TaskElement = this.filterTasks(this.props.tasks).map(task => (
      <Task
        key={task.id}
        task={task}
        onLinkClick={this.handleClick.bind(this)}
        onEditTaskClick={this.editTaskClick.bind(this)}
        deleteTaskClick={this.deleteTaskClick.bind(this)}
        taskDeleteAction={this.props.taskDeleteAction}
      />
    ));
    const { openedTask } = this.state;
    const { addingTask } = this.state;
    const { editedTask } = this.state;

    return (
      <section className="table-wrapper">
        <div className="button-wrapper">
          <Link
            to="/ScrumTable"
            className="table__button-to-scrum"
            href="#"
            onClick={event => {
              // event.preventDefault();
              this.props.tableRenderScrum(true);
            }}
          >
            Scrum-доска
          </Link>
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
              <th />
            </tr>
            {TaskElement}
          </tbody>
        </table>
        <div className="task-add-wrapper">
          <Link
            to={"/TaskList/TaskAdd"}
            className="task-add__button"
            onClick={() => this.addTaskClick(true)}
          >
            Добавить задачу
          </Link>
        </div>
        {addingTask && (
          <div className="modal-layout">
            <TaskAdd
              onButtonClick={this.addTaskClick.bind(this)}
              taskAddAction={this.props.taskAddAction}
            />
          </div>
        )}
        {openedTask && (
          <div className="modal-layout">
            <TaskPage
              onButtonClick={this.handleClick.bind(this)}
              task={openedTask}
            />
          </div>
        )}
        {editedTask && (
          <div className="modal-layout">
            <TaskEdit
              task={editedTask}
              onButtonClick={this.editTaskClick.bind(this)}
              taskEditAction={this.props.taskEditAction}
            />
          </div>
        )}
      </section>
    );
  }
}

const mapStateToProps = state => {
  return {
    isScrumShow: state.scrumTableReducer.isScrumShow,
    tasks: getTasksAsArray(state)
  };
};

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      tableRenderScrum,
      tasksAction,
      taskAddAction,
      taskEditAction,
      taskDeleteAction
    },
    dispatch
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TaskList);

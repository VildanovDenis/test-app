import React from "react";

import ScrumTask from "../Scrum/ScrumTask";
import { tasksAction } from "../../store/actions/tasks-action";
import { getTasksAsArray } from "../../store/reducers/tasks";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Link } from "react-router-dom";
import HTML5Backend from "react-dnd-html5-backend";
import { DragDropContext } from "react-dnd";

import "../Scrum/style.css";

class ScrumTable extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    import("../../tasks").then(result => {
      this.props.tasksAction(result.default);
    });
  }

  changeStatusTask = id => {
    console.log("privet" + id);
  };

  render() {
    const doneTasks = this.props.tasks
      .filter(task => task.status === "Готово")
      .map(task => (
        <ScrumTask
          key={task.name}
          task={task}
          handleDrop={id => this.changeStatusTask(id)}
        />
      ));
    const progressTasks = this.props.tasks
      .filter(task => task.status === "В процессе")
      .map(task => (
        <ScrumTask
          key={task.name}
          task={task}
          handleDrop={id => this.changeStatusTask(id)}
        />
      ));
    const plannedTasks = this.props.tasks
      .filter(task => task.status === "План")
      .map(task => (
        <ScrumTask
          key={task.name}
          task={task}
          handleDrop={id => this.changeStatusTask(id)}
        />
      ));
    return (
      <section className="scrum-table__wrapper">
        <div className="button-wrapper">
          <Link
            to="/TaskList"
            className="scrum-table__button"
            onClick={event => {
              // event.preventDefault();
              this.props.toggleTable(false);
            }}
            type="button"
            href=""
          >
            Назад к таблице
          </Link>
        </div>
        <div className="done">
          <h2>Готово</h2>
          {doneTasks}
        </div>
        <div className="in-progress">
          <h2>В процессе</h2>
          {progressTasks}
        </div>
        <div className="planned">
          <h2>План</h2>
          {plannedTasks}
        </div>
      </section>
    );
  }
}

const mapStateToProps = state => {
  return {
    tasks: getTasksAsArray(state)
  };
};

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      tasksAction
    },
    dispatch
  );
ScrumTable = DragDropContext(HTML5Backend)(ScrumTable);
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ScrumTable);

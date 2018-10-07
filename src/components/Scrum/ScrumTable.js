import React from "react";

import { tasksAction } from "../../store/actions/tasks-action";
import { getTasksAsArray } from "../../store/reducers/tasks";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import "../Scrum/style.css";

const ScrumTask = props => {
  const { task } = props;
  return (
    <div className="scrum-task-page">
      <span>Задача: {task.name}</span>
      <span>Описание: {task.description}</span>
      <span>Приоритет: {task.priority}</span>
    </div>
  );
};

class ScrumTable extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    import("../../tasks").then(result => {
      this.props.tasksAction(result.default);
    });
  }

  render() {
    const doneTasks = this.props.tasks
      .filter(task => task.status === "Готово")
      .map(task => <ScrumTask key={task.name} task={task} />);
    const progressTasks = this.props.tasks
      .filter(task => task.status === "В процессе")
      .map(task => <ScrumTask key={task.name} task={task} />);
    const plannedTasks = this.props.tasks
      .filter(task => task.status === "План")
      .map(task => <ScrumTask key={task.name} task={task} />);
    return (
      <section className="scrum-table__wrapper">
        <div className="button-wrapper">
          <a
            className="scrum-table__button"
            onClick={event => {
              event.preventDefault();
              this.props.toggleTable(false);
            }}
            type="button"
            href=""
          >
            Назад к таблице
          </a>
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

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ScrumTable);

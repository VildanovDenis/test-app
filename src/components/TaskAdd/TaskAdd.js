import React from "react";

import { taskAddAction } from "../../store/actions/task-add-action";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import "../TaskAdd/style.css";

class TaskAdd extends React.Component {
  /**
   *
   * @param {Object} props
   * @param {Function} props.onButtonClick
   */
  constructor(props) {
    super(props);
    this.state = {
      nameInput: "",
      descriptionInput: "",
      statusInput: "В процессе",
      priorityInput: "Высокий",
      dateInput: "",
      timetodoInput: "",
      wastedtimeInput: ""
    };
    this.onNameInputChange = this.onNameInputChange.bind(this);
    this.onDescriptionInputChange = this.onDescriptionInputChange.bind(this);
    this.onStatusInputChange = this.onStatusInputChange.bind(this);
    this.onPriorityInputChange = this.onPriorityInputChange.bind(this);
    this.onDateInputChange = this.onDateInputChange.bind(this);
    this.onTimetodoInputChange = this.onTimetodoInputChange.bind(this);
  }

  onNameInputChange(event) {
    this.setState({
      nameInput: event.target.value
    });
  }
  onDescriptionInputChange(event) {
    this.setState({
      descriptionInput: event.target.value
    });
  }
  onStatusInputChange(event) {
    this.setState({
      statusInput: event.target.value
    });
  }
  onPriorityInputChange(event) {
    this.setState({
      priorityInput: event.target.value
    });
  }
  onDateInputChange(event) {
    this.setState({
      dateInput: event.target.value
    });
  }
  onTimetodoInputChange(event) {
    this.setState({
      timetodoInput: event.target.value
    });
  }
  addTask() {
    console.log({
      name: this.state.nameInput,
      description: this.state.descriptionInput,
      status: this.state.statusInput,
      priority: this.state.priorityInput,
      date: this.state.dateInput,
      timetodo: this.state.timetodoInput,
      wastedtime: this.state.wastedtimeInput
    });
  }

  render() {
    return (
      <div className="task-add">
        <h2>Добавление задачи</h2>
        <form action="#" className="task-add__form">
          <label>
            <span>Название:</span>
            <input
              className="input task-name"
              type="text"
              name="name"
              onChange={this.onNameInputChange}
              required
            />
          </label>
          <label>
            <span>Описание:</span>
            <textarea
              className="input text-area task-description"
              name="description"
              onChange={this.onDescriptionInputChange}
              required
            />
          </label>
          <label>
            <span>Статус::</span>
            <select
              name="status"
              className="task-status"
              onChange={this.onStatusInputChange}
            >
              <option>В процессе</option>
              <option>Готово</option>
              <option>План</option>
            </select>
          </label>
          <label>
            <span>Приоритет:</span>
            <select
              name="priority"
              className="task-priority"
              onChange={this.onPriorityInputChange}
            >
              <option>Высокий</option>
              <option>Низкий</option>
            </select>
          </label>
          <label>
            <span>Дата появления задачи:</span>
            <input
              className="input task-date"
              type="datetime-local"
              name="date"
              onChange={this.onDateInputChange}
              required
            />
          </label>
          <label>
            <span>Время на выполнение:</span>
            <input
              className="input task-timetodo"
              type="text"
              name="timetodo"
              onChange={this.onTimetodoInputChange}
              required
            />
          </label>
          {/* <label>
            <span className="disabled">Потраченное время:</span>
            <input
              className="input"
              type="text"
              name="wastedtime"
              value=" "
              disabled
            />
          </label> */}
          <button
            type="submit"
            className="task-add-button"
            onClick={event => {
              event.preventDefault;
              this.addTask();
              this.props.taskAddAction({
                name: this.state.nameInput,
                description: this.state.descriptionInput,
                status: this.state.statusInput,
                priority: this.state.priorityInput,
                date: this.state.dateInput,
                timetodo: this.state.timetodoInput,
                wastedtime: this.state.wastedtimeInput
              });
              this.props.onButtonClick(false);
            }}
          >
            Добавить
          </button>
        </form>
        <button
          type="button"
          className="task-add__close-button"
          onClick={() => this.props.onButtonClick(false)}
        />
      </div>
    );
  }
}

const mapStateToProps = state => {
  console.log(state);
  return {
    // isScrumShow: state.scrumTableReducer.isScrumShow,
    // task: getTasksAsArray(state)
  };
};

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      taskAddAction
    },
    dispatch
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TaskAdd);

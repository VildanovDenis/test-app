import React from "react";
import "../TaskEdit/style.css";

class TaskEdit extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      nameInput: this.props.task.name,
      descriptionInput: this.props.task.description,
      statusInput: this.props.task.status,
      priorityInput: this.props.task.priority,
      dateInput: this.props.task.date,
      timetodoInput: this.props.tasktimetodo,
      wastedtimeInput: this.props.task.wastedtime
    };
    this.onNameInputChange = this.onNameInputChange.bind(this);
    this.onDescriptionInputChange = this.onDescriptionInputChange.bind(this);
    this.onStatusInputChange = this.onStatusInputChange.bind(this);
    this.onPriorityInputChange = this.onPriorityInputChange.bind(this);
    this.onDateInputChange = this.onDateInputChange.bind(this);
    this.onWastedTimeChange = this.onWastedTimeChange.bind(this);
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
  onWastedTimeChange(event) {
    this.setState({
      wastedtimeInput: event.target.value
    });
  }
  OnEditTaskClick() {
    this.props.taskEditAction({
      id: this.props.task.id,
      name: this.state.nameInput,
      description: this.state.descriptionInput,
      status: this.state.statusInput,
      priority: this.state.priorityInput,
      date: this.state.dateInput,
      timetodo: this.state.timetodoInput,
      wastedtime: this.state.wastedtimeInput
    });
    this.props.onButtonClick(false);
  }

  render() {
    return (
      <div className="task-edit">
        <button
          type="button"
          className="task-page__button"
          onClick={() => this.props.onButtonClick(null)}
        />
        <div>
          <span>Название:</span>
          <input
            value={this.state.nameInput}
            onChange={this.onNameInputChange}
          />
        </div>
        <div>
          <span>Описание:</span>
          <input
            value={this.state.descriptionInput}
            onChange={this.onDescriptionInputChange}
          />
        </div>
        {/*Дата появления задачи: {task.date} */}
        <div>
          <span>Приоритет:</span>
          <select
            value={this.state.priorityInput}
            onChange={this.onPriorityInputChange}
          >
            <option>Высокий</option>
            <option>Низкий</option>
          </select>
        </div>
        <div>
          <span>Статус:</span>
          <select
            value={this.state.statusInput}
            onChange={this.onStatusInputChange}
          >
            <option>В процессе</option>
            <option>Готово</option>
            <option>План</option>
          </select>
        </div>
        <div>
          <span>Затраченное время:</span>
          <input
            value={this.state.wastedtimeInput}
            onChange={this.onWastedTimeChange}
          />
        </div>
        <button
          type="button"
          onClick={() => {
            this.OnEditTaskClick();
          }}
        >
          Сохранить
        </button>
      </div>
    );
  }
}
export default TaskEdit;

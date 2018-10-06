import React from "react";
import "../TaskAdd/style.css";
import { render } from "react-dom";

class TaskAdd extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      nameInput: "",
      descriptionInput: "",
      statusInput: "",
      priorityInput: "",
      dateInput: "",
      timetodoInput: ""
    };

    // this.handleTaskAdd = this.handleTaskAdd.bind(this);
    this.onNameInputChange = this.onNameInputChange.bind(this);
    this.onDescriptionInputChange = this.onDescriptionInputChange.bind(this);
    this.onStatusInputChange = this.onStatusInputChange.bind(this);
    this.onPriorityInputChange = this.onPriorityInputChange.bind(this);
    this.onDateInputChange = this.onPriorityInputChange.bind(this);
    this.onTimetodoInputChange = this.onPriorityInputChange.bind(this);
  }

  onNameInputChange(event) {
    this.setState({
      nameInput: event.target.value
    });
  }

  render({ onButtonClick }) {
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
            />
          </label>
          <label>
            <span>Описание:</span>
            <textarea
              className="input text-area task-description"
              name="description"
            />
          </label>
          <label>
            <span>Статус::</span>
            <select name="status" className="task-status">
              <option>В процессе</option>
              <option>Готово</option>
              <option>План</option>
            </select>
          </label>
          <label>
            <span>Приоритет:</span>
            <select name="priority" className="task-priority">
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
            />
          </label>
          <label>
            <span>Время на выполнение:</span>
            <input
              className="input task-timetodo"
              type="text"
              name="timetodo"
            />
          </label>
          <label>
            <span className="disabled">Потраченное время:</span>
            <input
              className="input"
              type="text"
              name="wastedtime"
              value=" "
              disabled
            />
          </label>
          <button type="button" className="task-add-button">
            Добавить
          </button>
        </form>
        <button
          type="button"
          className="task-add__close-button"
          onClick={() => onButtonClick(false)}
        />
      </div>
    );
  }
}

export default TaskAdd;

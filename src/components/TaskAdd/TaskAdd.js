import React from "react";
import "../TaskAdd/style.css";

function TaskAdd({ onButtonClick }) {
  return (
    <div className="task-add">
      <h2>Добавление задачи</h2>
      <form action="#" className="task-add__form">
        <label>
          <span>Название:</span>
          <input className="input" type="text" name="name" />
        </label>
        <label>
          <span>Описание:</span>
          <textarea className="input text-area" name="description" />
        </label>
        <label>
          <span>Статус::</span>
          <select name="status">
            <option>В процессе</option>
            <option>Готово</option>
            <option>План</option>
          </select>
        </label>
        <label>
          <span>Приоритет:</span>
          <select name="priority">
            <option>Высокий</option>
            <option>Низкий</option>
          </select>
        </label>
        <label>
          <span>Дата появления задачи:</span>
          <input className="input" type="datetime-local" name="date" />
        </label>
        <label>
          <span>Время на выполнение:</span>
          <input className="input" type="text" name="timetodo" />
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
        <button type="submit">Добавить</button>
      </form>
      <button
        type="button"
        className="task-add__close-button"
        onClick={() => onButtonClick(false)}
      />
    </div>
  );
}

export default TaskAdd;

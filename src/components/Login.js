import React from "react";

function LoginForm() {
  return (
    <div className="Login-form">
      <h1>Войдите в систему, чтобы продолжить.</h1>
      <form action="#">
        <label>
          Логин: <input type="text" />
        </label>
        <label>
          Пароль: <input type="password" />
        </label>
        <button onClick={handleClick}>Войти</button>
        <label>
          <input type="checkbox" />
          Запомнить
        </label>
      </form>
    </div>
  );
}

function handleClick() {
  console.log(">>>", "clicked");
}

export default LoginForm;

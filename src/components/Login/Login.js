import React from "react";
import "../Login/style.css";

function LoginForm() {
  return (
    <div className="Login-form">
      <h1>Войдите в систему, чтобы продолжить.</h1>
      <form action="#">
        <div>
          <label className="login-form__area">
            <span className="login-form__input-title">Логин:</span>
            <input className="login-form__input" type="text" />
          </label>
        </div>
        <div>
          <label className="login-form__area">
            <span className="login-form__input-title">Пароль:</span>
            <input className="login-form__input" type="password" />
          </label>
        </div>
        <div className="login-form__login">
          <button onClick={handleClick} className="login-form__button">
            Войти
          </button>
          <label>
            <input type="checkbox" />
            Запомнить меня
          </label>
        </div>
      </form>
    </div>
  );
}

function handleClick() {
  console.log(">>>", "clicked");
}

export default LoginForm;

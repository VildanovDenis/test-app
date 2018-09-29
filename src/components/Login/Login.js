import React from "react";
import "../Login/style.css";

class Button extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isLogin: false };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(prevState => ({
      isLogin: !prevState.isLogin
    }));
  }

  render() {
    return (
      <button type="Submit" className="" onClick={this.handleClick}>
        Войти
      </button>
    );
  }
}

function LoginForm() {
  return (
    <div className="login-form">
      <h1>Войдите в систему, чтобы продолжить.</h1>
      <form action="#">
        <div>
          <label className="login-form__area">
            <span className="login-form__input-title">Логин:</span>
            <input
              className="login-form__input"
              type="text"
              placeholder="Логин"
              autoComplete="on"
            />
          </label>
        </div>
        <div>
          <label className="login-form__area">
            <span className="login-form__input-title">Пароль:</span>
            <input
              className="login-form__input"
              type="password"
              placeholder="Пароль"
              autoComplete="on"
            />
          </label>
        </div>
        <div className="login-form__login">
          <Button className="login-form__button" />
          <label>
            <input type="checkbox" />
            Запомнить меня
          </label>
        </div>
      </form>
    </div>
  );
}

export default LoginForm;

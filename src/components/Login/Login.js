import React from "react";
import "./style.css";
import { auth } from "../../API/auth";

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { loginInput: "", passwordInput: "" };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.onLoginInputChange = this.onLoginInputChange.bind(this);
    this.onPasswordInputChange = this.onPasswordInputChange.bind(this);
  }

  handleSubmit() {
    auth({
      login: this.state.loginInput,
      password: this.state.passwordInput
    }).then(({ ok }) => {
      this.props.onLogin(ok);
    });
  }

  onLoginInputChange(event) {
    this.setState({
      loginInput: event.target.value
    });
  }

  onPasswordInputChange(event) {
    this.setState({
      passwordInput: event.target.value
    });
  }

  render() {
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
                onChange={this.onLoginInputChange}
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
                onChange={this.onPasswordInputChange}
              />
            </label>
          </div>
          <div className="login-form__login">
            <button type="Submit" className="" onClick={this.handleSubmit}>
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
}

export default LoginForm;

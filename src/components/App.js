import React from "react";
import LoginForm from "./Login/Login";
import TaskPage from "./TaskPage/TaskPage";
import TaskList from "./TaskList/TaskList";
import { authAction } from "../store/actions/auth-action";

import { connect } from "react-redux";

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { isLogin } = this.props;

    return (
      <div>
        {isLogin ? (
          <React.Fragment>
            <TaskList />
            <TaskPage />
          </React.Fragment>
        ) : (
          <LoginForm onLogin={this.props.auth} onClick={this.props.auth} />
        )}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    isLogin: state.authReducer.isAuth
  };
};

const mapDispatchToProps = dispatch => ({
  auth: isAuth => {
    dispatch(authAction(isAuth));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

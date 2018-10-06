import React from "react";
import LoginForm from "./Login/Login";
import TaskList from "./TaskList/TaskList";
import ScrumTable from "./Scrum/ScrumTable";
import { authAction } from "../store/actions/auth-action";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { tableRenderScrum } from "../store/actions/table-render-action";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isScrumTableShow: false
    };
  }

  render() {
    const { isLogin } = this.props;
    const { isScrumShow } = this.props;

    return (
      <React.Fragment>
        {true ? (
          isScrumShow ? (
            <ScrumTable toggleTable={this.props.toggleTable} />
          ) : (
            <TaskList />
          )
        ) : (
          <LoginForm onLogin={this.props.auth} />
        )}
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    isLogin: state.authReducer.isAuth,
    isScrumShow: state.scrumTableReducer.isScrumShow
  };
};

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      auth: authAction,
      toggleTable: tableRenderScrum
    },
    dispatch
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

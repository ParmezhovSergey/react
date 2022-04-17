import { Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import UsersContainer from "./components/Users/UsersContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";
import React, { Component } from "react";
import { connect, Provider } from "react-redux";
import { withRouter } from "react-router-dom";
import { compose } from "redux";
import { initializeApp } from "./redux/app-reducer";
import Preloader from "./components/common/Preloader/preloader";
import store from "./redux/redux-store";
import { BrowserRouter } from "react-router-dom";
import { Switch } from "react-router-dom";
import { Redirect } from "react-router-dom";
//import ProfileContainer from "./components/ProfileContainer";
//import DialogsContainer from "./components/Dialogs/DialogsContainer";
const ProfileContainer = React.lazy(() =>
  import("./components/ProfileContainer")
);
const DialogsContainer = React.lazy(() =>
  import("./components/Dialogs/DialogsContainer")
);

class App extends Component {
  componentDidMount() {
    this.props.initializeApp();
  }
  render() {
    if (!this.props.initialized) {
      return <Preloader />;
    }
    return (
      <div className="app-wrapper">
        <HeaderContainer />
        <Navbar />
        <div className="app-wrapper-content">
          <Switch>
            <Route
              exact
              path="/"
              render={() => {
                return <Redirect to={"/profile"} />;
              }}
            />

            <Route
              path="/profile/:userId?"
              render={() => {
                return (
                  <React.Suspense fallback={<div>Loading...</div>}>
                    <ProfileContainer />
                  </React.Suspense>
                );
              }}
            />

            <Route
              path="/dialogs"
              render={() => {
                return (
                  <React.Suspense fallback={<div>Loading...</div>}>
                    <DialogsContainer />
                  </React.Suspense>
                );
              }}
            />

            <Route path="/users" render={() => <UsersContainer />} />

            <Route path="/login" render={() => <Login />} />

            <Route path="/news" element={<News />} />

            <Route path="/music" element={<Music />} />
            <Route path="/settings" element={<Settings />} />
          </Switch>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  initialized: state.app.initialized,
});
let AppContainer = compose(
  withRouter,
  connect(mapStateToProps, { initializeApp })
)(App);

const SamuraiJSApp = (props) => {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <AppContainer />
      </Provider>
    </BrowserRouter>
  );
};

export default SamuraiJSApp;

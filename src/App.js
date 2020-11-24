import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import { connect } from 'react-redux';
import './App.scss';
import Dashboard from "./pages/Dashboard";

const App = ({
  str, dispatchCustom
}) => {
  return (
    <Router>
      <div className="App">
        <p>Testing</p>
        <p>{str}</p>
        <button onClick={dispatchCustom}>Redux</button>
        <Switch>
          <Route path="/">
            <Dashboard />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

const mapStateToProps = state => {
  return {
    str: state.custom.str
  }
}

const mapDispatchToProps = dispatch => {
  return {
    dispatchCustom: () => dispatch({
      type: 'UPDATE_STR'
    })
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);

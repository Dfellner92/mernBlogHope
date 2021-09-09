import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Login}></Route>
      </Switch>
    </Router>
  );
}

export default App;

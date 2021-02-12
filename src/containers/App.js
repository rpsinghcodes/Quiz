import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Question from "./Question";
import Login from "./Login";
import Start from "./Start";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Login />
        </Route>
        <Route exact path="/start">
          <Start />
        </Route>
        <Route exact path="/questions/:id">
          <Question />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;

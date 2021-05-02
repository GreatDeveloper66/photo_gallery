import './App.css';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'


function App() {
  return (
    <Router>
    <Switch>
      <Route exact path='/' component={WelcomeScreen} />
    </Switch>
  </Router>
  );
}

export default App;

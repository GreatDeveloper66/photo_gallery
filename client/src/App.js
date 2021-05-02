import './App.css';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import WelcomeScreen from './Components/WelcomeScreenComponents/WelcomeScreen'


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

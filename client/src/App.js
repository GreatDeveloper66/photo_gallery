import './App.css';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import LoginScreen from './Components/WelcomeScreenComponents/Screens/LoginScreen'


function App() {
  return (
    <Router>
    <Switch>
      <Route exact path='/' component={LoginScreen} />
    </Switch>
  </Router>
  );
}

export default App;

import './App.css';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import LoginScreen from './Components/WelcomeScreenComponents/Screens/LoginScreen'
import RegisterScreen from './Components/WelcomeScreenComponents/Screens/RegisterScreen'
import MainScreen from './Components/GalleryScreenComponents/MainScreen'


function App() {
  return (
    <Router>
    <Switch>
      <Route exact path='/' component={LoginScreen} />
      <Route exact path ='/Register' component={RegisterScreen} />
      <Route>
        {localStorage.token ? <MainScreen /> : <Redirect to="/" />}
      </Route>
      <Route exact path='/MainScreen' component={MainScreen} />
    </Switch>
  </Router>
  );
}

export default App;
/*
 /*
      <Route>
        {localStorage.token ? <MainScreen /> : <Redirect to="/" />}
      </Route>
      <Route exact path='/MainScreen' component={MainScreen} />
      */
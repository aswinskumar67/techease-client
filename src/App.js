
import './App.css';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import LoggedInAdmin from './components/admin/LoggedInAdmin'
import LoggedInContributors from './components/contributor/LoggedInContributors'
import Home from './components/home/home.jsx'
import AppComponent from './components/app/singleApp'
import SingleMethod from './components/app/method/singleMethod'

function App() {
  return (

    <Router>
      <Switch>
      <Route exact path="/" component={Home}/>
     <Route exact path="/admin" component={LoggedInAdmin}/>
     <Route exact path="/contributor" component={LoggedInContributors}/>
      <Route  exact path="/:appId" component={AppComponent}/>
      <Route  exact path="/:appId/:method" component={SingleMethod}/>
      </Switch>

    </Router>

  );
}

export default App;

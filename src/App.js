
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

import HomeAll from './Component/HomeAll';
import SubmitUserList from './Component/SubmitUserList';
import Navigation from './Component/Navigation';
import SocialMedia from './Component/SocialMedia';
function App() {
  return (
    <div className="App">
      <Router>
        <Navigation></Navigation>
        <div>

          <Switch>

          <Route path="/home">
              <HomeAll />
            </Route>
            <Route path="/submits">
              <SubmitUserList />
            </Route>
            <Route path="/social">
              <SocialMedia />
            </Route>
            <Route path="/">
              <HomeAll />
            </Route>
          
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;

import './App.css';
import Portfolio from './FertigeSeiten/index';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import FourCard2 from './FertigeSeiten/Newbie6(fertig)';
import Huddle from './FertigeSeiten/Newbie1(fertig)';
import SinglePrice from './FertigeSeiten/Newbie3(fertig)';
import PingComingSoon from './FertigeSeiten/Newbie2(fertig)';
import { Navbar } from './FertigeSeiten/MetaComponent';
import Blogr from './FertigeSeiten/Junior1(fertig)/App';
import Sunnyside from './FertigeSeiten/Junior2(fertig)/App';
import Crowdfunding from './FertigeSeiten/Junior3(bearbeitet)/App';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar>
          <Link to="/">Home</Link>
          <Link to="/">Blog</Link>
          <Link to="/">About</Link>
        </Navbar>
        <Switch>
          <Route exact path="/">
            <Portfolio />
          </Route>
          <Route exact path="/fourcard">
            <FourCard2 />
          </Route>
          <Route path="/huddle">
            <Huddle />
          </Route>
          <Route path="/singleprice">
            <SinglePrice />
          </Route>
          <Route path="/ping">
            <PingComingSoon />
          </Route>
          <Route path="/blogr">
            <Blogr />
          </Route>
          <Route path="/sunnyside">
            <Sunnyside />
          </Route>
          <Route path="/crowdfunding">
            <Crowdfunding />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;

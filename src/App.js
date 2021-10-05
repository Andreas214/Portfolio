import './App.css';
import Portfolio from './FertigeSeiten/index';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import PingComingSoon from './FertigeSeiten/Newbie2(fertig)';
import { Navbar } from './FertigeSeiten/MetaComponent';
import Blogr from './FertigeSeiten/Junior1(fertig)/App';
import Sunnyside from './FertigeSeiten/Junior2(fertig)/App';
import About from './About';
import FourCard2 from './FertigeSeiten/Newbie6(fertig)';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar>
          <Link to="/">Home</Link>
          <a href="https://fallingtonewheights.wordpress.com/blog">Blog</a>
          <Link to="/about">About</Link>
        </Navbar>
        <Switch>
          <Route exact path="/">
            <Portfolio />
          </Route>
          <Route path="/fourcards">
            <FourCard2 />
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
          <Route exact path="/about">
            <About />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;

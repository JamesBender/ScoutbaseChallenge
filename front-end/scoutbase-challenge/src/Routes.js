import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Countries from './components/Countries';
import Home from './components/Home';

const Routes = (props) => {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/countries">Counties</Link>
            </li>
          </ul>
        </nav>
        <Route path="/" exact component={Home} />
        <Route path="/countries" component={Countries} />
      </div>
    </Router>
  );
};

export default Routes;

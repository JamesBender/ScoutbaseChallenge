import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Countries from './components/Countries';

const Routes = (props) => {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/countries">Counties</Link>
            </li>
          </ul>
        </nav>
        <Route path="/countries" component={Countries} />
      </div>
    </Router>
  );
};

export default Routes;

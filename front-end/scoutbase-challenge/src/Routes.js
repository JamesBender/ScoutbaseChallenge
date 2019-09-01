import React from 'react';
import { Route, Link } from 'react-router-dom';
import Countries from './components/Countries';
import Country from './components/Country';
import Home from './components/Home';

const Routes = (props) => {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/countries">Countries</Link>
          </li>
        </ul>
      </nav>
      <Route path="/" exact component={Home} />
      <Route path="/countries" component={Countries} />
      <Route path="/country/:id" component={Country} />
    </div>
  );
};

export default Routes;

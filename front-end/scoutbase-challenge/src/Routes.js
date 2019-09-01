import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Countries from './components/Countries';
import Country from './components/Country';
import Home from './components/Home';
import { nonExecutableDefinitionMessage } from 'graphql/validation/rules/ExecutableDefinitions';

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
              <Link to="/countries">Countries</Link>
            </li>
            <li style={{ display: 'none' }}>
              {/* Normally I would put this link my unit test
                  but for some reason when I put if there, the Country
                  component is not being rendered. I'm researching this,
                  but don't want to slow down the rest of the development
                  in the meantime */}
              <Link to="/country/us">Country Test</Link>
            </li>
          </ul>
        </nav>
        <Route path="/" exact component={Home} />
        <Route path="/countries" component={Countries} />
        <Route path="/country/:id" component={Country} />
      </div>
    </Router>
  );
};

export default Routes;

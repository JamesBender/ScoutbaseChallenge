import React from 'react';
import { Route, Link } from 'react-router-dom';
import { Navbar, NavItem, Nav } from 'react-bootstrap';
import Countries from './components/Countries';
import Country from './components/Country';
import Home from './components/Home';

const Routes = (props) => {
  return (
    <div>
      <Navbar>
        <Nav>
          <NavItem>
            <Link to="/">Home</Link>
          </NavItem>
          <NavItem>
            <Link to="/countries">Countries</Link>
          </NavItem>
        </Nav>
      </Navbar>
      <Route path="/" exact component={Home} />
      <Route path="/countries" component={Countries} />
      <Route path="/country/:id" component={Country} />
    </div>
  );
};

export default Routes;

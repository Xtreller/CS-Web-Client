import React, { Component } from 'react';
import { Route } from 'react-router';
// import { Layout } from './components/Layout';
import { Home } from './components/Home';
import Details from './components/garage/Details';
import AddGarage from './components/garage/AddGarage';
import GarageList from './components/garage/GaragesList';
import Jobs from './components/garage/Jobs';
import AddJob from './components/garage/AddJob';
import { Container } from 'reactstrap';

// // import AuthorizeRoute from './components/api-authorization/AuthorizeRoute';
// import ApiAuthorizationRoutes from './components/api-authorization/ApiAuthorizationRoutes';
// import { ApplicationPaths } from './components/api-authorization/ApiAuthorizationConstants';

import './custom.css'
import Register from './components/Auth/Register';
import Login from './components/Auth/Login';
// import { textSpanIntersectsWithPosition } from 'typescript';
import { NavMenu } from './components/NavMenu';
// import { conditionallyUpdateScrollbar } from 'reactstrap/lib/utils';
// import env from 'dotenv'

export default class App extends Component {
  static displayName = App.name;
  constructor(props) {
    super(props)
    this.state = {
      isLogged: localStorage.getItem('auth_token')
    }
    this.isLogged = this.isLogged.bind(this);
  }
  isLogged() {

    const token = localStorage.getItem('auth_token');
    if (token) {

      this.setState({ isLogged: true });
    }
    else {
      this.setState({ isLogged: false });
    }
  }
  componentDidMount() {
    this.isLogged();

  }

  render() {
    return (
      <div>
        <NavMenu logout={() => this.isLogged()} isLogged={this.state.isLogged} />
        <Container>

          <Route exact path='/' component={Home} />
          <Route path='/garages' component={GarageList} />
          <Route path='/add-garage' component={AddGarage} />
          <Route path='/garage/:id' component={Details} />
          <Route path='/register' component={Register} />
          <Route path='/jobs/:id' component={Jobs} />
          <Route path='/add-job/:id' component={AddJob} />
          <Route path='/login' render={() => (
            <Login isLogged={() => this.isLogged()} />
          )} />
        </Container>
        {/* <Route path={ApplicationPaths.ApiAuthorizationPrefix} component={ApiAuthorizationRoutes} /> */}
      </div>
    );
  }
}

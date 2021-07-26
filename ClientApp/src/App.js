import React, { Component } from 'react';
import { Route } from 'react-router';
import { Layout } from './components/Layout';
import { Home } from './components/Home';
import Details from './components/garage/Details';
import AddGarage from './components/garage/AddGarage';
import GarageList from './components/garage/GaragesList';
// import AuthorizeRoute from './components/api-authorization/AuthorizeRoute';
import ApiAuthorizationRoutes from './components/api-authorization/ApiAuthorizationRoutes';
import { ApplicationPaths } from './components/api-authorization/ApiAuthorizationConstants';

import './custom.css'
import Register from './components/Auth/Register';
import Login from './components/Auth/Login';
// import env from 'dotenv'

export default class App extends Component {
  static displayName = App.name;

  render() {
    return (
      <Layout>
        <Route exact path='/' component={Home} />
        {/* <Route path='/counter' component={Counter} /> */}
        {/* <AuthorizeRoute path='/fetch-data' component={FetchData} /> */}
        <Route path='/garages' component={GarageList} />
        <Route path='/add-garage' component={AddGarage} />
        <Route path='/garage/:id' component={Details} />
        <Route path='/register' component={Register} />
        <Route path='/login' component={Login} />
        <Route path={ApplicationPaths.ApiAuthorizationPrefix} component={ApiAuthorizationRoutes} />
      </Layout>
    );
  }
}

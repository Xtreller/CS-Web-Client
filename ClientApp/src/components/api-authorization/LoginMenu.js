import React, { Component, Fragment } from 'react';
import { NavItem, NavLink } from 'reactstrap';
import { Link } from 'react-router-dom';
import authService from './AuthorizeService';
import { ApplicationPaths } from './ApiAuthorizationConstants';
import Nav from 'reactstrap/lib/Nav';

export class LoginMenu extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isAuthenticated: false,
            userName: null
        };
    }

    componentDidMount() {
        this._subscription = authService.subscribe(() => this.populateState());
        this.populateState();
    }

    componentWillUnmount() {
        authService.unsubscribe(this._subscription);
    }

    async populateState() {
        const [isAuthenticated, user] = await Promise.all([authService.isAuthenticated(), authService.getUser()])
        this.setState({
            isAuthenticated,
            userName: user && user.name
        });
    }

    render() {
        const { isAuthenticated, userName } = this.state;
        const isAuth = localStorage.getItem('auth_token');

        if (!isAuth) {
            const registerPath = `${ApplicationPaths.Register}`;
            const loginPath = `${ApplicationPaths.Login}`;
            return this.anonymousView(registerPath, loginPath);
        } else {
            const profilePath = `${ApplicationPaths.Profile}`;
            const logoutPath = { pathname: `${ApplicationPaths.LogOut}`, state: { local: true } };
            return this.authenticatedView(userName, profilePath, logoutPath);
        }
    }

    authenticatedView(userName, profilePath, logoutPath) {
        const isAuth = localStorage.getItem('auth_token');

        return (<Fragment>
           <NavItem>
                     <NavLink tag={Link}>Hello {isAuth.slice(0,5)}</NavLink>
                </NavItem>
                <NavItem>
                {/* {userEmail && <li className="active"><NavLink to="#" onClick={() => this.logout()}>Logout</NavLink></li>} */}
                     <NavLink to="#" onClick={() => this.logout()}>Logout</NavLink>
                </NavItem>
        </Fragment>);

    }
    logout(){
        console.log('her');
        if(localStorage.getItem('auth_token')){
            localStorage.clear();
        }
    }
    anonymousView(registerPath, loginPath) {
        const isAuth = localStorage.getItem('auth_token');
        return (
            <Fragment>
              <NavItem>
                    {!isAuth && <NavLink tag={Link} to="/register">Register</NavLink>}
                </NavItem>
                <NavItem>
                    {!isAuth && <NavLink tag={Link} to="/login">Login</NavLink>}
                </NavItem>
            </Fragment>);
    }
}

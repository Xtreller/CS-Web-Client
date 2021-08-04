import React, { Component } from 'react';
import { Collapse, Container, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink } from 'reactstrap';
import { Link } from 'react-router-dom';
import { LoginMenu } from './api-authorization/LoginMenu';
import './NavMenu.css';

export class NavMenu extends Component {
  static displayName = NavMenu.name;

  constructor(props) {
    super(props)
    this.state = {
      user: this.props.isLogged
    }
    this.logout = this.logout.bind(this);
  }
  logout() {
    console.log('llog');
    this.props.logout();
    localStorage.clear();
  }
  setUser() {
    const logged = localStorage.getItem('auth_token');
    console.log('setUser');
    if (logged) {
      this.setState({ user: logged })
    }
    else{

      this.setState({ user: false })
    }
  }
  componentDidMount(){
    console.log(this.props);
  }
  componentDidUpdate(_, prevState) {
    if (prevState.user !== this.state.user) { this.setUser(); }
  }
  toggleNavbar() {
    this.setState({
      collapsed: !this.state.collapsed
    });
  }

  render() {
    const userEmail = localStorage.getItem('email');
    return (

      <header>
        <Navbar className="navbar navbar-dark bg-dark navbar-expand-sm navbar-toggleable-sm ng-white border-bottom box-shadow "  >
          <Container>
            <NavbarBrand tag={Link} to="/garages">

              <img className="logo" src="./logo.png" height="100px" alt="" />
            </NavbarBrand>
            <NavbarToggler onClick={this.toggleNavbar} className="mr-2" />
            <Collapse className="d-sm-inline-flex flex-sm-row-reverse" isOpen={!this.state.collapsed} navbar>
              <ul className="navbar-nav flex-grow">
                {/* {userEmail && <li className="active"><Link to="/users">{userEmail}</Link></li>}
                {userEmail && <li className="active"><Link to="#" onClick={() => this.logout()}>Logout</Link></li>}
                {!userEmail && <li className="active"><Link to="/login">Login</Link></li>}
                {!userEmail && <li className="active"><Link to="/register" >Register</Link></li>} */}
                {/* <NavItem>
                  <NavLink tag={Link} to="/">Home</NavLink>
                </NavItem> */}
                <NavItem>
                  <NavLink tag={Link} to="/add-garage">Add Garage</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink tag={Link} to="/garages">Garages</NavLink>
                </NavItem>
                <NavItem>
                  
                  {this.props.isLogged && <li className="active"><NavLink to="/">{userEmail}</NavLink></li>}
                </NavItem>
                <NavItem>
                  {this.props.isLogged && <li className="active"><NavLink className="link" to="#" onClick={() => this.logout()}>Logout</NavLink></li>}
                </NavItem>
                <NavItem>
                  {!this.props.isLogged  && <NavLink tag={Link} to="/register">Register</NavLink>}
                </NavItem>
                <NavItem>
                  {!this.props.isLogged && <NavLink tag={Link} to="/login">Login</NavLink>}
                </NavItem>

              </ul>
            </Collapse>
          </Container>
        </Navbar>
      </header>
    );
  }
}


// class NavMenu extends Component {
//   constructor(props) {
//     super(props)
//     this.state = {
//       user: undefined
//     }
//     this.logout = this.logout.bind(this);
//   }
//   logout() {
//     fetch('http://localhost:5000/auth/user/_logout')
//       .then(res => res.json())
//       .then(res => console.log(res.success ? 'Logged out!' : 'There was an error!'))
//     localStorage.clear();
//     this.props.history.push('/')
//   }
//   setUser() {
//     const logged = localStorage.getItem('token');
//     if (logged) {
//       this.setState({ user: logged })
//     }
//     this.setState({ user: {} })
//   }
//   componentDidUpdate(_, prevState) {
//     if (prevState.user !== this.state.user) { this.setUser(); }
//   }
//   render() {
//     const userEmail = localStorage.getItem('userEmail');
//     return (
//       <header id='header' className="fixed-top " >
//         <div className="container d-flex align-items-center ">
//           <h1 className="logo"><a href="/">IMDB</a></h1>
//           <nav className="nav-menu d-none d-lg-block">
//             <ul>
//               <li className="active"><Link to="/">Home</Link></li>
//               <li className="active"><Link to="/movies">Catalogue</Link></li>
//               <li className="active"><Link to="/contacts">Contacts</Link></li>
              // {/* <li className="active"><Link to="/about">About</Link></li> */}
              // {userEmail && <li className="active"><Link to="/users">{userEmail}</Link></li>}
              // {userEmail && <li className="active"><Link to="#" onClick={() => this.logout()}>Logout</Link></li>}
              // {!userEmail && <li className="active"><Link to="/login">Login</Link></li>}
              // {!userEmail && <li className="active"><Link to="/register" >Register</Link></li>}
//             </ul>
//           </nav>
//         </div>
//       </header>)
//   }
// }
// export default withRouter(NavMenu)
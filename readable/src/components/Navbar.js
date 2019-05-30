import {Navbar} from 'react-bootstrap';
import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';

class NavbarInstance extends Component {
  render() {
    return (
      <Navbar className="nav-header" bg="dark" variant="dark">
          <Navbar.Brand>
            <Link className="link-brand" to="/">
              <h2 className="text-center">Readable Udacity</h2>
            </Link>
          </Navbar.Brand>
      </Navbar>
    );
  }
}

export default connect()(NavbarInstance);

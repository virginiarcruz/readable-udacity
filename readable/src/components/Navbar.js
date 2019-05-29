import {Navbar} from 'react-bootstrap';
import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';

class NavbarInstance extends Component {
  render() {
    return (
      <Navbar className="">
        <Navbar.Header>
          <Navbar.Brand >
            <Link to="/">
              <h2 className="text-center">Readable Udacity</h2>
            </Link>
          </Navbar.Brand>
        </Navbar.Header>
      </Navbar>
    );
  }
}

export default connect()(NavbarInstance);

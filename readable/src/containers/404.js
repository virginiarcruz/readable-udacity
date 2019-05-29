import React, {Component} from 'react';
import Navbar from '../components/Navbar';

class NotFoundPage extends Component {

  render() {
    return (
      <div>
      <Navbar/>
      <div className="text-center">
      <h1> ERROR : 404 </h1>
      <h3> Page not found </h3>
      </div>
      </div>
    );
  }
}

export default NotFoundPage;

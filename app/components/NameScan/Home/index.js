import React, { Component } from 'react';
import pubsub from 'pubsub-js';

class Home extends Component {

  componentWillMount() {
    pubsub.publish('setPageTitle', this.constructor.name);
  }

  render() {
    return(
      <h4>HomePage Coming Soon</h4>
    );
  }
}

export default Home;

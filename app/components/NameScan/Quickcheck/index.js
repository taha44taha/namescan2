import React, { Component } from 'react';
import pubsub from 'pubsub-js';

class Quickcheck extends Component {

  componentWillMount() {
    pubsub.publish('setPageTitle', this.constructor.name);
  }

  render() {
    return(
      <div>Quickcheck page coming soon</div>
    );
  }
}

export default Quickcheck;

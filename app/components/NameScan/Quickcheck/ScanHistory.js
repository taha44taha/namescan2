import React, { Component } from 'react';
import pubsub from 'pubsub-js';

export default class ScanHistory extends Component {

  componentWillMount() {
    pubsub.publish('setPageTitle', this.constructor.name);
  }

  render() {
    return(
      <div>ScanHistory page coming soon</div>
    );
  }
}

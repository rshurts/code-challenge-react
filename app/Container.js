import React, { Component } from 'react';

// Polyfills
import 'whatwg-fetch';

import List from './List';

class Container extends Component {
  constructor() {
    super();
    this.state = { activities: [] };
  }

  componentDidMount() {
    fetch('https://nuvi-challenge.herokuapp.com/activities', {
      method: 'get',
    })
    .then((response) => {
      if (!response.ok) {
        throw new Error(`Recieved ${response.status} when getting activities.`);
      } else {
        return response.json();
      }
    })
    .then((responseJSON) => {
      this.setState({ activities: responseJSON });
    })
    .catch((error) => {
      console.error(error);
    });
  }

  render() {
    return (
      <div>
        <List activities={this.state.activities} />
      </div>
    );
  }
}

export default Container;

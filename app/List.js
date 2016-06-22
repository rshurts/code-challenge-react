import React, { Component } from 'react';

import Card from './Card';

class List extends Component {
  render() {
    let activities = this.props.activities.map((activity) => {
      return (
        <Card
          key={activity.id}
          {...activity}
        />
      );
    });

    return (
      <div>
        {activities}
      </div>
    );
  }
}

export default List;

import React, { PropTypes } from 'react';

import Card from './Card';

const propTypes = {
  activities: PropTypes.arrayOf(PropTypes.object).isRequired,
};

function List(props) {
  let activities = props.activities.map((activity) => {
    return <Card key={activity.id} {...activity} />;
  });

  return <div>{activities}</div>;
}

List.propTypes = propTypes;

export default List;

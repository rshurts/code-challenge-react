import React, { PropTypes } from 'react';
import { Image, Media, Well } from 'react-bootstrap';

const propTypes = {
  // Required props
  actor_avator: PropTypes.string.isRequired,
  actor_description: PropTypes.string.isRequired,
  actor_name: PropTypes.string.isRequired,
  actor_url: PropTypes.string.isRequired,
  actor_username: PropTypes.string.isRequired,

  // Optional props
  activity_latitude: PropTypes.string,
  activity_longitude: PropTypes.string,
};

function Metadata(props) {
  return (
    <div>
      <Well>
        <Media>
          <Media.Left>
            <Image
              src={props.actor_avator}
              alt={props.actor_username}
              height="160"
              width="160"
              rounded
            />
          </Media.Left>
          <Media.Body>
            <p><strong>Name:</strong> {props.actor_name}</p>
            <p><strong>Description:</strong> {props.actor_description}</p>
            <p><strong>Username:</strong> {props.actor_username}</p>
            <p><strong>Profile:</strong> <a href={props.actor_url}>{props.actor_url}</a></p>
            <p><strong>Location:</strong> {props.activity_latitude} {props.activity_longitude}</p>
          </Media.Body>
        </Media>
      </Well>
    </div>
  );
}

Metadata.propTypes = propTypes;

export default Metadata;

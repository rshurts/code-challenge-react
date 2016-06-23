import React, { PropTypes } from 'react';
import { Image, Label, Glyphicon } from 'react-bootstrap';

const propTypes = {
  // Required props
  activity_comments: PropTypes.number.isRequired,
  activity_date: PropTypes.string.isRequired,
  activity_likes: PropTypes.number.isRequired,
  activity_shares: PropTypes.number.isRequired,
  activity_url: PropTypes.string.isRequired,
  actor_name: PropTypes.string.isRequired,
  actor_url: PropTypes.string.isRequired,
  provider: PropTypes.string.isRequired,

  // Optional props
  activity_attachment: PropTypes.string,
  activity_attachment_type: PropTypes.string,
  activity_message: PropTypes.string,
};

function Activity(props) {
  let activityContent;
  if (props.activity_attachment_type) {
    activityContent = (
      <Image
        src={props.activity_attachment}
        alt={props.activity_attachment}
        rounded
      />
    );
  } else {
    activityContent = (<h3>{props.activity_message}</h3>);
  }

  return (
    <div>
      {activityContent}
      <h4>
        Posted by <a href={props.actor_url}>{props.actor_name}</a> {' '}
        on {props.activity_date} {' '}
        to <a href={props.activity_url}>{props.provider}</a>. {' '}
        <Label bsStyle="info"><Glyphicon glyph="heart" /> {props.activity_likes}</Label> {' '}
        <Label bsStyle="info"><Glyphicon glyph="share-alt" /> {props.activity_shares}</Label> {' '}
        <Label bsStyle="info"><Glyphicon glyph="comment" /> {props.activity_comments}</Label> {' '}
      </h4>
    </div>
  );
}

Activity.propTypes = propTypes;

export default Activity;

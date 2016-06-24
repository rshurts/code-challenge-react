import React, { Component, PropTypes } from 'react';
import { Collapse, Panel } from 'react-bootstrap';

import Content from './Content';
import Interactions from './Interactions';
import Metadata from './Metadata';

const propTypes = {
  // Required props
  activity_comments: PropTypes.number.isRequired,
  activity_date: PropTypes.string.isRequired,
  activity_likes: PropTypes.number.isRequired,
  activity_shares: PropTypes.number.isRequired,
  activity_sentiment: PropTypes.number.isRequired,
  activity_url: PropTypes.string.isRequired,
  actor_avator: PropTypes.string.isRequired,
  actor_description: PropTypes.string.isRequired,
  actor_name: PropTypes.string.isRequired,
  actor_url: PropTypes.string.isRequired,
  actor_username: PropTypes.string.isRequired,
  provider: PropTypes.string.isRequired,

  // Optional props
  activity_attachment: PropTypes.string,
  activity_attachment_type: PropTypes.string,
  activity_latitude: PropTypes.string,
  activity_longitude: PropTypes.string,
  activity_message: PropTypes.string,
};

class Card extends Component {
  constructor() {
    super();
    this.state = { showMetadata: false };
    this.toggleMetadata = this.toggleMetadata.bind(this);
  }

  toggleMetadata() {
    this.setState({ showMetadata: !this.state.showMetadata });
  }

  render() {
    let titleSentiment;
    let titleColor;
    if (this.props.activity_sentiment > 0) {
      titleSentiment = (<h2>Positive</h2>);
      titleColor = 'success';
    } else if (this.props.activity_sentiment < 0) {
      titleSentiment = (<h2>Negative</h2>);
      titleColor = 'danger';
    } else {
      titleSentiment = (<h2>Neutral</h2>);
      titleColor = 'warning';
    }

    return (
      <div className="card">
        <Panel header={titleSentiment} bsStyle={titleColor}>
          <Content
            activity_comments={this.props.activity_comments}
            activity_date={this.props.activity_date}
            activity_likes={this.props.activity_likes}
            activity_shares={this.props.activity_shares}
            activity_url={this.props.activity_url}
            actor_name={this.props.actor_name}
            actor_url={this.props.actor_url}
            provider={this.props.provider}
            activity_attachment={this.props.activity_attachment}
            activity_attachment_type={this.props.activity_attachment_type}
            activity_message={this.props.activity_message}
          />

          <Interactions
            showMetadata={this.state.showMetadata}
            metadataCallbacks={{ toggle: this.toggleMetadata.bind(this) }}
          />

          <Collapse in={this.state.showMetadata}>
            <div>
              <br /> {/* Quick fix to make spacing look better. */}
              <Metadata
                activity_latitude={this.props.activity_latitude}
                activity_longitude={this.props.activity_longitude}
                actor_avator={this.props.actor_avator}
                actor_description={this.props.actor_description}
                actor_name={this.props.actor_name}
                actor_url={this.props.actor_url}
                actor_username={this.props.actor_username}
              />
            </div>
          </Collapse>
        </Panel>
      </div>
    );
  }
}

Card.propTypes = propTypes;

export default Card;

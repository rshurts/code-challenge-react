import React, { Component } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import { Button, ButtonToolbar, Panel } from 'react-bootstrap';

class Card extends Component {
  constructor() {
    super(...arguments);
    this.state = {
      showMetadata: false,
    };
  }

  toggleMetadata() {
    this.setState({ showMetadata: !this.state.showMetadata });
  }

  render() {
    let cardMetadata;
    if (this.state.showMetadata) {
      cardMetadata = (
        <div className="card-metadata">
            <img src={this.props.actor_avator} alt={this.props.actor_username} />
          <ul>
            <li>Name: {this.props.actor_name}</li>
            <li>Description: {this.props.actor_description}</li>
            <li>Username: {this.props.actor_username}</li>
            <li>Profile: {this.props.actor_url}</li>
            <li>Location: {this.props.activity_longitude} {this.props.activity_latitude}</li>
          </ul>
        </div>
      );
    }

    let activityMessage;
    if (this.props.activity_attachment_type) {
      activityMessage = (<img src={this.props.activity_attachment} alt={this.props.activity_attachment} />);
    } else {
      activityMessage = (<p>{this.props.activity_message}</p>);
    }

    let titleSentiment;
    let titleColor;
    if (this.props.activity_sentiment > 0) {
      titleSentiment = 'Positive';
      titleColor = 'success';
    } else if (this.props.activity_sentiment < 0) {
      titleSentiment = 'Negative';
      titleColor = 'danger';
    } else {
      titleSentiment = 'Neutral';
      titleColor = 'warning';
    }

    let metadataTitle = this.state.showMetadata ? 'Hide Metadata' : 'Show Metadata';

    return (
      <div className="card">
        <Panel header={titleSentiment} bsStyle={titleColor}>
          <div className="activity-content">
            {activityMessage}
            <p>Posted by {this.props.actor_name} on {this.props.provider} on {this.props.activity_date}.</p>
          </div>

          <div className="activity-reach">
            <ul>
              <li>Likes: {this.props.activity_likes}</li>
              <li>Shares: {this.props.activity_shares}</li>
              <li>Comments: {this.props.activity_comments}</li>
            </ul>
          </div>

          <div className="interactions">
            <ButtonToolbar>
              <Button>Like</Button>
              <Button>Share</Button>
              <Button>Comment</Button>
              <Button bsStyle="info" onClick={this.toggleMetadata.bind(this)}>{metadataTitle}</Button>
            </ButtonToolbar>
          </div>

          <ReactCSSTransitionGroup
            transitionName="toggle"
            transitionEnterTimeout={300}
            transitionLeaveTimeout={300}
          >
            {cardMetadata}
          </ReactCSSTransitionGroup>
        </Panel>
      </div>
    );
  }
}

export default Card;

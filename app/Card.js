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
            <li>Profile: <a href={this.props.actor_url}>{this.props.actor_url}</a></li>
            <li>Location: {this.props.activity_longitude} {this.props.activity_latitude}</li>
          </ul>
        </div>
      );
    }

    let activityMessage;
    if (this.props.activity_attachment_type) {
      activityMessage = (
        <img src={this.props.activity_attachment} alt={this.props.activity_attachment} />
      );
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
          <div>
            {activityMessage}
            <p>
              Posted by <a href={this.props.actor_url}>{this.props.actor_name}</a> {' '}
              on <a href={this.props.activity_url}>{this.props.provider}</a> {' '}
              on {this.props.activity_date}.
            </p>
          </div>

          <div>
            <ul>
              <li>&#10084; {this.props.activity_likes}</li>
              <li>&#10150; {this.props.activity_shares}</li>
              <li>&#9998; {this.props.activity_comments}</li>
            </ul>
          </div>

          <div>
            <ButtonToolbar>
              <Button>&#10084; Like</Button>
              <Button>&#10150; Share</Button>
              <Button>&#9998; Comment</Button>
              <Button
                bsStyle="info"
                onClick={this.toggleMetadata.bind(this)}
              >
                {metadataTitle}
              </Button>
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

import React, { Component } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

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
          <ul>
            <li>Avatar: <img src={this.props.actor_avator} alt={this.props.actor_username} /></li>
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
    console.log(this.props.activity_attachment_type);
    if (this.props.activity_attachment_type) {
      activityMessage = (<img src={this.props.activity_attachment} alt={this.props.activity_attachment} />);
    } else {
      activityMessage = (<p>{this.props.activity_message}</p>);
    }

    return (
      <div className="card">

        <div className="activity-content">
          <p>Sentiment: {this.props.activity_sentiment}</p>
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
          <button>Like</button>
          <button>Share</button>
          <button>Comment</button>
          <button onClick={this.toggleMetadata.bind(this)}>View Metadata</button>
        </div>

        <ReactCSSTransitionGroup
          transitionName="toggle"
          transitionEnterTimeout={300}
          transitionLeaveTimeout={300}
        >
          {cardMetadata}
        </ReactCSSTransitionGroup>
      </div>
    );
  }
}

export default Card;

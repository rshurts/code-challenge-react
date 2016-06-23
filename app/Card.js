import React, { Component } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import { Button, ButtonToolbar, Collapse, Image, Label, Media, Panel, Glyphicon, Well } from 'react-bootstrap';

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
    let cardMetadata = (
      <div>
        <Well>
          <Media>
            <Media.Left>
              <Image src={this.props.actor_avator} alt={this.props.actor_username} height="160" width="160" />
            </Media.Left>
            <Media.Body>
              <p><strong>Name:</strong> {this.props.actor_name}</p>
              <p><strong>Description:</strong> {this.props.actor_description}</p>
              <p><strong>Username:</strong> {this.props.actor_username}</p>
              <p><strong>Profile:</strong> <a href={this.props.actor_url}>{this.props.actor_url}</a></p>
              <p><strong>Location:</strong> {this.props.activity_longitude} {this.props.activity_latitude}</p>
            </Media.Body>
          </Media>
        </Well>
      </div>
    );

    let activityMessage;
    if (this.props.activity_attachment_type) {
      activityMessage = (
        <img src={this.props.activity_attachment} alt={this.props.activity_attachment} />
      );
    } else {
      activityMessage = (<h3>{this.props.activity_message}</h3>);
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
            <h4>
              Posted by <a href={this.props.actor_url}>{this.props.actor_name}</a> {' '}
              on {this.props.activity_date} {' '}
              to <a href={this.props.activity_url}>{this.props.provider}</a>. {' '}
              <Label bsStyle="info"><Glyphicon glyph="heart" /> {this.props.activity_likes}</Label> {' '}
              <Label bsStyle="info"><Glyphicon glyph="share-alt" /> {this.props.activity_shares}</Label> {' '}
              <Label bsStyle="info"><Glyphicon glyph="comment" /> {this.props.activity_comments}</Label> {' '}
            </h4>
          </div>

          <div>
            <ButtonToolbar>
              <Button><Glyphicon glyph="heart" /> Like</Button>
              <Button><Glyphicon glyph="share-alt" /> Share</Button>
              <Button><Glyphicon glyph="comment" /> Comment</Button>
              <Button
                bsStyle="info"
                onClick={this.toggleMetadata.bind(this)}
              >
                {metadataTitle}
              </Button>
            </ButtonToolbar>
          </div>
          <Collapse in={this.state.showMetadata}>
            {cardMetadata}
          </Collapse>
          {/*
          <ReactCSSTransitionGroup
            transitionName="toggle"
            transitionEnterTimeout={300}
            transitionLeaveTimeout={300}
          >
            {cardMetadata}
            </ReactCSSTransitionGroup>
            */}
        </Panel>
      </div>
    );
  }
}

export default Card;

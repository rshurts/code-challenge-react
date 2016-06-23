import React, { Component } from 'react';
import { Button, ButtonToolbar, Collapse, Label, Panel, Glyphicon } from 'react-bootstrap';

import Metadata from './Metadata';

class Card extends Component {
  constructor() {
    super();
    this.state = {
      showMetadata: false,
    };
  }

  toggleMetadata() {
    this.setState({ showMetadata: !this.state.showMetadata });
  }

  render() {
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
      titleSentiment = (<h2>Positive</h2>);
      titleColor = 'success';
    } else if (this.props.activity_sentiment < 0) {
      titleSentiment = (<h2>Negative</h2>);
      titleColor = 'danger';
    } else {
      titleSentiment = (<h2>Neutral</h2>);
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
            <div>
              <br />
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

export default Card;

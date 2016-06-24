import React, { Component, PropTypes } from 'react';
import { Button, ButtonToolbar, Glyphicon } from 'react-bootstrap';

const propTypes = {
  showMetadata: PropTypes.bool.isRequired,
  metadataCallbacks: PropTypes.object.isRequired,
};

class Interactions extends Component {
  constructor(props) {
    super(props);
    this.toggleMetadata = this.props.metadataCallbacks.toggle.bind(this);
  }

  render() {
    return (
      <ButtonToolbar>
        <Button><Glyphicon glyph="heart" /> Like</Button>
        <Button><Glyphicon glyph="share-alt" /> Share</Button>
        <Button><Glyphicon glyph="comment" /> Comment</Button>
        <Button bsStyle="info" onClick={this.toggleMetadata}>
          {this.props.showMetadata ? 'Hide Metadata' : 'Show Metadata'}
        </Button>
      </ButtonToolbar>
    );
  }
}

Interactions.propTypes = propTypes;

export default Interactions;

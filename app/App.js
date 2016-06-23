import React from 'react';
import { render } from 'react-dom';

import List from './List';

const activitiesList = [
  {
    activity_attachment: 'https://placehold.it/500x500.jpeg/ffffff/000',
    activity_attachment_type: 'image/jpeg',
    activity_comments: 3,
    activity_date: '2016-06-22',
    activity_latitude: null,
    activity_likes: 3,
    activity_longitude: null,
    activity_message: ' https://placehold.it/500x500.jpeg/ffffff/000',
    activity_sentiment: 1,
    activity_shares: 2,
    activity_url: 'https://facebook.com/fanny/8282684670',
    actor_avator: 'https://robohash.org/fanny.png?size=300x300&set=set1',
    actor_description: 'Synchronised maximized internet solution',
    actor_name: 'Randi Kub V',
    actor_url: 'https://facebook.com/fanny',
    actor_username: 'fanny',
    id: '8282684670',
    provider: 'facebook',
  },
  {
    activity_attachment: 'https://placehold.it/500x500.jpeg/ffffff/000',
    activity_attachment_type: 'image/jpeg',
    activity_comments: 5,
    activity_date: '2016-06-20',
    activity_latitude: null,
    activity_likes: 69,
    activity_longitude: null,
    activity_message: ' https://placehold.it/500x500.jpeg/ffffff/000',
    activity_sentiment: 1,
    activity_shares: 47,
    activity_url: 'https://twitter.com/macy.durgan/2254123057',
    actor_avator: 'https://robohash.org/macy.durgan.png?size=300x300&set=set1',
    actor_description: 'Profit-focused optimizing contingency',
    actor_name: 'Rozella Lehner',
    actor_url: 'https://twitter.com/macy.durgan',
    actor_username: 'macy.durgan',
    id: '2254123057',
    provider: 'twitter',
  },
  {
    activity_attachment: null,
    activity_attachment_type: null,
    activity_comments: 1,
    activity_date: '2016-06-20',
    activity_latitude: null,
    activity_likes: 38,
    activity_longitude: null,
    activity_message: 'Tempore spero in cuppedia.',
    activity_sentiment: 1,
    activity_shares: 25,
    activity_url: 'https://facebook.com/chelsie.jerde/4838560657',
    actor_avator: 'https://robohash.org/chelsie.jerde.png?size=300x300&set=set1',
    actor_description: 'Fundamental uniform firmware',
    actor_name: 'Dr. Damaris Spencer',
    actor_url: 'https://facebook.com/chelsie.jerde',
    actor_username: 'chelsie.jerde',
    id: '4838560657',
    provider: 'facebook',
  },
  {
    activity_attachment: 'https://placehold.it/500x500.jpeg/ffffff/000',
    activity_attachment_type: 'image/jpeg',
    activity_comments: 2,
    activity_date: '2016-06-20',
    activity_latitude: '56.73759283559909',
    activity_likes: 67,
    activity_longitude: '10.854441862324705',
    activity_message: ' https://placehold.it/500x500.jpeg/ffffff/000',
    activity_sentiment: 1,
    activity_shares: 22,
    activity_url: 'https://facebook.com/amara/9282164784',
    actor_avator: 'https://robohash.org/amara.png?size=300x300&set=set1',
    actor_description: 'Extended background portal',
    actor_name: 'Aleen Sawayn',
    actor_url: 'https://facebook.com/amara',
    actor_username: 'amara',
    id: '9282164784',
    provider: 'facebook',
  },
];

render(
  <div className="container">
    <header>
      <h1>Russell Shurts <small>Code Challenge (React)</small></h1>
      <p>
        Source code: <a href="https://github.com/rshurts/code-challenge-react">
          https://github.com/rshurts/code-challenge-react
        </a>
      </p>
      <p>
        LinkedIn profile: <a href="https://www.linkedin.com/in/russellwshurts">
          https://www.linkedin.com/in/russellwshurts
        </a>
      </p>
    </header>
    <List activities={activitiesList} />
  </div>, document.getElementById('root'));

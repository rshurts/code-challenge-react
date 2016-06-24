import React from 'react';
import { render } from 'react-dom';

import Container from './Container';

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
    <Container />
  </div>,
  document.getElementById('root')
);

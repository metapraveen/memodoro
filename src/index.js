import React from 'react';
import ReactDOM from 'react-dom';
import { injectGlobal } from 'emotion';

import Home from './home';

ReactDOM.render(<Home />, document.getElementById('root'));

injectGlobal`
  * {
    box-sizing: border-box;
  }
`;

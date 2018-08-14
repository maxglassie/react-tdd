import React from 'react';
// handles rendering the dom
import { render } from 'react-dom';
import App from './components/App';

// target root element by id on document
// there's a div in index.html labeled root for this purpose
// we're doing this to run in localhost
render(<App/>, document.getElementById('root'));


import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import { scatterplot } from './visualizations';
// import './visualizations/flare.js';

scatterplot();

ReactDOM.render(<App />, document.getElementById('root'));

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import { scatterplot } from './visualizations';

scatterplot();

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();

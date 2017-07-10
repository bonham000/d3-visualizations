import React from 'react';
import ReactDOM from 'react-dom';

/* Import Visualizations */
import {
  flare,
  scatterplot
} from './visualizations';

/* Run Visualization Code */
flare();
// scatterplot();

class App extends React.Component {
  render() {
    return (
      <div>
        <h2>Welcome to D3</h2>
      </div>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);

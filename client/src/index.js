import React from 'react';
import ReactDOM from 'react-dom';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import App from './App';
import ThemeContextWrapper from './Context/ThemeContextWrapper';

ReactDOM.render(
  <ThemeContextWrapper>
    <App />
  </ThemeContextWrapper>,
  document.getElementById('root')
);

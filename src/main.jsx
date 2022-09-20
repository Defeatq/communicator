import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import PagesRouter from './commons/components/PagesRouter';
import store from './store/store';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={ store }>
      <PagesRouter />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

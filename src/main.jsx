import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/home/components/Home';
import CardSearchPage from './pages/card-search/components/CardSearchPage';
import UndefinedPage from './pages/undefined/components/UndefinedPage';
import CommunicatorPage from './pages/communicator/components/CommunicatorPage';
import { Provider } from 'react-redux';
import store from './store/store';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={ store }>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={ <Home /> } />
          <Route path='cards' element={ <CardSearchPage /> } />
          <Route path='communicator' element={ <CommunicatorPage /> } />
          <Route path='*' element={ <UndefinedPage /> } />
        </Routes>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

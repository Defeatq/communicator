import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/home/components/Home';
import CardSearchPage from './pages/card-search/components/CardSearchPage';
import UndefinedPage from './pages/undefined/components/UndefinedPage';
import CommunicatorPage from './pages/communicator/components/CommunicatorPage';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={ <Home /> } />
        <Route path='cards' element={ <CardSearchPage /> } />
        <Route path='communicator' element={ <CommunicatorPage /> } />
        <Route path='*' element={ <UndefinedPage /> } />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

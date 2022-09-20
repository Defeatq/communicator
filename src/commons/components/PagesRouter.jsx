import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from '../../pages/home/components/Home'
import CardSearchPage from '../../pages/card-search/components/CardSearchPage';
import UndefinedPage from '../../pages/undefined/components/UndefinedPage';
import CommunicatorPage from '../../pages/communicator/components/CommunicatorPage'

function PagesRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={ <Home /> } />
        <Route path='cards' element={ <CardSearchPage /> } />
        <Route path='communicator' element={ <CommunicatorPage /> } />
        <Route path='*' element={ <UndefinedPage /> } />
      </Routes>
    </BrowserRouter>
  )
}

export default PagesRouter;

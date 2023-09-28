import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import {HashRouter, Routes, Route} from 'react-router-dom'
import ArtworksPage from './routes/ArtworksPage';
import CreatorsPage from './routes/CreatorsPage';
import TransactionsPage from './routes/TransactionsPage';
import Navbar from './components/Navbar';




ReactDOM.render(
  <HashRouter>
    <Navbar />
    <Routes>
      <Route path='/' element={<App />} />
      <Route path='/artworks' element={<ArtworksPage />} />
      <Route path='/creators' element={<CreatorsPage />} />
      <Route path='/transactions' element={<TransactionsPage />} />
    </Routes>
  </HashRouter>,
  document.getElementById('root')
);


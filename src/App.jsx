import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Hero from './components/Hero';
import Artworks from './components/Artworks';
import Creators from './components/Creators';
import Transactions from './components/Transactions';
import Footer from './components/Footer';
import Header from './components/Header';
import UpdateNFT from './components/UpdateNFT';
import ShowNFT from './components/ShowNFT';

const App = () => {
  return (
    <div className="gradient-bg-hero">
      <Header />
      <ShowNFT />
      <UpdateNFT />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/artworks" element={<Artworks />} />
        <Route path="/creators" element={<Creators />} />
        <Route path="/transactions" element={<Transactions />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;

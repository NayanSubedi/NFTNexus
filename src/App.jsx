import React from 'react';

import Hero from './components/Hero';
import Artworks from './components/Artworks';
import Creators from './components/Creators';
import Transactions from './components/Transactions';
import Footer from './components/Footer';
import UpdateNFT from './components/UpdateNFT';
import ShowNFT from './components/ShowNFT'
import Navbar from './components/Navbar';



const App = () => {
  return (
    <>
      <div className='gradient-bg-hero' />
      <Navbar />
      <Hero />
      <UpdateNFT />
      <Artworks />
      <ShowNFT />
      <Creators />
      <Transactions />

      <Footer />
    </>
  );
};

export default App;

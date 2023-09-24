import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Link, animateScroll as scroll } from 'react-scroll'; 
import Home from './components/Home';
import Artworks from './components/Artworks';
import Creators from './components/Creators';
import Transactions from './components/Transactions';
import Footer from './components/Footer';
import Header from './components/Header';
import UpdateNFT from './components/UpdateNFT';
import ShowNFT from './components/ShowNFT'


const App = () => {
  return (
    <div className="min-h-screen">
      <div className="gradient-bg-hero">
        <Header />
        <Home />
        <UpdateNFT />
      <Artworks />
      <ShowNFT />
      <Creators />
      <Transactions />

      <Footer />
      </div>
    </div>
  );
};

export default App;

import React from 'react';
import './styles/app.css'
import Header from './components/Header';
import BenefitBlocks from './components/BenefitBlocks';
import Footer from './components/Footer';
import Demonstration from './components/Demonstration';
import MoreBenefits from './components/MoreBenefits';

export default function App() {
  return (
    <div className="App">
      <Header/>
      <Demonstration/>
      <BenefitBlocks/>
      <MoreBenefits/>
      <Footer/>
    </div>
  );
}

/*
*/
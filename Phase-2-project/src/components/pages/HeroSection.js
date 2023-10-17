
import React from 'react';
import { Button } from '../Button';
import '../../Style/HeroSection.css';

function HeroSection() {
  return (
    <div className='hero-container'>
      <h1>Welcome To WavyHauzTrts</h1>
      <p>Join the Wave</p>
      <div className='hero-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          Purchase
        </Button>
        <Button
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
          onClick={console.log('what would you like?')}
        >
          Subscribe for updates
          <i class="fa-solid fa-user-plus"></i>
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;
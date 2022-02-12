import React, { useState } from 'react';
import './WhiteBar.css';
import DropMenu from './DropMenu';

const WhiteBar = () => {
  const [SBchecked, setSBchecked] = useState(false);
  const [LBchecked, setLBchecked] = useState(false);

  const handleClickSB = () => {
    console.log(SBchecked);
    setSBchecked(prevSB => !prevSB)
  };

  const handleClickLB = () => {
    console.log(LBchecked);
    setLBchecked(prevLB => !prevLB)
  };

  const caroImg = <img id='caroImg' crossOrigin='anonymous' 
                   src='https://mweb-cdn.karousell.com/build/carousell-logo-title-2Nnf7YFiNk.svg'
                   title='https://www.caroclone.sg' alt='Carousel logo'/>;

  const searchBar = <input id='inputSB' onClick={handleClickSB} 
                    placeholder={SBchecked ? '' : 'Search for an item'}
                    spellCheck ='false' type='text'/>

  const localImg = <img id='localImg' crossOrigin='anonymous'
                    src='https://mweb-cdn.karousell.com/build/location-marker-3oFjIUvG4o.svg'
                    alt='Location logo' />;

  const localBar = <input id='inputLB' onClick={handleClickLB}
                    placeholder={LBchecked ? 'MRT, area or neighbourhood' : 'All of Singapore'}
                    spellCheck='false' type='text'/>

  return (
    <>
     <div className='whiteBar'>
      <div className='contentBar'>
        <a className='caroLogo' href='/'>{caroImg}</a>
        <div className='mainSB'>

        <form className='formSB' aria-label='form'>
          <div className={SBchecked ? 'S1 SLC' : 'S1'}>
          <div className='S2'>
            <div className='S3'>
            <div className='realSB'>
                {searchBar}
            </div>
            </div>
           </div>
          </div>

          <div className='separator'></div>
  
          <div className={LBchecked ? 'mainLB SLC' : 'mainLB'}>
           <div className='L1'>
            <div className='L2'>
            <div className='realLB'>
              {localImg}
              {localBar}
            </div>
           </div>
          </div>
          {LBchecked && <DropMenu />}
          
          </div>
          <div className='L3'>
          <button id='searchButton' type='submit'>  
            <svg className='searchSVG' viewBox='0 0 24 24' xmlns='https://www.w3.org/2000/svg'>
                <title>Search Icon</title>
                <path d="M 15.618 17.032 a 9 9 0 1 1 1.414 -1.414 l 
                5.675 5.675 a 1 1 0 0 1 -1.414 1.414 l -5.675 -5.675 
                Z m -0.701 -2.05 a 1.017 1.017 0 0 1 0.065 -0.065 a 
                7 7 0 1 0 -0.066 0.066 Z"  fill='#ffffff'></path>
            </svg>
          </button>
         </div>
        </form>

        </div>
      </div>

      <div className='mainSignUp'>
        <div className='U1'>
          <a class='signUpButton' href='/'>
          <span class='signUp'>Sell</span>
          </a>
        </div>
      </div>
     </div>
    </>
  );
};

export default WhiteBar;

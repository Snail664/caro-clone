import React, { useState } from 'react';
import MrtMenu from './MrtMenu';
import AreaMenu from './AreaMenu';
import NghMenu from './NeighbourhoodMenu';
import './DropMenu.css';

const listing = <img className='listing' alt=''
                     src='https://mweb-cdn.karousell.com/build/current-location-14BeLMAJ9Q.svg' />
    

const sg = <img className='sg' crossorigin='anonymous' alt=''
                src='https://mweb-cdn.karousell.com/build/location-marker-3oFjIUvG4o.svg' />

const mrtImg = <img className='mrtImg' crossorigin='anonymous' alt=''
                src='https://mweb-cdn.karousell.com/build/location-mrt-1ByybWDm38.svg' />
    
const areaImg = <img className='areaImg' crossorigin='anonymous' alt=''
                src='https://mweb-cdn.karousell.com/build/location-area-2GCzczZ_kg.svg' />

const nghImg = <img className='nghImg' crossorigin='anonymous' alt=''
                src='https://mweb-cdn.karousell.com/build/location-neighbourhood-3mplDMYV95.svg' />

const DropMenu = () => {

    const [MRT, setMRT] = useState(false);
    const [Area, setArea] = useState(false);
    const [Ngh, setNgh] = useState(false);
    const [Add1, setAdd1] = useState(false);

    const handleClickMRT = () => {
      console.log(MRT);
      setMRT(prevMRT => !prevMRT);
    }

    const handleClickArea = () => {
      console.log(Area);
      setArea(prevArea => !prevArea);
    }

    const handleClickNgh = () => {
      console.log(Ngh);
      setNgh(prevNgh => !prevNgh);
    }

    const mrtToDrop = () => {
      console.log(Add1);
      setAdd1(prevAdd1 => !prevAdd1);
    }

    return (
       <> 
        <div className='DpdMenu' style={{left: '289.725px', position: 'absolute', top: '46px'}}>
         <div>
          { Add1 && 
          <div className = 'hlboxtext'>
            <div>
              <div className = 'Add1checked'>
                <p className = 'Add1text'>Admiralty (NS10)</p>
                <button className = 'crossmark' type='button'>
                  <svg class fill='#57585a' fill-rule='nonzero' height='16'
                  viewbox='0 0 24 24' width='16' xlmns='http://www.w3.org/2000/svg'>
                    <title>Close Icon</title>
                    <path d="M13.414 12l5.293 5.293a1 1 0 0 1-1.414 1.414L12 13.414l-5.293 5.293a1 
                    1 0 1 1-1.414-1.414L10.586 12 5.293 6.707a1 1 0 0 1 1.414-1.414L12 10.586l5.293-5.293a1 
                    1 0 0 1 1.414 1.414L13.414 12z" id="iconClose"></path>
                  </svg>
                </button>
              </div>
            </div>
          </div>
          }
          <div className='item1'>
            {listing}
            <p className='item1Text'>Listings near me</p>
          </div>
          <div className='item2'>
            {sg}
            <p className='item2Text'>All of Singapore</p>
          </div>

          <p className='searchText'>Search by</p>

          <div className='MRT' onClick={handleClickMRT}>
            <div className='item3'>
                {mrtImg}
                <p className='item3Text'>MRT</p>
            </div>
            <svg className='expand' fill='#57585a' height='24' role='img' 
            viewBox='0 0 24 24' width='24' xmlns='http://www.w3.org/2000/svg'>
                <path d="M9.29 15.88L13.17 12 9.29 8.12c-.39-.39-.39-1.02 0-1.41.39-.39 
                1.02-.39 1.41 0l4.59 4.59c.39.39.39 1.02 0 1.41L10.7 17.3c-.39.39-1.02.39-1.41 
                0-.38-.39-.39-1.03 0-1.42z" id="iconArrow"></path>
            </svg>
          </div>
          <div className='Area' onClick={handleClickArea}>
            <div className='item4'>
                {areaImg}
                <p className='item4Text'>Area</p>
            </div>
            <svg className='expand' fill='#57585a' height='24' role='img' 
            viewBox='0 0 24 24' width='24' xmlns='http://www.w3.org/2000/svg'>
                <path d="M9.29 15.88L13.17 12 9.29 8.12c-.39-.39-.39-1.02 0-1.41.39-.39 
                1.02-.39 1.41 0l4.59 4.59c.39.39.39 1.02 0 1.41L10.7 17.3c-.39.39-1.02.39-1.41 
                0-.38-.39-.39-1.03 0-1.42z" id="iconArrow"></path>
            </svg>
          </div>
          <div className='Neighbourhood' onClick={handleClickNgh}>
            <div className='item5'>
                {nghImg}
                <p className='item5Text'>Neighbourhood</p>
            </div>
            <svg className='expand' fill='#57585a' height='24' role='img' 
            viewBox='0 0 24 24' width='24' xmlns='http://www.w3.org/2000/svg'>
                <path d="M9.29 15.88L13.17 12 9.29 8.12c-.39-.39-.39-1.02 0-1.41.39-.39 
                1.02-.39 1.41 0l4.59 4.59c.39.39.39 1.02 0 1.41L10.7 17.3c-.39.39-1.02.39-1.41 
                0-.38-.39-.39-1.03 0-1.42z" id="iconArrow"></path>
            </svg>
          </div>
         </div>
        </div>
        <MrtMenu openMRT={MRT} mrttoDrop={mrtToDrop} />
        <AreaMenu openArea={Area} />
        <NghMenu openNgh={Ngh} />
     </>
    );
}

export default DropMenu;
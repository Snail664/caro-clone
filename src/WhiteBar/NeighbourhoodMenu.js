import React from 'react';
import './NeighbourhoodMenu.css';

const NghMenu = ({ openNgh }) => {
    return (
       <>
        {openNgh &&
            <div className='nMenu'>
                <label className='label1'>
                <input className='tick' name='Admiralty' type='checkbox' value="" />
                <span>Admiralty</span>
                </label>
                <label className='label2'>
                <input className='tick' name='AirportRoad' type='checkbox' value="" />
                <span>Airport Road</span>
                </label>
            </div> }
       </>
    );
};

export default NghMenu;
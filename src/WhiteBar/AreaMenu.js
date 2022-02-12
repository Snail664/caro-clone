import React from 'react'
import './AreaMenu.css';

const AreaMenu = ({ openArea }) => {
    return (
       <>
        {openArea &&
            <div className='aMenu'>
                <label className='label1'>
                <input className='tick' name='AngMoKio' type='checkbox' value="" />
                <span>Ang Mo Kio</span>
                </label>
                <label className='label2'>
                <input className='tick' name='Bedok' type='checkbox' value="" />
                <span>Bedok</span>
                </label>
            </div> }
       </>
    );
};

export default AreaMenu;
import React, { useState } from 'react';
import './MrtMenu.css';

const MrtMenu = ({ openMRT, mrtToDrop }) => {

    return (
       <>
        {openMRT &&
            <div className='mMenu'>
                <label className='label1'>
                <input className='tick' name='Admiralty' type='checkbox' value="" />
                <span>Admiralty (NS10)</span>
                </label>
                <label className='label2'>
                <input className='tick' name='Aljunied' type='checkbox' value="" />
                <span>Aljunied (EW9)</span>
                </label>
            {/* <div class="D_li D_Ez D_E_" 
                style="left: 289.725px; position: absolute; top: 46px; margin-left: 201px; min-height: 222px; width: 200.7px;">
                <div>
                    <div class="D_yG D_xU">
                        <label class="D_hu D_hw D_hj">
                            <input class="D_hv" name="Admiralty (NS10)" type="checkbox" value="">
                        <div class="D_hA">
                            <p class="D_gz D_er D_g_ D_gC D_gF D_gI D_gK D_gN"></p>
                        </div>
                        </label>
                        <span class="D_gz D_er D_g_ D_gC D_gG D_gI D_gK D_gN">Admiralty (NS10)
                        </span>
                    </div>
                </div> */}
            </div> }
       </>
    );
};

export default MrtMenu;